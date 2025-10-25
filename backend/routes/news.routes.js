// import express from 'express';
// import upload from '../middleware/uploads.middleware.js';
// import {
//   createNewsPost,
//   getAllNews,
//   getSingleNews,
//   deleteNewsPost,
// } from '../controllers/news.controller.js';

// const router = express.Router();

// // Create a news post
// router.post(
//   '/',
//   upload.fields([
//     { name: 'mainImage', maxCount: 1 },
//     { name: 'sectionImages', maxCount: 10 },
//   ]),
//   createNewsPost
// );

// // Get all news posts
// router.get('/', getAllNews);
// router.get('/:id', getSingleNews);
// router.delete('/:id', deleteNewsPost)
// export default router;
import express from 'express';
import upload from '../middleware/uploads.middleware.js';
import {
  createNewsPost,
  getAllNews,
  getSingleNews,
  deleteNewsPost,
  updateNewsPost,
  getNewsStats,
} from '../controllers/news.controller.js';
import {
  validateNewsData,
  sanitizeNewsContent,
  rateLimitNewsCreation,
  validatePaginationParams,
  logNewsRequest,
} from '../middleware/newsValidation.middleware.js';

const router = express.Router();

// Optional: Apply logging to all routes (comment out in production)
// router.use(logNewsRequest);

// Validation middleware for MongoDB ObjectId
const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  
  // MongoDB ObjectId is 24 hex characters
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return res.status(400).json({ 
      message: 'Invalid news ID format',
      error: 'ID must be a valid MongoDB ObjectId' 
    });
  }
  
  next();
};

// Optional: Authentication middleware (uncomment when ready)
// import { authenticate, authorizeAdmin } from '../middleware/auth.middleware.js';
// router.use(authenticate); // All routes require authentication
// router.use(authorizeAdmin); // All routes require admin role

// File upload configuration
const newsUploadConfig = upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'sectionImages', maxCount: 10 },
]);

// Error handling wrapper for upload middleware
const uploadWithErrorHandling = (req, res, next) => {
  newsUploadConfig(req, res, (err) => {
    if (err) {
      console.error('Upload error:', err);
      
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ 
          message: 'File too large',
          error: 'Maximum file size is 5MB'
        });
      }
      
      if (err.code === 'LIMIT_FILE_COUNT') {
        return res.status(400).json({ 
          message: 'Too many files',
          error: 'Maximum 1 main image and 10 section images allowed'
        });
      }
      
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ 
          message: 'Unexpected field',
          error: 'Only mainImage and sectionImages fields are allowed'
        });
      }
      
      return res.status(400).json({ 
        message: 'Upload failed',
        error: err.message
      });
    }
    next();
  });
};

/**
 * @route   GET /api/news/stats
 * @desc    Get news statistics (total posts, recent posts, etc.)
 * @access  Public/Admin
 * @query   None
 */
router.get('/stats', getNewsStats);

/**
 * @route   GET /api/news
 * @desc    Get all news posts with pagination
 * @access  Public
 * @query   page - Page number (default: 1)
 * @query   limit - Items per page (default: 10, max: 50)
 * @example /api/news?page=1&limit=10
 */
router.get('/', (req, res, next) => {
  // Validate and sanitize query parameters
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;
  
  // Enforce limits
  if (page < 1) page = 1;
  if (limit < 1) limit = 10;
  if (limit > 50) limit = 50; // Max 50 items per page
  
  // Update query with sanitized values
  req.query.page = page;
  req.query.limit = limit;
  
  next();
}, getAllNews);

/**
 * @route   GET /api/news/:id
 * @desc    Get a single news post by ID
 * @access  Public
 * @param   id - MongoDB ObjectId
 */
router.get('/:id', validateObjectId, getSingleNews);

/**
 * @route   POST /api/news
 * @desc    Create a new news post
 * @access  Admin
 * @body    mainTitle - Post title (required)
 * @body    excerpt - Post excerpt (required)
 * @body    sections - Array of sections with title and content (required)
 * @file    mainImage - Main image file (optional)
 * @file    sectionImages - Section image files (optional, max 10)
 */
router.post('/', uploadWithErrorHandling, createNewsPost);

/**
 * @route   PUT /api/news/:id
 * @desc    Update an existing news post
 * @access  Admin
 * @param   id - MongoDB ObjectId
 * @body    mainTitle - Post title (optional)
 * @body    excerpt - Post excerpt (optional)
 * @body    sections - Array of sections (optional)
 * @file    mainImage - New main image (optional)
 * @file    sectionImages - New section images (optional)
 */
router.put('/:id', validateObjectId, uploadWithErrorHandling, updateNewsPost);

/**
 * @route   DELETE /api/news/:id
 * @desc    Delete a news post
 * @access  Admin
 * @param   id - MongoDB ObjectId
 */
router.delete('/:id', validateObjectId, deleteNewsPost);

/**
 * @route   PATCH /api/news/:id/publish
 * @desc    Toggle publish status (if you have a published field)
 * @access  Admin
 * @param   id - MongoDB ObjectId
 */
// Uncomment if you add a published field to your model
// router.patch('/:id/publish', validateObjectId, async (req, res) => {
//   try {
//     const post = await NewsModel.findById(req.params.id);
//     if (!post) {
//       return res.status(404).json({ message: 'News post not found' });
//     }
//     
//     post.published = !post.published;
//     await post.save();
//     
//     // Invalidate cache
//     const redisClient = await getRedisClient();
//     if (redisClient) {
//       await redisClient.del('news:all', `news:${post._id}`);
//     }
//     
//     res.status(200).json({ 
//       message: `Post ${post.published ? 'published' : 'unpublished'}`,
//       published: post.published
//     });
//   } catch (err) {
//     console.error('Toggle publish error:', err);
//     res.status(500).json({ message: 'Failed to toggle publish status' });
//   }
// });

// Health check endpoint for news routes
router.get('/health/check', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    service: 'news',
    timestamp: new Date().toISOString()
  });
});

// 404 handler for undefined routes
router.use((req, res) => {
  res.status(404).json({ 
    message: 'News route not found',
    availableRoutes: [
      'GET /api/news',
      'GET /api/news/stats',
      'GET /api/news/:id',
      'POST /api/news',
      'PUT /api/news/:id',
      'DELETE /api/news/:id'
    ]
  });
});

export default router;