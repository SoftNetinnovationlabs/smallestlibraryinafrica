import React from 'react';
import './Programs.css';
import { FaBookReader, FaGraduationCap, FaHandsHelping, FaLaptopCode } from 'react-icons/fa';
import {washImg,libraryImg, scholarshipImg , digitalImg} from '../../../../assets/assets';

const programsData = [
  {
    icon: <FaBookReader className="program-icon" />,
    image: libraryImg,
    title: "Smallest Library Program",
    description:
      `Started in 2014 in Mugure slums as an open-air library, this program strengthens and creates a reading culture among children in low-income communities. We establish and support libraries, run book clubs, and create E-learning spaces.`,
  },
  {
    icon: <FaGraduationCap className="program-icon" />,
    image: scholarshipImg,
    title: "Nipeleke Shule Scholarship Program",
    description:
      `We identify and support vulnerable children by providing school fees, uniforms, and stationery. We also promote inclusion for children with disabilities by strengthening special needs schools in informal settlements.`,
  },
  {
    icon: <FaHandsHelping className="program-icon" />,
    image: washImg,
    title: "WASH and Feeding Program",
    description:
      `This program installs water stations and provides meals in schools to combat hunger and malnutrition, thus improving academic performance, retention, and overall wellbeing.`,
  },
  {
    icon: <FaLaptopCode className="program-icon" />,
    image: digitalImg,
    title: "Youth Digital Space",
    description:
      `Our digital space equips youth with skills in web design, data entry, coding, and digital marketing, helping them avoid drugs, crime, and unemployment through technology.`,
  },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="programs-title">OUR PROGRAMS</h2>
        {programsData.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-image-wrapper">
              <img src={program.image} alt={program.title} className="program-image" />
              {program.icon}
            </div>
            <div className="program-content">
              <h3 className="program-card-title">{index + 1}. {program.title}</h3>
              <p className="program-card-description">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
