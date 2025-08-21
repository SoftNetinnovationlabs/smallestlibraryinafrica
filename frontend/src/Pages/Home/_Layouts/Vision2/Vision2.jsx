import { useState } from 'react';
import './Vision2.css';
import { Link } from 'react-router-dom';

const Vision2 = () => {
  const [toggleData, setToggleData] = useState('vision');

  const visionMissionDataSet = {
    vision:
      'We envision a world where every child and youth is healthy, educated and empowered to realize their full potential.',
    mission:
      'To be a global link to improve the quality of life of children and youths through Nutrition, education and Mentorship programs that provide a platform, the skills and enabling environment to realize envisioned change.',
  };

  const handleToggleData = (value) => {
    setToggleData(value);
/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Sets the state of the toggle data
   * @param {string} value Value to set the state to
   */
/*******  13836a60-3324-4e82-91ac-8d6c18f934d2  *******/  };

  return (
    <div className="vision2">
      <div className="vision2__container">

        {/* Vision / Mission Toggle Tabs */}
        <div className="vision2__content">
          <ul className="toggle-tabs">
            <li>
              <span
                className={toggleData === 'vision' ? 'active' : ''}
                onClick={() => handleToggleData('vision')}
              >
                Vision
              </span>
            </li>
            <li>
              <span
                className={toggleData === 'mission' ? 'active' : ''}
                onClick={() => handleToggleData('mission')}
              >
                Mission
              </span>
            </li>
          </ul>

          {/* Display Vision or Mission */}
          <section className="visionMission__sect">
            <div className="vision__mission">
              <p>{visionMissionDataSet[toggleData]}</p>

              {toggleData === 'mission' ? (
                <div style={{ marginTop: '20px' }}>
                  <Link to="/our-work" className="btn">
                    Our Programs
                  </Link>
                </div>
              ) : (
                <div style={{ marginTop: '20px' }}>
                  <Link to="/our-impact" className="btn">
                    Our Impact
                  </Link>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vision2;
