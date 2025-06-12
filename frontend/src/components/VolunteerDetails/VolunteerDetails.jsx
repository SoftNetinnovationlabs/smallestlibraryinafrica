import React, { useState } from 'react';
import './VolunteerDetails.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const metaTitle = "Volunteer Details | Smallest Library in Africa";
const metaDescription = "Share your preferred volunteer role, availability, and background with the Smallest Library in Africa Initiative. Join us in making a difference through education and service.";
const metaUrl = "https://smallestlibraryinafrica.org/volunteer-details";
const metaImage = "https://smallestlibraryinafrica.org/images/volunteer-details-cover.jpg"; // Replace with your actual image

const roles = [
  "Reading Buddy",
  "Mentor",
  "Event Organizer",
  "Tech Support",
  "Library Builder"
];

const timeOptions = [
  "Weekdays",
  "Weekends",
  "Mornings",
  "Afternoons",
  "Evenings"
];

const VolunteerDetails = () => {

  const [selectedRole, setSelectedRole] = useState('');
  const [availability, setAvailability] = useState([]);
  const [country, setCountry] = useState('');
  const [languages, setLanguages] = useState('');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    // Optionally validate fields or save to context/state
    navigate('/volunteer-experience');
  };

  const handleCheckboxChange = (option) => {
    setAvailability((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      role: selectedRole,
      availability,
      country,
      languages
    };
    console.log("Volunteer Submission:", formData);
    alert('Details submitted!');
    // Navigate or send to backend
  };

  return (
    <div className="volunteer-details">
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
      <h2>Volunteer Details</h2>

      <form onSubmit={handleSubmit}>
        <h4>Preferred Volunteer Role</h4>
        <div className="role-buttons">
          {roles.map((role) => (
            <button
              type="button"
              key={role}
              className={`role-btn ${selectedRole === role ? 'selected' : ''}`}
              onClick={() => handleRoleClick(role)}
            >
              {role}
            </button>
          ))}
        </div>

        <h4>Availability</h4>
        <div className="checkbox-group">
          {timeOptions.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={availability.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <h4>Country / Location</h4>
        <input
          type="text"
          placeholder="Enter your country or location"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <h4>Languages Spoken</h4>
        <input
          type="text"
          placeholder="e.g., English, Swahili"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <button onClick={handleContinue} className="btn">Next</button>
    </div>
  );
};

export default VolunteerDetails;
