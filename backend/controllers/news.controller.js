import NewsModel from '../models/news.model.js';
import redisClient from '../utils/redisClient.js';

// Create News Post
export const createNewsPost = async (req, res) => {
  try {
    const { mainTitle, excerpt } = req.body;

    console.log('Incoming body keys:', Object.keys(req.body));
    console.log('Incoming full body:', req.body);

    const mainImage = req.files?.['mainImage']?.[0]?.path || null;
    const sectionImages = req.files?.['sectionImages'] || [];

    let sections = [];
    let rawSections = req.body.sections;

    // Parse sections (likely stringified JSON from FormData)
    if (typeof rawSections === 'string') {
      try {
        rawSections = JSON.parse(rawSections);
      } catch (parseErr) {
        console.error('Failed to parse sections JSON:', parseErr);
        rawSections = [];
      }
    }

    if (Array.isArray(rawSections)) {
      sections = rawSections.map((section, index) => ({
        title: section.title || '',
        content: section.content || '',
        image: sectionImages[index]?.path || '',
      }));
    }

    const post = new NewsModel({
      title: mainTitle,
      excerpt,
      mainImage,
      sections,
    });

    await post.save();

    // Invalidate Redis cache
    await redisClient.del('news:all');

    res.status(201).json({ message: 'News post created', post });
  } catch (err) {
    console.error('Create news post error:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get All News with Redis Caching
export const getAllNews = async (req, res) => {
  const cacheKey = 'news:all';

  try {
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        console.log('Serving /news from Redis cache');
        return res.status(200).json(parsed);
      } catch (jsonErr) {
        console.warn('Corrupted cache found. Deleting it...');
        await redisClient.del(cacheKey);
      }
    }

    // Fetch from DB
    const news = await NewsModel.find().sort({ createdAt: -1 });

    // ✅ Correct for ioredis
    await redisClient.set(cacheKey, JSON.stringify(news), 'EX', 3600);

    console.log('Serving /news from DB and cached');
    res.status(200).json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
};

// Get Single News by ID
export const getSingleNews = async (req, res) => {
  try {
    const newsItem = await NewsModel.findById(req.params.id);
    if (!newsItem) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(newsItem);
  } catch (err) {
    console.error('Error fetching news item:', err);
    res.status(500).json({ message: 'Error fetching news item' });
  }
};

// Delete News Post
export const deleteNewsPost = async (req, res) => {
  try {
    const deletedPost = await NewsModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'News post not found' });
    }

    // Invalidate Redis cache
    await redisClient.del('news:all');

    res.status(200).json({ message: 'News post deleted successfully' });
  } catch (err) {
    console.error('Delete news post error:', err);
    res.status(500).json({ message: 'Failed to delete news post' });
  }
};
