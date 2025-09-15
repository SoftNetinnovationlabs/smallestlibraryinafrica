import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { assets } from "../../../../assets/assets";

const Hero = () => {
  const DataSet = [
    {
      title: "Programs",
      description:
        "Started in 2014 in Mugure slums as an open air library, our objective as a program is to strengthen and create a reading culture among children in low-income communities.",
      image: assets.Take43,
    },
    {
      title: "Our Approach",
      description:
        "Our approach combines grassroots involvement with community-driven solutions, empowering locals to lead sustainable change.",
      image: assets.ChildrenWith,
    },
    {
      title: "Area of focus",
      description:
        "We focus on education, mentorship, and community development through literacy and access to knowledge.",
      image: assets.innovation,
    },
  ];

  const [current, setCurrent] = useState(0);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % DataSet.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Crossfade backgrounds & animate text
  useEffect(() => {
    if (!topRef.current || !bottomRef.current) return;

    // Set next image on top
    topRef.current.style.backgroundImage = `url(${DataSet[current].image})`;

    // Fade top in
    gsap.fromTo(
      topRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Swap layers for next transition
          const temp = bottomRef.current;
          bottomRef.current = topRef.current;
          topRef.current = temp;
        },
      }
    );

    // Animate text
    gsap.fromTo(
      ".hero__content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, [current]);

  // Grid overlay animation
  useEffect(() => {
    gsap.fromTo(
      ".grid-overlay",
      { opacity: 0, x: 50 },
      { opacity: 1, x: -20, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="hero">
      {/* Background layers */}
      <div ref={bottomRef} className="hero__bg bottom" />
      <div ref={topRef} className="hero__bg top" />

      <div className="grid-overlay"></div>

      <div className="hero__content">
        <div className="dynamic_btns">
          {DataSet.map((item, index) => (
            <span
              key={index}
              className={`d_btn ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            >
              {item.title}
            </span>
          ))}
        </div>

        <h1 className="hero__title">
          <span>{DataSet[current].title}</span>
        </h1>
        <p className="hero__description">{DataSet[current].description}</p>

        <Link to="/about" className="hero__button btn">
          Learn More
        </Link>
      </div>

      <section className="social-section">
        <div className="socialmedia-links">
          <a
            href="https://www.facebook.com/share/12M22t7mL97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
