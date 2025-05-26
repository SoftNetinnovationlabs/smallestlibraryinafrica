import React, { useState } from 'react';
import axios from 'axios';
import './Donate.css';
import baseURL from '../../../config'

const Donate = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDonation = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post(`${baseURL}/donation/payment`, {
        phone,
        amount,
      });

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
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
      {message && <p className="donation-message">{message}</p>}
    </div>
  );
};

export default Donate;
