import React, { useState } from 'react';
import axios from 'axios';
import './Donate.css';
import baseURL from '../../../config'; // Ensure this points to your backend base URL

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
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Donate Now'}
        </button>
      </form>

      {message && <p className="donation-message success">{message}</p>}
      {error && <p className="donation-message error">{error}</p>}
    </div>
  );
};

export default Donate;
