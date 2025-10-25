import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Image as ImageIcon, X, Eye, EyeOff, Save, AlertCircle, FileText } from 'lucide-react';
import './news.css';
import baseURL from '../../../config.js';

const News = () => {
  const [sections, setSections] = useState([{ title: '', content: '', image: null, preview: null }]);
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [mainTitle, setMainTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  const [errors, setErrors] = useState({});
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/news`);
      setNewsList(res.data);
    } catch (err) {
      console.error('Failed to load news:', err);
    }
  };

  const addSection = () => {
    setSections([...sections, { title: '', content: '', image: null, preview: null }]);
  };

  const removeSection = (index) => {
    if (sections.length === 1) return;
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
  };

  const handleSectionChange = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  const handleSectionImageChange = (index, file) => {
    if (!file) return;
    
    const updated = [...sections];
    updated[index].image = file;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      updated[index].preview = reader.result;
      setSections([...updated]);
    };
    reader.readAsDataURL(file);
  };

  const removeSectionImage = (index) => {
    const updated = [...sections];
    updated[index].image = null;
    updated[index].preview = null;
    setSections(updated);
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setMainImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setMainImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeMainImage = () => {
    setMainImage(null);
    setMainImagePreview(null);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!mainTitle.trim()) newErrors.mainTitle = 'Title is required';
    if (!excerpt.trim()) newErrors.excerpt = 'Excerpt is required';
    
    sections.forEach((sec, i) => {
      if (!sec.title.trim()) newErrors[`section_${i}_title`] = 'Section title required';
      if (!sec.content.trim()) newErrors[`section_${i}_content`] = 'Content required';
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('mainTitle', mainTitle);
    formData.append('excerpt', excerpt);
    if (mainImage) formData.append('mainImage', mainImage);

    sections.forEach((sec, i) => {
      formData.append(`sections[${i}][title]`, sec.title);
      formData.append(`sections[${i}][content]`, sec.content);
      if (sec.image) formData.append('sectionImages', sec.image);
    });

    try {
      await axios.post(`${baseURL}/api/news`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Reset form
      setMainTitle('');
      setExcerpt('');
      setSections([{ title: '', content: '', image: null, preview: null }]);
      setMainImage(null);
      setMainImagePreview(null);
      setErrors({});
      
      // Refresh list and switch to manage tab
      await fetchNews();
      setActiveTab('manage');
      
      alert('News posted successfully! 🎉');
    } catch (err) {
      console.error('Error submitting:', err);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await axios.delete(`${baseURL}/api/news/${id}`);
      setNewsList(newsList.filter((item) => item._id !== id));
      alert('Post deleted successfully');
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Could not delete the post.');
    }
  };

  const toggleExpandPost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>News Manager</h1>
        <p>Create and manage your news posts</p>
      </div>

      <div className="news-tabs">
        <button 
          className={`tab-btn ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          <FileText size={18} />
          Create Post
        </button>
        <button 
          className={`tab-btn ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => setActiveTab('manage')}
        >
          <Eye size={18} />
          Manage Posts ({newsList.length})
        </button>
      </div>

      {activeTab === 'create' && (
        <form onSubmit={handleSubmit} className="news-form">
          <div className="form-section">
            <h2>Main Information</h2>
            
            <div className="form-group">
              <label>Post Title *</label>
              <input
                type="text"
                value={mainTitle}
                onChange={(e) => setMainTitle(e.target.value)}
                placeholder="Enter the main title"
                className={errors.mainTitle ? 'error' : ''}
              />
              {errors.mainTitle && (
                <span className="error-message">
                  <AlertCircle size={14} /> {errors.mainTitle}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Main Image</label>
              <div className="image-upload-area">
                {mainImagePreview ? (
                  <div className="image-preview">
                    <img src={mainImagePreview} alt="Preview" />
                    <button type="button" onClick={removeMainImage} className="remove-image-btn">
                      <X size={16} /> Remove
                    </button>
                  </div>
                ) : (
                  <label className="upload-label">
                    <ImageIcon size={32} />
                    <span>Click to upload main image</span>
                    <input
                      type="file"
                      onChange={handleMainImageChange}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Excerpt *</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief description of the news post"
                rows="3"
                className={errors.excerpt ? 'error' : ''}
              />
              {errors.excerpt && (
                <span className="error-message">
                  <AlertCircle size={14} /> {errors.excerpt}
                </span>
              )}
            </div>
          </div>

          <div className="form-section">
            <div className="section-header">
              <h2>Content Sections</h2>
              <button type="button" onClick={addSection} className="add-section-btn">
                <Plus size={18} /> Add Section
              </button>
            </div>

            {sections.map((sec, index) => (
              <div key={index} className="news-section-card">
                <div className="section-card-header">
                  <h3>Section {index + 1}</h3>
                  {sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="remove-section-btn"
                    >
                      <Trash2 size={16} /> Remove
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Section title"
                    value={sec.title}
                    onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                    className={errors[`section_${index}_title`] ? 'error' : ''}
                  />
                  {errors[`section_${index}_title`] && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors[`section_${index}_title`]}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  {sec.preview ? (
                    <div className="image-preview small">
                      <img src={sec.preview} alt="Section preview" />
                      <button
                        type="button"
                        onClick={() => removeSectionImage(index)}
                        className="remove-image-btn"
                      >
                        <X size={14} /> Remove
                      </button>
                    </div>
                  ) : (
                    <label className="upload-label small">
                      <ImageIcon size={24} />
                      <span>Add section image (optional)</span>
                      <input
                        type="file"
                        onChange={(e) => handleSectionImageChange(index, e.target.files[0])}
                        accept="image/*"
                        style={{ display: 'none' }}
                      />
                    </label>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Section content"
                    value={sec.content}
                    onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                    rows="4"
                    className={errors[`section_${index}_content`] ? 'error' : ''}
                  />
                  {errors[`section_${index}_content`] && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors[`section_${index}_content`]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="spinner"></div> Publishing...
              </>
            ) : (
              <>
                <Save size={18} /> Publish Post
              </>
            )}
          </button>
        </form>
      )}

      {activeTab === 'manage' && (
        <div className="news-list">
          {newsList.length === 0 ? (
            <div className="empty-state">
              <FileText size={48} />
              <h3>No posts yet</h3>
              <p>Create your first news post to get started</p>
            </div>
          ) : (
            <div className="posts-grid">
              {newsList.map((post) => (
                <div key={post._id} className="post-card">
                  <div className="post-card-header">
                    <h3>{post.title}</h3>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="delete-btn"
                      title="Delete post"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  {post.createdAt && (
                    <p className="post-date">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}

                  <button
                    onClick={() => toggleExpandPost(post._id)}
                    className="expand-btn"
                  >
                    {expandedPost === post._id ? (
                      <>
                        <EyeOff size={16} /> Hide Details
                      </>
                    ) : (
                      <>
                        <Eye size={16} /> View Details
                      </>
                    )}
                  </button>

                  {expandedPost === post._id && (
                    <div className="post-details">
                      {post.sections && post.sections.length > 0 && (
                        <div className="sections-info">
                          <strong>Sections: {post.sections.length}</strong>
                          {post.sections.map((sec, idx) => (
                            <div key={idx} className="section-preview">
                              <span>• {sec.title}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default News;