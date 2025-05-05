import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../../config';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [secretKey, setSecretKey] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURL}/api/auth/register-admin`,
        formData,
        {
          headers: {
            'x-admin-secret': secretKey,
          },
        }
      );
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
        placeholder="Admin Secret Key"
        required
      />
      <button type="submit">Register Admin</button>
    </form>
  );
};

export default RegisterAdmin;
