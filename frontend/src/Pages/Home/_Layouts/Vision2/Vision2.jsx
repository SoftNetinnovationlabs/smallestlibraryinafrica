import { useState } from 'react';
import { assets } from '../../../../assets/assets';
import './Vision2.css';
import {FaArrowRight} from 'react-icons/fa'
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
  };

  return (
    <div className="vision2">
      <div className="vision2__container">
        <div className="vision2__content">
          <div className="two__cards">
            <div className="cardDet green">
              <div className='flex-wrapper-container'>
              <div className="card-wrapper">
                <h3>Our digital</h3>
                <h3>space</h3>
                <div>
                  <FaArrowRight/>
                  </div>
              </div>
              <div className="card-wrapper">
                <div className='card_img'>
                  <img src={assets.content} alt="Digital space" />
                  </div>
             
                </div>
              </div>
            </div>
            <div className="cardDet gray"></div>
          </div>
        </div>

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

          <section className="visionMission__sect">
            <div className="vision__mission">
              <p>{visionMissionDataSet[toggleData]}</p>

              {toggleData === 'mission'? (
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
