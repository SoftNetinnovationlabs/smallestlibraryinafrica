import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VolunteerConsent.css';

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
