import React from "react";
import "./WashFeedingProgramPage.css";

export default function WashFeedingProgramPage() {
  return (
    <div className="wash-page">
      {/* Hero */}
      <section className="wash-hero">
        <div className="wash-hero-bg" />
        <div className="wash-hero-content">
          <h1 className="wash-hero-title">Smallest Library WASH & Feeding Program</h1>
          <p className="wash-hero-subtitle">
            Ensuring no child misses school because of hunger, lack of clean water,
            or poor nutrition awareness at home.
          </p>
        </div>
      </section>

      {/* Why This Program Matters */}
      <section className="wash-section">
        <h2 className="wash-section-title">Why This Program Matters</h2>
        <ul className="wash-list">
          <li>
            <span className="wash-highlight">Lack of clean water:</span> Students are often forced to
            carry water from home to school, affecting their attendance and energy.
          </li>
          <li>
            <span className="wash-highlight">Hunger and malnutrition:</span> Research shows that 1 in 4
            children in informal settlements misses school due to hunger, limiting their
            ability to concentrate and learn.
          </li>
          <li>
            <span className="wash-highlight">Poor infrastructure:</span> The absence of proper water
            stations and school kitchens worsens these challenges.
          </li>
        </ul>
      </section>

      {/* Our Solution */}
      <section className="wash-section">
        <h2 className="wash-section-title">Our Solution</h2>
        <ul className="wash-list">
          <li>
            <span className="wash-highlight">Sustainable Water Stations:</span> Installed in schools to
            ensure access to clean and safe drinking water.
          </li>
          <li>
            <span className="wash-highlight">Nutritious Meals:</span> Provided to students and children
            in informal settlements to combat hunger and malnutrition.
          </li>
          <li>
            <span className="wash-highlight">Nutrition Training & Clinics:</span> Designed for young
            mothers to equip them with practical knowledge on child nutrition,
            hygiene, and healthy feeding practices.
          </li>
        </ul>
      </section>

      {/* The Impact */}
      <section className="wash-section">
        <h2 className="wash-section-title">The Impact</h2>
        <ul className="wash-list">
          <li>Promotes better concentration and learning outcomes.</li>
          <li>Improves school attendance and retention rates.</li>
          <li>Strengthens the health and wellbeing of children.</li>
          <li>Empowers young mothers with knowledge and support.</li>
          <li>Enhances chances of academic success and brighter futures.</li>
        </ul>
        <p className="wash-note">
          Our goal is simple but powerful: to ensure <b>no child misses school</b> because of hunger,
          lack of clean water, or poor nutrition awareness at home.
        </p>
      </section>

      {/* CTA */}
      <section className="wash-cta">
        <h3>Support the Program</h3>
        <p>
          Partner with us to provide clean water, nutritious meals, and nutrition
          education for vulnerable children and families.
        </p>
        <div className="wash-btn-group">
          <a href="#donate" className="wash-btn-primary">Donate Now</a>
          <a href="#learn-more" className="wash-btn-outline">Learn More</a>
        </div>
      </section>
    </div>
  );
}
