import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Welcome to the Smallest Library in Africa!{" "}
          </h1>
          <p className="hero__description">
            Lighting Up Sustainable Opportunities for children and youths{" "}
          </p>
          {/* <p>
            <span className="hero__highlight">Discover</span> your next
            opportunity to contribute to the fight against poverty.
          </p> */}
          <Link to="/about" className="hero__button btn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
