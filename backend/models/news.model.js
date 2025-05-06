import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
});

const newsSchema = new mongoose.Schema(
  {
    title: String,
    excerpt: String,
    mainImage: String,
    sections: [sectionSchema],
  },
  { timestamps: true }
);

const NewsModel = mongoose.model('News', newsSchema);

export default NewsModel;
