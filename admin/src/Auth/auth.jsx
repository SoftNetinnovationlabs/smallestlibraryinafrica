import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../../../../config';

const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/api/auth/admin-login`, formData);
      console.log('Login successful:', response.data);
      // Optionally save token or redirect user
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <input 
          type='email' 
          name='email' 
          placeholder='Email' 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
