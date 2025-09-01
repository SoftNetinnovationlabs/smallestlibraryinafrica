import React from "react";
import "./YouthDigitalSpaceProgram.css";

const YouthDigitalSpaceProgram = () => {
  return (
    <div className="program-container">
      <header className="program-header">
        <div className="overlay">
          <h1>Youth Digital Space Program</h1>
          <p className="program-subtitle">
            Launched in August 2025 at our Community Innovation Hub — Mugure’s
            first dedicated space for digital learning and innovation.
          </p>
        </div>
      </header>

      <section className="program-section">
        <h2>Why This Program Matters</h2>
        <p>
          For too long, children and young people in marginalized communities
          have been excluded from the digital revolution. This program is
          changing that by ensuring equal access to digital tools, skills, and
          opportunities.
        </p>
      </section>

      <section className="program-section">
        <h2>What We Do</h2>
        <ul>
          <li>
            <strong>Coding for Children:</strong> Free basic coding classes
            introduce children to problem-solving, creativity, and the language
            of the future.
          </li>
          <li>
            <strong>Digital Training for Youth:</strong> Tailored programs in
            digital literacy, employability, and tech skills prepare young people
            for the modern workforce — opening doors to alternative employment
            opportunities in the digital economy.
          </li>
        </ul>
      </section>

      <section className="program-section">
        <h2>Our Objectives</h2>
        <ul>
          <li>Bridge digital inequality gaps in underserved communities.</li>
          <li>
            Empower youth with practical digital and entrepreneurial skills to
            reduce unemployment.
          </li>
          <li>
            Provide safe and innovative spaces where children and youth can
            learn, create, and thrive.
          </li>
        </ul>
      </section>

      <section className="program-section">
        <h2>Our Vision</h2>
        <p>
          We believe that when young people in Mugure gain access to digital
          skills, they gain access to opportunity. By equipping the next
          generation with tools for the future, we are building pathways out of
          poverty and ensuring that no child or youth is left behind in the
          digital age.
        </p>
      </section>
    </div>
  );
};

export default YouthDigitalSpaceProgram;
