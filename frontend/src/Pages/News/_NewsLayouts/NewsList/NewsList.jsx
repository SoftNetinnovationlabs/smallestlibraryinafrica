import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';
import './newslist.css';
import baseURL from '../../../../../config.js'; // Update as needed
import NewsHero from '../../NewsHero/NewsHero.jsx'; // Adjust the import path as necessary
import { Helmet } from 'react-helmet';
import { assets } from '../../../../assets/assets.js'; // Adjust the import path as necessary
const fetchNews = async () => {
  const res = await axios.get(`${baseURL}/news`);
  return res.data;
};

const NewsList = () => {
  const { data: news = [], isLoading, isError, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  const [loadedCards, setLoadedCards] = useState([]);

  useEffect(() => {
    if (news.length > 0) {
      const timeouts = news.map((item, index) =>
        setTimeout(() => {
          setLoadedCards((prev) => [...prev, item._id]);
        }, 200 * index) // staggered loader
      );
      return () => timeouts.forEach(clearTimeout);
    }
  }, [news]);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading news: {error.message}</div>;

  return (
    <div className="news-list">
      <Helmet>
        <title>Latest News & Updates | Smallest Library in Africa</title>
        <meta
          name="description"
          content="Stay informed with the latest stories, events, and milestones from the Smallest Library in Africa Initiative."
        />
        <meta property="og:title" content="Latest News & Updates | Smallest Library in Africa" />
        <meta
          property="og:description"
          content="Stay informed with the latest stories, events, and milestones from the Smallest Library in Africa Initiative."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smallestlibraryinafrica.org/news" />
        <meta
          property="og:image"
          content={
            news.length > 0 && news[0].mainImage
              ? news[0].mainImage
              : `https://smallestlibraryinafrica.org/${assets.Nutrition}`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest News & Updates | Smallest Library in Africa" />
        <meta
          name="twitter:description"
          content="Stay informed with the latest stories, events, and milestones from the Smallest Library in Africa Initiative."
        />
        <meta
          name="twitter:image"
          content={
            news.length > 0 && news[0].mainImage
              ? news[0].mainImage
              : "https://smallestlibraryinafrica.org/"
          }
        />
        <link rel="canonical" href="https://smallestlibraryinafrica.org/news" />
      </Helmet>
      <NewsHero />
      <div className="news-cards">
        {news.map((item) => (
          <Link
            to={`/news/${item._id}`}
            key={item._id}
            className={`news-card ${loadedCards.includes(item._id) ? 'loaded' : ''}`}
          >
            {!loadedCards.includes(item._id) ? (
              <Loader />
            ) : (
              <>
                {item.mainImage && (
                  <img
                    src={item.mainImage}
                    alt={item.mainTitle}
                    className="news-card-image"
                  />
                )}
                <h3>{item.mainTitle}</h3>
                <p>{item.excerpt}</p>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
