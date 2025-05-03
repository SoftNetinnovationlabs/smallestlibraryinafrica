import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../Auth/Context/Auth.context'; 
import BASE_URL from '../../../config.js'
import {assets} from '../../assets/assets'
const Auth = () => {
  const [currState, setCurrState] = useState('signup');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [loading, setIsLoading] = useState(false)
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const endpoint = currState === 'signup' ? '/auth/register' : '/auth/login';
    const isSignup = currState === 'signup';
    const dataToSend = isSignup
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      login({ user: data.user, token: data.token });
      navigate(isSignup ? '/volunteer-details' : '/dashboard'); // or wherever you want after login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="Auth">
      <Link to="/" className="back"><FaArrowLeft /></Link>
      <h2>Volunteer Process</h2>
      <h1>{currState === 'signup' ? 'Sign Up Details' : 'Welcome Back!'}</h1>

<div className="auth__content">
  <div className="auth__body">
    <div className="auth__image">
      <img src={assets.Selection} />
    </div>
  </div>
  <form className="auth__body" onSubmit={handleSubmit}>
        {currState === 'signup' && (
          <>
            <input
              type="text"
              required
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
            />
          </>
        )}

        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          required
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <button className="btn__primary" type="submit">
          {loading ? 'please wait...' :( currState === 'signup' ? 'Register' : 'Login')}
        </button>

        <p>
          {currState === 'signup'
            ? 'Already have an account? '
            : "Don't have an account? "}
          <span
            onClick={() => setCurrState(currState === 'signup' ? 'login' : 'signup')}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            {currState === 'signup' ? 'Login here' : 'Register here'}
          </span>
        </p>
      </form>
</div>
    </div>
  );
};

export default Auth;
