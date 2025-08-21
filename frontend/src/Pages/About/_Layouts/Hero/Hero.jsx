// Hero.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Animate text fade & slide in
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate SVG stroke draw
    gsap.fromTo(
      svgRef.current.querySelectorAll("path"),
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out", stagger: 0.3 }
    );

    // Animate images scale up smoothly
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  return (
    <div className="hero-container">
      {/* Background Hero */}
      <div className="hero__bg">
        <div ref={textRef} className="text__center">
          <h1 style={{ color: "white", fontSize: "3rem" }}>About Us</h1>
          <p style={{ color: "white", fontSize: "1.2rem" }}>
            Creating timeless stories through visuals.
          </p>
          <div className="btns">
            <button className="btn">Our Story</button>
            <button className="btn">Contact</button>
          </div>
        </div>

        {/* Decorative Animated SVG */}
        <svg
          ref={svgRef}
          className="animated-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 200"
        >
          <path
            d="M0,100 Q200,200 400,100 T800,100"
            stroke="#f9930d"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>

        {/* Image Grids */}
        <div className="two_images-top-left">
          {["/img1.webp", "/img2.webp"].map((src, i) => (
            <div key={i} className={`image${i + 1}`}>
              <img
                src={src}
                alt=""
                ref={(el) => (imagesRef.current[i] = el)}
              />
            </div>
          ))}
        </div>

        <div className="two_images-top-right">
          {["/img3.webp", "/img4.webp"].map((src, i) => (
            <div key={i} className={`image${i + 3}`}>
              <img
                src={src}
                alt=""
                ref={(el) => (imagesRef.current[i + 2] = el)}
              />
            </div>
          ))}
        </div>

        <div className="four_images-bottom">
          {["/img5.webp", "/img6.webp", "/img7.webp", "/img8.webp"].map(
            (src, i) => (
              <div key={i} className={`image${i + 5}`}>
                <img
                  src={src}
                  alt=""
                  ref={(el) => (imagesRef.current[i + 4] = el)}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
