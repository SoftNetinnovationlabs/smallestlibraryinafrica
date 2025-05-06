import NewsModel from '../models/news.model.js';

export const createNewsPost = async (req, res) => {
  try {
    const { mainTitle, excerpt } = req.body;

    // Log for debugging
    console.log('Incoming body keys:', Object.keys(req.body));
    console.log('Incoming full body:', req.body);

    const mainImage = req.files?.['mainImage']?.[0]?.path || null;
    const sectionImages = req.files?.['sectionImages'] || [];

    let sections = [];

    // Parse sections based on actual format
    let rawSections = req.body.sections;

    // If sections is JSON string (common if sent via FormData), parse it
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
    res.status(201).json({ message: 'News post created', post });
  } catch (err) {
    console.error('Create news post error:', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get All News
export const getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (err) {
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
    res.status(500).json({ message: 'Error fetching news item' });
  }
};

//delete news 
export const deleteNewsPost = async (req, res) => {
  try {
    const deletedPost = await NewsModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'News post not found' });
    }
    res.status(200).json({ message: 'News post deleted successfully' });
  } catch (err) {
    console.error('Delete news post error:', err);
    res.status(500).json({ message: 'Failed to delete news post' });
  }
};
