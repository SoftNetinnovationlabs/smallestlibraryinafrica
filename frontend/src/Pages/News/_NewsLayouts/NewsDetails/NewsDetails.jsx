import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, Clock, Share2, ChevronLeft, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import './newsdetails.css';
import baseURL from '../../../../../config.js';
import Loader from '../NewsList/Loader';
import { Helmet } from 'react-helmet';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false); // For copy feedback

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${baseURL}/news/${id}`);
        setNewsItem(res.data);
      } catch (err) {
        console.error('Error fetching news details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateReadingTime = (text) => {
    if (!text) return 0;
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  // Native share if available
  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem?.title || 'Smallest Library in Africa',
        text: newsItem?.excerpt || 'Check out this story from the Smallest Library in Africa Initiative.',
        url: metaUrl,
      }).catch((err) => console.error('Share failed:', err));
    } else {
      // Fallback to opening share menu
      setShareOpen(true);
    }
  };

  // Social sharing functions
  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(metaUrl)}`,
      '_blank',
      'width=600,height=400'
    );
    setShareOpen(false);
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(metaUrl)}&text=${encodeURIComponent(newsItem?.title || '')}`,
      '_blank',
      'width=600,height=400'
    );
    setShareOpen(false);
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(metaUrl)}`,
      '_blank',
      'width=600,height=500'
    );
    setShareOpen(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(metaUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error('Copy failed:', err);
      // Fallback: Select and copy manually
      const textArea = document.createElement('textarea');
      textArea.value = metaUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    setShareOpen(false);
  };

  if (loading) return <Loader />;

  if (!newsItem) return (
    <div className="error-container">
      <Calendar size={64} />
      <h2>Oops! News Not Found</h2>
      <p>This article may have been moved or deleted. Head back to the news list.</p>
      <Link to="/news" className="footer-back-button">
        <ChevronLeft size={20} />
        Back to News
      </Link>
    </div>
  );

  const metaTitle = newsItem.title || "News | Smallest Library in Africa";
  const metaDescription = newsItem.excerpt || "Read the latest news from the Smallest Library in Africa Initiative.";
  const metaUrl = `https://smallestlibraryinafrica.org/news/${id}`;
  const metaImage = newsItem.mainImage || "https://smallestlibraryinafrica.org/default-news-image.jpg";
  const readingTime = calculateReadingTime(newsItem.excerpt + (newsItem.sections?.map(s => s.content).join(' ') || ''));

  return (
    <div className="news-details-container">
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

      <header className="news-details-header">
        <Link to="/news" className="back-button">
          <ChevronLeft size={20} />
          <span>Back to News</span>
        </Link>
        <div className="share-container">
          <button className="share-button" onClick={handleNativeShare}>
            <Share2 size={20} />
            <span>Share</span>
          </button>
          {shareOpen && (
            <>
              <div className="share-overlay" onClick={() => setShareOpen(false)} />
              <div className="share-menu">
                <button className="share-item" onClick={shareToFacebook}>
                  <Facebook size={18} />
                  Facebook
                </button>
                <button className="share-item" onClick={shareToTwitter}>
                  <Twitter size={18} />
                  Twitter
                </button>
                <button className="share-item" onClick={shareToLinkedIn}>
                  <Linkedin size={18} />
                  LinkedIn
                </button>
                <button className="share-item" onClick={copyLink}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <article className="news-details-article">
        <header className="article-header">
          <h1 className="article-title">{newsItem.title}</h1>
          <div className="article-meta">
            <span className="meta-item">
              <Calendar size={16} />
              {formatDate(newsItem.createdAt)}
            </span>
            <span className="meta-item">
              <Clock size={16} />
              {readingTime} min read
            </span>
          </div>
        </header>

        {newsItem.mainImage && (
          <div className="main-image-container">
            <img 
              src={newsItem.mainImage} 
              alt={newsItem.title} 
              className="main-image"
              style={{
                aspectRatio: '16/9', // Enforces consistent aspect ratio to prevent distortion
                objectPosition: 'center' // Centers crop to avoid misinterpreting key subjects
              }}
            />
          </div>
        )}

        {newsItem.excerpt && (
          <div className="article-excerpt">
            <p>{newsItem.excerpt}</p>
          </div>
        )}

        <div className="article-content">
          {newsItem.sections?.map((sec, idx) => (
            <section key={idx} className="content-section">
              <h2 className="section-title">{sec.title}</h2>
              {sec.image && (
                <div className="section-image-container">
                  <img 
                    src={sec.image} 
                    alt={sec.title} 
                    className="section-image"
                    style={{
                      aspectRatio: '4/3', // Flexible aspect for sections; adjust based on content type
                      objectPosition: 'center top' // Positions to prioritize top (e.g., faces/text)
                    }}
                  />
                </div>
              )}
              <div className="section-content">
                <p>{sec.content}</p>
              </div>
            </section>
          ))}
        </div>

        <footer className="article-footer">
          <div className="footer-divider" />
          <p className="footer-text">
            Published on {formatDate(newsItem.createdAt)} | Smallest Library in Africa Initiative
          </p>
          <div className="footer-actions">
            <Link to="/news" className="footer-back-button">
              <ChevronLeft size={16} />
              Back to News
            </Link>
            <button className="footer-share-button" onClick={handleNativeShare}>
              <Share2 size={16} />
              Share Story
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default NewsDetails;