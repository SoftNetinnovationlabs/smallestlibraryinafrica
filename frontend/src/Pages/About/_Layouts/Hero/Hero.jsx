import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Animate text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate SVG stroke
    gsap.fromTo(
      svgRef.current.querySelectorAll("path"),
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out", stagger: 0.3 }
    );
  }, []);

  return (
    <div className="hero-container">
      <div className="hero__bg">
        {/* Text content */}
        <div ref={textRef} className="text__center">
          <h1>About Us</h1>
          <p>Creating timeless stories through visuals.</p>
          <div className="btns">
            <button className="btn">Our Story</button>
            <button className="btn">Contact</button>
          </div>
        </div>

        {/* SVG overlay for background blend */}
        <svg
          ref={svgRef}
          className="bg-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,122.7C672,85,768,75,864,101.3C960,128,1056,192,1152,218.7C1248,245,1344,235,1392,229.3L1440,224V320H0Z"
            fill="#ff6a00"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
