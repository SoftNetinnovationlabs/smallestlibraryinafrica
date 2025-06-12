import React, { useState } from 'react';
import './VolunteerExperience.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const metaTitle = "Volunteer Experience | Smallest Library in Africa";
const metaDescription = "Share your skills and motivation to volunteer with the Smallest Library in Africa Initiative. Help us empower communities through education and service.";
const metaUrl = "https://smallestlibraryinafrica.org/volunteer-experience";
const metaImage = "https://smallestlibraryinafrica.org/images/volunteer-cover.jpg"; // Replace with your actual image

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
    navigate('/volunteer-consent');
  };

  return (
    <div className="volunteer-experience">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
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
