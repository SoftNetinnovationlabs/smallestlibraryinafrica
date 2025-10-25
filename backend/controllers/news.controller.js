// import NewsModel from '../models/news.model.js';
// import redisPromise from '../utils/redisClient.js'; // Notice: redisPromise instead of redisClient

// // Create News Post
// export const createNewsPost = async (req, res) => {
//   try {
//     const redisClient = await redisPromise; // ✅ Ensure Redis is ready

//     const { mainTitle, excerpt } = req.body;
// // 
//     console.log('Incoming body keys:', Object.keys(req.body));
//     console.log('Incoming full body:', req.body);

//     const mainImage = req.files?.['mainImage']?.[0]?.path || null;
//     const sectionImages = req.files?.['sectionImages'] || [];

//     let sections = [];
//     let rawSections = req.body.sections;

//     // Parse sections (likely stringified JSON from FormData)
//     if (typeof rawSections === 'string') {
//       try {
//         rawSections = JSON.parse(rawSections);
//       } catch (parseErr) {
//         console.error('Failed to parse sections JSON:', parseErr);
//         rawSections = [];
//       }
//     }

//     if (Array.isArray(rawSections)) {
//       sections = rawSections.map((section, index) => ({
//         title: section.title || '',
//         content: section.content || '',
//         image: sectionImages[index]?.path || '',
//       }));
//     }

//     const post = new NewsModel({
//       title: mainTitle,
//       excerpt,
//       mainImage,
//       sections,
//     });

//     await post.save();

//     // Invalidate Redis cache
//     await redisClient.del('news:all');

//     res.status(201).json({ message: 'News post created', post });
//   } catch (err) {
//     console.error('Create news post error:', err);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// // Get All News with Redis Caching
// export const getAllNews = async (req, res) => {
//   const cacheKey = 'news:all';

//   try {
//     const redisClient = await redisPromise; // ✅ Ensure Redis is ready

//     const cached = await redisClient.get(cacheKey);
//     if (cached) {
//       try {
//         const parsed = JSON.parse(cached);
//         console.log('Serving /news from Redis cache');
//         return res.status(200).json(parsed);
//       } catch (jsonErr) {
//         console.warn('Corrupted cache found. Deleting it...');
//         await redisClient.del(cacheKey);
//       }
//     }

//     // Fetch from DB
//     const news = await NewsModel.find().sort({ createdAt: -1 });

//     // ✅ Store in Redis cache for 1 hour (3600 seconds)
//     await redisClient.set(cacheKey, JSON.stringify(news), 'EX', 3600);

//     console.log('Serving /news from DB and cached');
//     res.status(200).json(news);
//   } catch (err) {
//     console.error('Error fetching news:', err);
//     res.status(500).json({ message: 'Failed to fetch news' });
//   }
// };

// // Get Single News by ID
// export const getSingleNews = async (req, res) => {
//   try {
//     const newsItem = await NewsModel.findById(req.params.id);
//     if (!newsItem) return res.status(404).json({ message: 'Not found' });
//     res.status(200).json(newsItem);
//   } catch (err) {
//     console.error('Error fetching news item:', err);
//     res.status(500).json({ message: 'Error fetching news item' });
//   }
// };

// // Delete News Post
// export const deleteNewsPost = async (req, res) => {
//   try {
//     const redisClient = await redisPromise; // ✅ Ensure Redis is ready

//     const deletedPost = await NewsModel.findByIdAndDelete(req.params.id);
//     if (!deletedPost) {
//       return res.status(404).json({ message: 'News post not found' });
//     }

//     // Invalidate Redis cache
//     await redisClient.del('news:all');

//     res.status(200).json({ message: 'News post deleted successfully' });
//   } catch (err) {
//     console.error('Delete news post error:', err);
//     res.status(500).json({ message: 'Failed to delete news post' });
//   }
// };
import NewsModel from '../models/news.model.js';
import redisPromise from '../utils/redisClient.js';
import fs from 'fs/promises';
import path from 'path';

// Helper function to get Redis client
const getRedisClient = async () => {
  try {
    return await redisPromise;
  } catch (err) {
    console.warn('Redis not available, continuing without cache:', err.message);
    return null;
  }
};

// Helper function to invalidate cache
const invalidateCache = async (patterns = ['news:all']) => {
  try {
    const redisClient = await getRedisClient();
    if (!redisClient) return;

    for (const pattern of patterns) {
      await redisClient.del(pattern);
    }
    console.log('Cache invalidated:', patterns);
  } catch (err) {
    console.warn('Cache invalidation failed:', err.message);
  }
};

// Helper function to delete uploaded files
const deleteFiles = async (filePaths) => {
  if (!Array.isArray(filePaths)) filePaths = [filePaths];
  
  for (const filePath of filePaths) {
    if (!filePath) continue;
    try {
      await fs.unlink(filePath);
      console.log('Deleted file:', filePath);
    } catch (err) {
      console.warn('Failed to delete file:', filePath, err.message);
    }
  }
};

// Validate news post data
const validateNewsData = (mainTitle, excerpt, sections) => {
  const errors = [];

  if (!mainTitle || mainTitle.trim().length === 0) {
    errors.push('Main title is required');
  } else if (mainTitle.length > 200) {
    errors.push('Main title must be less than 200 characters');
  }

  if (!excerpt || excerpt.trim().length === 0) {
    errors.push('Excerpt is required');
  } else if (excerpt.length > 500) {
    errors.push('Excerpt must be less than 500 characters');
  }

  if (!Array.isArray(sections) || sections.length === 0) {
    errors.push('At least one section is required');
  } else {
    sections.forEach((section, index) => {
      if (!section.title || section.title.trim().length === 0) {
        errors.push(`Section ${index + 1}: Title is required`);
      }
      if (!section.content || section.content.trim().length === 0) {
        errors.push(`Section ${index + 1}: Content is required`);
      }
    });
  }

  return errors;
};

// Create News Post
export const createNewsPost = async (req, res) => {
  const uploadedFiles = [];

  try {
    const { mainTitle, excerpt } = req.body;

    console.log('📥 Incoming request body keys:', Object.keys(req.body));
    console.log('📁 Files received:', Object.keys(req.files || {}));

    // Extract uploaded files
    const mainImage = req.files?.['mainImage']?.[0]?.path || null;
    const sectionImages = req.files?.['sectionImages'] || [];

    if (mainImage) uploadedFiles.push(mainImage);
    uploadedFiles.push(...sectionImages.map(img => img.path));

    // Parse sections
    let sections = [];
    let rawSections = req.body.sections;

    if (typeof rawSections === 'string') {
      try {
        rawSections = JSON.parse(rawSections);
      } catch (parseErr) {
        console.error('❌ Failed to parse sections JSON:', parseErr);
        await deleteFiles(uploadedFiles);
        return res.status(400).json({ 
          message: 'Invalid sections format',
          error: 'Sections must be valid JSON'
        });
      }
    }

    if (Array.isArray(rawSections)) {
      sections = rawSections.map((section, index) => ({
        title: section.title?.trim() || '',
        content: section.content?.trim() || '',
        image: sectionImages[index]?.path || '',
      }));
    }

    // Validate data
    const validationErrors = validateNewsData(mainTitle, excerpt, sections);
    if (validationErrors.length > 0) {
      await deleteFiles(uploadedFiles);
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Create news post
    const post = new NewsModel({
      title: mainTitle.trim(),
      excerpt: excerpt.trim(),
      mainImage,
      sections,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await post.save();
    console.log('✅ News post created:', post._id);

    // Invalidate cache
    await invalidateCache(['news:all', `news:${post._id}`]);

    res.status(201).json({ 
      message: 'News post created successfully',
      post: {
        _id: post._id,
        title: post.title,
        excerpt: post.excerpt,
        createdAt: post.createdAt
      }
    });
  } catch (err) {
    console.error('❌ Create news post error:', err);
    
    // Clean up uploaded files on error
    await deleteFiles(uploadedFiles);

    // Handle specific errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error',
        errors: Object.values(err.errors).map(e => e.message)
      });
    }

    res.status(500).json({ 
      message: 'Failed to create news post',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get All News with Redis Caching and Pagination
export const getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const cacheKey = `news:all:page:${page}:limit:${limit}`;
    const redisClient = await getRedisClient();

    // Try to get from cache
    if (redisClient) {
      const cached = await redisClient.get(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          console.log('📦 Serving news from Redis cache');
          return res.status(200).json(parsed);
        } catch (jsonErr) {
          console.warn('⚠️ Corrupted cache found. Deleting...');
          await redisClient.del(cacheKey);
        }
      }
    }

    // Fetch from database
    const [news, total] = await Promise.all([
      NewsModel.find()
        .select('title excerpt mainImage createdAt updatedAt')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      NewsModel.countDocuments()
    ]);

    const response = {
      news,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: limit,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1
      }
    };

    // Cache the response
    if (redisClient) {
      await redisClient.set(cacheKey, JSON.stringify(response), 'EX', 3600);
      console.log('💾 Cached news data');
    }

    console.log('📚 Serving news from database');
    res.status(200).json(response);
  } catch (err) {
    console.error('❌ Error fetching news:', err);
    res.status(500).json({ 
      message: 'Failed to fetch news',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get Single News by ID with Caching
export const getSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const cacheKey = `news:${id}`;
    const redisClient = await getRedisClient();

    // Try cache first
    if (redisClient) {
      const cached = await redisClient.get(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          console.log('📦 Serving single news from cache');
          return res.status(200).json(parsed);
        } catch (jsonErr) {
          await redisClient.del(cacheKey);
        }
      }
    }

    // Fetch from database
    const newsItem = await NewsModel.findById(id).lean();
    
    if (!newsItem) {
      return res.status(404).json({ message: 'News post not found' });
    }

    // Cache the result
    if (redisClient) {
      await redisClient.set(cacheKey, JSON.stringify(newsItem), 'EX', 7200);
    }

    console.log('📰 Serving single news from database');
    res.status(200).json(newsItem);
  } catch (err) {
    console.error('❌ Error fetching news item:', err);
    
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid news ID format' });
    }

    res.status(500).json({ 
      message: 'Failed to fetch news item',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Update News Post
export const updateNewsPost = async (req, res) => {
  const uploadedFiles = [];

  try {
    const { id } = req.params;
    const { mainTitle, excerpt } = req.body;

    // Find existing post
    const existingPost = await NewsModel.findById(id);
    if (!existingPost) {
      return res.status(404).json({ message: 'News post not found' });
    }

    // Track old files for deletion
    const oldFiles = [];
    if (existingPost.mainImage) oldFiles.push(existingPost.mainImage);
    existingPost.sections.forEach(section => {
      if (section.image) oldFiles.push(section.image);
    });

    // Handle new uploads
    const mainImage = req.files?.['mainImage']?.[0]?.path || existingPost.mainImage;
    const sectionImages = req.files?.['sectionImages'] || [];

    if (req.files?.['mainImage']) uploadedFiles.push(mainImage);
    uploadedFiles.push(...sectionImages.map(img => img.path));

    // Parse sections
    let sections = existingPost.sections;
    let rawSections = req.body.sections;

    if (rawSections) {
      if (typeof rawSections === 'string') {
        try {
          rawSections = JSON.parse(rawSections);
        } catch (parseErr) {
          await deleteFiles(uploadedFiles);
          return res.status(400).json({ 
            message: 'Invalid sections format',
            error: 'Sections must be valid JSON'
          });
        }
      }

      if (Array.isArray(rawSections)) {
        sections = rawSections.map((section, index) => ({
          title: section.title?.trim() || '',
          content: section.content?.trim() || '',
          image: sectionImages[index]?.path || section.image || '',
        }));
      }
    }

    // Validate data
    const validationErrors = validateNewsData(
      mainTitle || existingPost.title, 
      excerpt || existingPost.excerpt, 
      sections
    );
    
    if (validationErrors.length > 0) {
      await deleteFiles(uploadedFiles);
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Update post
    existingPost.title = mainTitle?.trim() || existingPost.title;
    existingPost.excerpt = excerpt?.trim() || existingPost.excerpt;
    existingPost.mainImage = mainImage;
    existingPost.sections = sections;
    existingPost.updatedAt = new Date();

    await existingPost.save();
    console.log('✅ News post updated:', existingPost._id);

    // Delete old files if new ones were uploaded
    if (uploadedFiles.length > 0) {
      await deleteFiles(oldFiles);
    }

    // Invalidate cache
    await invalidateCache(['news:all', `news:${id}`]);

    res.status(200).json({ 
      message: 'News post updated successfully',
      post: existingPost
    });
  } catch (err) {
    console.error('❌ Update news post error:', err);
    await deleteFiles(uploadedFiles);

    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid news ID format' });
    }

    res.status(500).json({ 
      message: 'Failed to update news post',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Delete News Post
export const deleteNewsPost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await NewsModel.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return res.status(404).json({ message: 'News post not found' });
    }

    // Collect files to delete
    const filesToDelete = [];
    if (deletedPost.mainImage) filesToDelete.push(deletedPost.mainImage);
    deletedPost.sections.forEach(section => {
      if (section.image) filesToDelete.push(section.image);
    });

    // Delete associated files
    await deleteFiles(filesToDelete);

    // Invalidate cache
    await invalidateCache(['news:all', `news:${id}`]);

    console.log('🗑️ News post deleted:', id);
    res.status(200).json({ 
      message: 'News post deleted successfully',
      deletedId: id
    });
  } catch (err) {
    console.error('❌ Delete news post error:', err);

    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid news ID format' });
    }

    res.status(500).json({ 
      message: 'Failed to delete news post',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

// Get News Statistics
export const getNewsStats = async (req, res) => {
  try {
    const redisClient = await getRedisClient();
    const cacheKey = 'news:stats';

    // Try cache
    if (redisClient) {
      const cached = await redisClient.get(cacheKey);
      if (cached) {
        return res.status(200).json(JSON.parse(cached));
      }
    }

    // Calculate stats
    const [total, recentCount, oldestPost, newestPost] = await Promise.all([
      NewsModel.countDocuments(),
      NewsModel.countDocuments({ 
        createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      }),
      NewsModel.findOne().sort({ createdAt: 1 }).select('createdAt').lean(),
      NewsModel.findOne().sort({ createdAt: -1 }).select('createdAt').lean()
    ]);

    const stats = {
      totalPosts: total,
      postsLast30Days: recentCount,
      oldestPost: oldestPost?.createdAt,
      newestPost: newestPost?.createdAt
    };

    // Cache stats
    if (redisClient) {
      await redisClient.set(cacheKey, JSON.stringify(stats), 'EX', 1800);
    }

    res.status(200).json(stats);
  } catch (err) {
    console.error('❌ Error fetching news stats:', err);
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
};