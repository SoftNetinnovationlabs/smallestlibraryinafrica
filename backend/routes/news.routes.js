import express from 'express';
import upload from '../middleware/uploads.middleware.js';
import {
  createNewsPost,
  getAllNews,
  getSingleNews,
} from '../controllers/news.controller.js';

const router = express.Router();

// Create a news post
router.post(
  '/',
  upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'sectionImages', maxCount: 10 },
  ]),
  createNewsPost
);

// Get all news posts
router.get('/', getAllNews);
router.get('/:id', getSingleNews);

export default router;
