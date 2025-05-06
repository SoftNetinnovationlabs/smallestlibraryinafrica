import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './newsdetails.css';

import baseURL from '../../../../../config.js';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${baseURL}/news/${id}`);
        setNewsItem(res.data);
        console.log("News Item:", res.data); // ✅ See what comes in
      
            } catch (err) {
        console.error('Error fetching news details:', err);
      }
    };

    fetchNews();
  }, [id]);

  if (!newsItem) return <p>Loading...</p>;

  return (
    <div className="news-details">
      <h1>{newsItem.title}</h1>
      {newsItem.mainImage && (
        <img src={newsItem.mainImage} alt="Main" className="main-image" />
      )}
      <p className="excerpt">{newsItem.excerpt}</p>

      {newsItem.sections?.map((sec, idx) => (
        <div key={idx} className="section">
          <h2>{sec.title}</h2>
          {sec.image && <img src={sec.image} alt={sec.title} className="section-image" />}
          <p>{sec.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsDetails;
