import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { 
  Search, 
  Calendar, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  AlertCircle,
  Filter,
  X
} from 'lucide-react';
import Loader from './Loader';
import NewsHero from '../../NewsHero/NewsHero.jsx';
import { assets } from '../../../../assets/assets.js';
import './newslist.css';
import baseURL from '../../../../../config.js';

const fetchNews = async ({ page = 1, limit = 9, search = '' }) => {
  const res = await axios.get(`${baseURL}/news`, {
    params: { page, limit, search }
  });
  return res.data;
};

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [loadedCards, setLoadedCards] = useState([]);
  const itemsPerPage = 9;

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1); // Reset to first page on search
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['news', currentPage, debouncedSearch],
    queryFn: () => fetchNews({ 
      page: currentPage, 
      limit: itemsPerPage,
      search: debouncedSearch 
    }),
    keepPreviousData: true,
  });

  const news = data?.news || [];
  const pagination = data?.pagination || {};

  // Staggered card loading animation
  useEffect(() => {
    setLoadedCards([]);
    if (news.length > 0) {
      const timeouts = news.map((item, index) =>
        setTimeout(() => {
          setLoadedCards((prev) => [...prev, item._id]);
        }, 100 * index)
      );
      return () => timeouts.forEach(clearTimeout);
    }
  }, [news]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateReadingTime = (text) => {
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return minutes;
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setDebouncedSearch('');
  };

  if (isError) {
    return (
      <div className="news-list-container">
        <Helmet>
          <title>News - Error | Smallest Library in Africa</title>
        </Helmet>
        <NewsHero />
        <div className="error-state">
          <AlertCircle size={64} />
          <h2>Oops! Something went wrong</h2>
          <p>{error?.message || 'Failed to load news. Please try again later.'}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const metaImage = news.length > 0 && news[0].mainImage
    ? news[0].mainImage
    : `https://smallestlibraryinafrica.org/${assets.Nutrition}`;

  return (
    <div className="news-list-container">
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
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest News & Updates | Smallest Library in Africa" />
        <meta
          name="twitter:description"
          content="Stay informed with the latest stories, events, and milestones from the Smallest Library in Africa Initiative."
        />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href="https://smallestlibraryinafrica.org/news" />
      </Helmet>

      <NewsHero />

      <div className="news-list-content">
        {/* Search and Filter Bar */}
        <div className="news-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="clear-search-btn">
                <X size={18} />
              </button>
            )}
          </div>

          <div className="results-info">
            {isLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                Showing {news.length > 0 ? ((currentPage - 1) * itemsPerPage + 1) : 0} - {Math.min(currentPage * itemsPerPage, pagination.totalItems || 0)} of {pagination.totalItems || 0} articles
              </span>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="loading-container">
            <Loader />
          </div>
        )}

        {/* Empty State */}
        {!isLoading && news.length === 0 && (
          <div className="empty-state">
            <AlertCircle size={64} />
            <h2>No news found</h2>
            <p>
              {debouncedSearch 
                ? `No results for "${debouncedSearch}". Try a different search term.`
                : 'There are no news articles available at the moment.'
              }
            </p>
            {debouncedSearch && (
              <button onClick={clearSearch} className="clear-search-button">
                Clear Search
              </button>
            )}
          </div>
        )}

        {/* News Cards Grid */}
        {!isLoading && news.length > 0 && (
          <div className="news-cards-grid">
            {news.map((item) => {
              const isLoaded = loadedCards.includes(item._id);
              const readingTime = calculateReadingTime(item.excerpt || '');

              return (
                <Link
                  to={`/news/${item._id}`}
                  key={item._id}
                  className={`news-card ${isLoaded ? 'loaded' : 'loading'}`}
                >
                  {!isLoaded ? (
                    <div className="card-loader">
                      <Loader />
                    </div>
                  ) : (
                    <>
                      {item.mainImage && (
                        <div className="news-card-image-container">
                          <img
                            src={item.mainImage}
                            alt={item.title}
                            className="news-card-image"
                            loading="lazy"
                          />
                          <div className="image-overlay"></div>
                        </div>
                      )}
                      
                      <div className="news-card-content">
                        <div className="news-card-meta">
                          <span className="meta-item">
                            <Calendar size={14} />
                            {formatDate(item.createdAt)}
                          </span>
                          <span className="meta-item">
                            <Clock size={14} />
                            {readingTime} min read
                          </span>
                        </div>

                        <h3 className="news-card-title">{item.title}</h3>
                        <p className="news-card-excerpt">{item.excerpt}</p>

                        <span className="read-more">
                          Read More
                          <ChevronRight size={16} />
                        </span>
                      </div>
                    </>
                  )}
                </Link>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {!isLoading && news.length > 0 && pagination.totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!pagination.hasPrevPage}
              className="pagination-btn"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
              <span className="btn-text">Previous</span>
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                let pageNum;
                if (pagination.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= pagination.totalPages - 2) {
                  pageNum = pagination.totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!pagination.hasNextPage}
              className="pagination-btn"
              aria-label="Next page"
            >
              <span className="btn-text">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;