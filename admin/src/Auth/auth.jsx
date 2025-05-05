import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import baseURL from '../../config';
import { useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets'
import './auth.css'
const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // ✅ move to top-level
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}/api/auth/admin-login`, formData);
      login(formData); // optionally use res.data if you return admin data
      alert(res.data.message);
      navigate('/'); // ✅ correctly used now
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
<div className='auth'>
    <div className='auth-body'>
        <img src={assets.loginImage} />
        </div>
<form className='auth-body form' onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
</div>
  );
};

export default Auth;
