import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';

import baseURL from '../../../config.js';

const News = () => {
  const [sections, setSections] = useState([{ title: '', content: '', image: null }]);
  const [mainImage, setMainImage] = useState(null);
  const [newsList, setNewsList] = useState([]); // For showing and deleting news

  // Fetch existing news posts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/news`);
        setNewsList(res.data);
      } catch (err) {
        console.error('Failed to load news:', err);
      }
    };

    fetchNews();
  }, []);

  const addNew = () => {
    setSections([...sections, { title: '', content: '', image: null }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  const handleSectionImageChange = (index, file) => {
    const updated = [...sections];
    updated[index].image = file;
    setSections(updated);
  };

  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const mainTitle = document.querySelector("input[name='mainTitle']").value;
    const excerpt = document.querySelector("textarea[name='excerpt']").value;

    formData.append('mainTitle', mainTitle);
    formData.append('excerpt', excerpt);
    if (mainImage) formData.append('mainImage', mainImage);

    sections.forEach((sec, i) => {
      formData.append(`sections[${i}][title]`, sec.title);
      formData.append(`sections[${i}][content]`, sec.content);
      if (sec.image) formData.append('sectionImages', sec.image);
    });

    try {
      const res = await axios.post(`${baseURL}/api/news`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('News submitted successfully!');
      console.log(res.data);

      // Reset
      setSections([{ title: '', content: '', image: null }]);
      setMainImage(null);
      document.querySelector("input[name='mainTitle']").value = '';
      document.querySelector("textarea[name='excerpt']").value = '';

      // Refresh news list
      const updatedList = await axios.get(`${baseURL}/api/news`);
      setNewsList(updatedList.data);
    } catch (err) {
      console.error('Error submitting:', err);
      alert('Submission failed.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await axios.delete(`${baseURL}/api/news/${id}`);
      setNewsList(newsList.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Could not delete the post.');
    }
  };

  return (
    <div className='news'>
      <form onSubmit={handleSubmit}>
        <h2>Create News Post</h2>
        <input name='mainTitle' placeholder='Main Title' required />
        <input type='file' onChange={handleMainImageChange} accept='image/*' />
        <textarea name='excerpt' placeholder='Excerpt' required />

        {sections.map((sec, index) => (
          <div key={index} className='news-section'>
            <input
              placeholder={`Section ${index + 1} Title`}
              value={sec.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              required
            />
            <input
              type='file'
              onChange={(e) => handleSectionImageChange(index, e.target.files[0])}
              accept='image/*'
            />
            <textarea
              placeholder='Content'
              value={sec.content}
              onChange={(e) => handleChange(index, 'content', e.target.value)}
              required
            />
          </div>
        ))}

        <button type='button' onClick={addNew}>Add Section</button>
        <button type='submit'>Submit</button>
      </form>

      <hr />
      <h2>Existing News Posts</h2>
      <ul>
        {newsList.map((post) => (
          <li key={post._id}>
            <strong>{post.title}</strong> — {post.excerpt}
            <button onClick={() => handleDelete(post._id)} style={{ marginLeft: '10px', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
