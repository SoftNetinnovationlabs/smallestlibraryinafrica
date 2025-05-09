import React from 'react';
import { assets } from '../../../../../assets/assets';
import './_structHero.css';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa';

const _structHero = () => {
  return (
    <div className='struct-hero'>
      <div className='struct-hero-container'>
        <div className='hero__-content'>
          <div className='hero-image'>
            <img src={assets.Founder} alt="Founder Cyril Peter Odhiambo" />
          </div>
        </div>
        <div className='hero__content'>
          <h1>About Our Founder</h1>
          <h4>Cyril Peter Odhiambo</h4>
          <h5>A Story of Resilience: The Journey of Cyril Otieno and the Smallest Library in Africa</h5>
          <div className='p_graph'>
            <p>
              Cyril Otieno’s story is one of courage, perseverance, and an unyielding commitment to his community.
              Growing up in the Mugure slums of Kenya, Cyril faced a myriad of socio-economic challenges that could
              have easily deterred him from dreaming of a better future. Yet, it was these very hardships that fueled
              his determination to create change.
            </p>
            <div className='social-links'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _structHero;
