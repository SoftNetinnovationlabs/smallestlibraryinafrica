import React, { useState } from 'react';
import NewsletterEditor from './NewsletterEditor';
import './NewsLetterSender.css'; // you can style this yourself or switch to Tailwind
import axios from 'axios';
import baseURL from '../../../config.js';

const NewsletterSender = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post(`${baseURL}/api/newsletter/send`, {
        subject,
        htmlContent,
      });

      const data = res.data;
      setStatus(data.message || '✅ Newsletter sent!');
    } catch (err) {
      console.error(err);
      setStatus('❌ Error sending newsletter');
    }
  };

  return (
    <div className="newsletter-container">
      <header className="newsletter-header">
        <h1>📢 Send Newsletter</h1>
        <p className="subtext">Craft and send a message to all subscribers</p>
        <div className="current-email">
          <strong>Current sender email:</strong> <code>noreply@smallestlibraryinafrica.org</code>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Enter newsletter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="editor">Content</label>
        <NewsletterEditor content="" onUpdate={setHtmlContent} />

        <button type="submit" className="send-button">Send Newsletter</button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default NewsletterSender;
