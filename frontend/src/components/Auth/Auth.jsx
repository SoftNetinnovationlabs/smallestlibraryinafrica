import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'
const Auth = () => {
  const [currState, setCurrState] = useState('signup');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="Auth">
      <Link to="/" className='back'><FaArrowLeft /></Link>
      <h2>Volunteer Process</h2>
      <h4>{currState === 'signup' ? 'Sign Up Details' : 'Login'}</h4>

      <form className="auth__body" onSubmit={handleSubmit}>
        {currState === 'signup' && (
          <input
            type="text"
            required
            placeholder="Full Name"
            name="fullName"
          />

        )}
        {currState === 'signup' && (
                    <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    name="phone"
                  />
        )}
      
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          required
          placeholder="Password"
          name="password"
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
