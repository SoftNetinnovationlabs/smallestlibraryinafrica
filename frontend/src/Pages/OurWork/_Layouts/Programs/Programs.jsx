import React, { useState, useEffect } from 'react';
import './Programs.css';
import { FaBookReader, FaGraduationCap, FaHandsHelping, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import { assets } from '../../../../assets/assets';
import {Link} from 'react-router-dom'
const programsData = [
  {
    icon: <FaBookReader className="program-icon" />,
    title: "Smallest Library Program",
    description: `Started in 2014 in Mugure slums as an open-air library, this program strengthens and creates a reading culture among children in low-income communities. We establish and support libraries, run book clubs, and create E-learning spaces.`,
  },
  {
    icon: <FaGraduationCap className="program-icon" />,
    title: "Internet for Scholarship Program",
    description: `We identify and support vulnerable children by providing school fees, uniforms, and stationery. We also promote inclusion for children with disabilities by strengthening special needs schools in informal settlements.`,
  },
  {
    icon: <FaHandsHelping className="program-icon" />,
    image: assets.washImg,
    title: "WASH and Feeding Program",
    description: `This program installs water stations and provides meals in schools to combat hunger and malnutrition, thus improving academic performance, retention, and overall wellbeing.`,
  },
  {
    icon: <FaLaptopCode className="program-icon" />,
    title: "Youth Digital Space",
    description: `Our digital space equips youth with skills in web design, data entry, coding, and digital marketing, helping them avoid drugs, crime, and unemployment through technology.`,
  },

];

const infoGraphic = {
  paragraphTop: 'Our Programs aimed to improve',
  paragraphbottom: 'of schools have appreciated our cause'
}

const Programs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [counts, setCounts] = useState(0)
  const toggleCard = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCounts(current);
      if (current >= 90) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="programs-section">
    <div className='programs-container'>
<div className='imageData'>
  <img src={assets.washImg} />
  <div className='overlayData'>
  <div className='overlay__top'>
    <p>{infoGraphic.paragraphTop}</p>
      <Link className='iconTop' to='/about'>
            <FaArrowRight />
</Link>
  </div>
    <div className='overlay__bottomData'>
      <div className='counter'>
        <span className='counts'>{counts}%</span>
        <div>
          <div className='text'>
            <p>{infoGraphic.paragraphbottom}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="programs-container">
        <h2 className="programs-title">OUR PROGRAMS</h2>
        {programsData.map((program, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className={`program-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="program-image-wrapper">
                {program.icon}
              </div>
              <div className="program-content">
                <h3 className="program-card-title">
                  {index + 1}. {program.title}
                </h3>
                <div
                  className="program-card-body"
                  style={{ maxHeight: isExpanded ? '400px' : '0px' }}
                >
                  <p className="program-card-description">{program.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
