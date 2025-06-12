import React, { useState } from 'react';
import axios from 'axios';
import './Donate.css';
import baseURL from '../../../config'; // Ensure this points to your backend base URL
import { Helmet } from "react-helmet";

const metaTitle = "Donate | Smallest Library in Africa";
const metaDescription = "Support the Smallest Library in Africa Initiative. Donate securely via M-Pesa and help empower communities through education, literacy, and sustainable development.";
const metaUrl = "https://smallestlibraryinafrica.org/donate";
const metaImage = "https://smallestlibraryinafrica.org/images/donate-cover.jpg"; // Replace with your actual image

const Donate = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePhone = (number) => /^\d{12}$/.test(number);

  const handleDonation = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!validatePhone(phone)) {
      setError('Phone number must be 12 digits (e.g., 2547XXXXXXXX)');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${baseURL}/donation/payment`, {
        phone,
        amount,
      });

      setMessage(res.data.message || 'STK Push initiated successfully.');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donate-container">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
      <h2>Donate via M-Pesa</h2>
      <form onSubmit={handleDonation}>
        <input
          type="tel"
          placeholder="Enter Phone (e.g. 2547XXXXXXXX)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className='btn' disabled={loading}>
          {loading ? 'Processing...' : 'Donate Now'}
        </button>
      </form>

      {message && <p className="donation-message success">{message}</p>}
      {error && <p className="donation-message error">{error}</p>}
    </div>
  );
};

export default Donate;
