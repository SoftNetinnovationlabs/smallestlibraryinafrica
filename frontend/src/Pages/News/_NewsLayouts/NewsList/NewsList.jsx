import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './newslist.css';

import baseURL from '../../../../../config.js'; // Adjust to your project

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${baseURL}/news`);
        setNews(res.data);
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-list">
      <h2>Latest News</h2>
      <div className="news-cards">
        {news.map((item) => (
          <Link to={`/news/${item._id}`} key={item._id} className="news-card">
            {/* Main image from Cloudinary */}
            {item.mainImage && (
              <img src={item.mainImage} alt={item.mainTitle} className="news-card-image" />
            )}
            <h3>{item.mainTitle}</h3>
            <p>{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
