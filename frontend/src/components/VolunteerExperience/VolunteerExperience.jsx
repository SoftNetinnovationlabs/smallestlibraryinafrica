import React, { useState } from 'react';
import './VolunteerExperience.css';
import {useNavigate} from 'react-router-dom'
const VolunteerExperience = () => {
  const [skills, setSkills] = useState('');
  const [motivation, setMotivation] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      skills,
      motivation
    };
    console.log('Volunteer Experience Submitted:', formData);
    alert('Experience submitted!');
    // Navigate or send to backend
    navigate('/volunteer-consent')


  };

  return (
    <div className="volunteer-experience">
      <h2>Skills & Motivation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Skills / Experience</h4>
          <textarea
            placeholder="Tell us about any relevant experience or skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            rows={5}
            required
          />
        </label>

        <label>
          <h4>Why Do You Want to Volunteer?</h4>
          <textarea
            placeholder="A short motivation statement or interest"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            rows={5}
            required
          />
        </label>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerExperience;
