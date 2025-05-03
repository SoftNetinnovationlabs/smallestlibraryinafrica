import React, { useState } from 'react';
import NewsletterEditor from './NewsletterEditor';
import './NewsLetterSender.css';
import axios from 'axios';

const NewsletterSender = () => {
  const baseUrl =  'http://localhost:5000';
  const [htmlContent, setHtmlContent] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post(`${baseUrl}/api/newsletter/send`, {
        subject,
        htmlContent,
      });

      const data = res.data;
      setStatus(data.message || 'Newsletter sent!');
    } catch (err) {
      console.error(err);
      setStatus('Error sending newsletter');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Newsletter Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <NewsletterEditor content="" onUpdate={setHtmlContent} />
      <button type="submit">Send Newsletter</button>
      <p>{status}</p>
    </form>
  );
};

export default NewsletterSender;
