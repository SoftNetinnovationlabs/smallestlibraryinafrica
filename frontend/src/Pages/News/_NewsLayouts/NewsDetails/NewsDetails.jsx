import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './newsdetails.css';

import baseURL from '../../../../../config.js';
import Loader from '../NewsList/Loader'; // Import your custom loader
import { Helmet } from 'react-helmet';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true); // Local loading state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${baseURL}/news/${id}`);
        setNewsItem(res.data);
      } catch (err) {
        console.error('Error fetching news details:', err);
      } finally {
        setLoading(false); // Stop loading once done
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return <Loader />;

  if (!newsItem) return <div className="error">No news found.</div>;

  // Build meta tags dynamically
  const metaTitle = newsItem.title || "News | Smallest Library in Africa";
  const metaDescription = newsItem.excerpt || "Read the latest news from the Smallest Library in Africa Initiative.";
  const metaUrl = `https://smallestlibraryinafrica.org/news/${id}`;
  const metaImage = newsItem.mainImage || "https://smallestlibraryinafrica.org/default-news-image.jpg";

  return (
    <div className="news-details">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
      <h1>{newsItem.title}</h1>

      {newsItem.mainImage && (
        <img src={newsItem.mainImage} alt="Main" className="main-image" />
      )}

      <p className="excerpt">{newsItem.excerpt}</p>

      {newsItem.sections?.map((sec, idx) => (
        <div key={idx} className="section">
          <h2>{sec.title}</h2>
         <div className='news-img-tag'> {sec.image && (
            <img src={sec.image} alt={sec.title} className="section-image" />
          )}</div>
          <p>{sec.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsDetails;
