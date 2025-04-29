import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
   
      <div className="hero__images">
        <img src="/assets/images/hero1.jpg" alt="" className="hero__image" />
        <img src="/assets/images/hero2.jpg" alt="" className="hero__image" />
     </div>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Welcome to the Smallest Library in Africa!{" "}
          </h1>
          <p className="hero__description">
            Lighting Up Sustainable Opportunities for children and youths{" "}
          </p>
         
          <Link to="/about" className="hero__button btn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
