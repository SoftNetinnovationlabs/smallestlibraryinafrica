import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import baseURL from '../../config';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast'; // Toast import
import './auth.css';

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Logging in...');

    try {
      const res = await axios.post(`${baseURL}/api/auth/admin-login`, formData);
      login(formData);
      toast.success(res.data.message || 'Login successful', { id: toastId });
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <div className="auth-body">
        <img src={assets.loginImage} alt="Login visual" />
      </div>
      <form className="auth-body form" id="form" onSubmit={handleSubmit}>
        <div className="auth-header">
          <h2>Hello</h2>
          <h1>Welcome Back!</h1>
          <p>Login to your account</p>
        </div>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p>
          Don't have an account? <Link to="/register-admin">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Auth;
