import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import baseURL from '../../../../../config'
const Form = ({ label, name = '', email = '', message = '' }) => {
  const [formData, setFormData] = useState({ name, email, message });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseURL}/api/contact`, formData);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="email_name">
          <input
            type='email'
            id='email'
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            id='name'
            placeholder='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='message'>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='btn'>{label || 'Send'}</button>

        {sent && <p className="success">Message sent successfully!</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Form;
