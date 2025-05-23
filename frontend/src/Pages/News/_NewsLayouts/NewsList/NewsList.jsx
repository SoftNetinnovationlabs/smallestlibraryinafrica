import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';
import './newslist.css';
import baseURL from '../../../../../config.js'; // Update as needed

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
      <h2>Latest News</h2>
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
