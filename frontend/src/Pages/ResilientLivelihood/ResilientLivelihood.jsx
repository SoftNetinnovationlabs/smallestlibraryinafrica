import React from 'react';
import { assets } from '../../assets/assets';
import './ResilientLivelihood.css';

const DataResilientLivelihood = [
  {
    id: 3,
    title: "Resilient Livelihoods",
    description: 'We focus on implementing a career, internship, and entrepreneurship program that aims to provide information, build technical capacity, and equip youths—who are most vulnerable to unemployment, drug abuse, crime, and radicalization—with sustainable skills.',
    assets: assets.Livelihood,
    overlayText: 'Building brighter futures through opportunity'
  },
];

const ResilientLivelihood = () => {
  return (
    <div className="livelihood-page">
      {/* Hero Header */}
      <div className="livelihood-hero">
        <div className="livelihood-hero-content">
          <h1 className="livelihood-main-title">Our Approach</h1>
          <p className="livelihood-intro-text">
            We are committed to creating a world where every child has the 
            opportunity to thrive and reach their full potential. Our approach 
            is centered around three key pillars:
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="livelihood-content-wrapper">
        {DataResilientLivelihood.map((approach) => (
          <div className="livelihood-card" key={approach.id}>
            <div className="livelihood-grid">
              {/* Text Content */}
              <div className="livelihood-text-section">
                <div className="section-badge">
                  <span>Pillar {approach.id}</span>
                </div>
                <h2 className="livelihood-title">{approach.title}</h2>
                <div className="title-divider"></div>
                <p className="livelihood-description">{approach.description}</p>
              </div>

              {/* Image Content */}
              <div className="livelihood-image-section">
                <div className="image-container">
                  <img 
                    src={approach.assets} 
                    alt={approach.title}
                    className="livelihood-image"
                  />
                  <div className="image-overlay">
                    <p className="overlay-message">{approach.overlayText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResilientLivelihood;