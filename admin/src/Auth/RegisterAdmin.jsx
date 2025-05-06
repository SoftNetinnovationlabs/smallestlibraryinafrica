import React, { useState } from 'react';
import axios from 'axios';
import baseURL from '../../config';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './auth.css';
import toast, { Toaster } from 'react-hot-toast';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [secretKey, setSecretKey] = useState('');
  const navigate = useNavigate(); // ✅ Moved to top-level

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
      toast.success(res.data.message);
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <div className="auth">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="auth-body">
        <img src={assets.loginImage} alt="Login Visual" />
      </div>
      <form className="auth-body" id="form" onSubmit={handleSubmit}>
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
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterAdmin;
