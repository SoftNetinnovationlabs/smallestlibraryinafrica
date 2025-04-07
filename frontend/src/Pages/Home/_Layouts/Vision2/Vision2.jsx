import { useState } from 'react';
import { assets } from '../../../../assets/assets';
import './Vision2.css';

const Vision2 = () => {
  const [toggleData, setToggleData] = useState('vision');

  const visionMissionDataSet = {
    vision:
      'We envision a world where every child and youth is healthy, educated and empowered to realize their full potential.',
    mission:
      'To be a global link to improve the quality of life of children and youths through Nutrition, education and Mentorship programs that provide a platform, the skills and enabling environment to realize envisioned change.'
  };

  const handleToggleData = (value) => {
    setToggleData(value);
  };

  return (
    <div className='vision2'>
      <div className='vision2__container'>
        <div className='vision2__content'>
          <div className='vision__img'>
            <img src={assets.collague} alt='vision-mission-img' />
          </div>
        </div>
        <div className='vision2__content'>
          <ul>
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
          <section className='visionMission__sect'>
            {toggleData === 'vision' && (
              <div className='vision__mission'>
                <p>{visionMissionDataSet.vision}</p>
              </div>
            )}
            {toggleData === 'mission' && (
              <div className='vision__mission'>
                <p>{visionMissionDataSet.mission}</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vision2;
