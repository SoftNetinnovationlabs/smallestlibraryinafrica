import NewsModel from '../models/news.model.js';

export const createNewsPost = async (req, res) => {
  try {
    const { mainTitle, excerpt } = req.body;

    // Log for debugging
    console.log('Incoming body keys:', Object.keys(req.body));
    console.log('Incoming full body:', req.body);

    const mainImage = req.files['mainImage']?.[0]?.path || null;
    const sectionImages = req.files['sectionImages'] || [];

    const sections = [];

    // Count number of section titles submitted (to determine section count)
    const sectionCount = Object.keys(req.body).filter((key) =>
      key.includes('sections[') && key.includes('][title]')
    ).length;

    for (let i = 0; i < sectionCount; i++) {
      const title = req.body[`sections[${i}][title]`] || '';
      const content = req.body[`sections[${i}][content]`] || '';
      const image = sectionImages[i]?.path || '';

      sections.push({ title, content, image });
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