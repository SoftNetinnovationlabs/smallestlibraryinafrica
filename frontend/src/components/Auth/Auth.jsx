import React,{useState, useEffect} from 'react';
import './Auth.css';
import {Link} from 'react-router-dom'
const Auth = () => {
  const [currState, setCurrState] = useState('signup')
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form data here
    console.log("Form submitted");
  };

  return (
    <div className="Auth">
      <Link to="/"> back </Link>
      <h2>Volunteer Process</h2>
      <h4>Personal Details</h4>

      <form className="auth__body" onSubmit={handleSubmit}>
        <input type="text" required placeholder="Full Name" name="fullName" />
        <input type="tel" required placeholder="Phone Number" name="phone" />
        <input type="email" required placeholder="Email" name="email" />
        <input type='password' required placeholder='password' name='password' />
        <button className='btn' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Auth;
