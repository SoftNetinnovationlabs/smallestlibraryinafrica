import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../Auth/Context/Auth.context'; 
import BASE_URL from '../../../config.js'

const Auth = () => {
  const [currState, setCurrState] = useState('signup');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = currState === 'signup' ? '/auth/register' : '/auth/login';
    const dataToSend = currState === 'signup'
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
      navigate('/dashboard'); // or wherever you want after login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="Auth">
      <Link to="/" className="back"><FaArrowLeft /></Link>
      <h2>Volunteer Process</h2>
      <h4>{currState === 'signup' ? 'Sign Up Details' : 'Login'}</h4>

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

        <button className="btn" type="submit">
          {currState === 'signup' ? 'Register' : 'Login'}
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
  );
};

export default Auth;
