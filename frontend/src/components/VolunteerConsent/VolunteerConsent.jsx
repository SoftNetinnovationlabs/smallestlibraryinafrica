import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerConsent.css';
import { Helmet } from "react-helmet";

const metaTitle = "Volunteer Consent | Smallest Library in Africa";
const metaDescription = "Provide your consent to volunteer with the Smallest Library in Africa Initiative. Agree to our terms and confirm your age to join our mission.";
const metaUrl = "https://smallestlibraryinafrica.org/volunteer-consent";
const metaImage = "https://smallestlibraryinafrica.org/images/volunteer-consent-cover.jpg"; // Replace with your actual image

const VolunteerConsent = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [is16OrOlder, setIs16OrOlder] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms || !is16OrOlder) {
      alert('You must agree to both checkboxes to proceed.');
      return;
    }
    // Optional: send data to backend here
    console.log('Consent given. Redirecting to dashboard...');
    navigate('/dashboard');
  };

  return (
    <div className="volunteer-consent">
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
      <h2>Consent & Agreement</h2>
      <form onSubmit={handleSubmit}>
        <label className="checkbox-field">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            required
          />
          I agree to the <a href="/terms">Terms and Conditions</a>
        </label>

        <label className="checkbox-field">
          <input
            type="checkbox"
            checked={is16OrOlder}
            onChange={() => setIs16OrOlder(!is16OrOlder)}
            required
          />
          I’m 16 years or older or have parental consent (if needed)
        </label>

        <button type="submit" className="submit-consent">Submit & Go to Dashboard</button>
      </form>
    </div>
  );
};

export default VolunteerConsent;
