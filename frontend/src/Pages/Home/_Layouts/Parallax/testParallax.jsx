import React, { useState, useEffect, useRef } from "react";
import "./Parallax.css";

const slides = [
  {
    title: "Everything broken can be repaired",
    subtitle: "See how",
    image: "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
  },
  {
    title: "See through the field",
    subtitle: "Learn more about",
    image: "https://images.pexels.com/photos/110649/pexels-photo-110649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
  },
  {
    title: "Hey, take a time to relax!",
    subtitle: "Everybody needs",
    image: "https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
  }
];

const TestParallax = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const containerRef = useRef(null);

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxElems = containerRef.current.querySelectorAll(".js-parallax");
      parallaxElems.forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0;
        el.style.transform = `translateY(${scrollTop * speed * 0.1}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="wrapper" ref={containerRef}>
      <section className="slideshow" id="js-header">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`slideshow__slide ${isActive ? "is-current" : ""}`}
              data-slide={index + 1}
            >
              {/* Background image */}
              <div
                className="slideshow__slide-background background-absolute js-parallax"
                data-speed="-1"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "opacity 0.8s ease-in-out",
                  opacity: isActive ? 1 : 0
                }}
              ></div>

              {/* Caption with slide-in parallax */}
              <div
                className="slideshow__slide-caption"
                style={{
                  transform: isActive ? "translateY(0)" : "translateY(50px)",
                  opacity: isActive ? 1 : 0,
                  transition: "transform 0.8s ease-out, opacity 0.8s ease-out"
                }}
              >
                <div className="slideshow__slide-caption-text">
                  <div className="container js-parallax" data-speed="2">
                    <h1 className="slideshow__slide-caption-title">{slide.title}</h1>
                    <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                      <span className="slideshow__slide-caption-subtitle-label">{slide.subtitle}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation */}
        <div className="c-header-home_footer">
          <div className="o-container">
            <div className="c-header-home_controls -nomobile o-button-group">
              <button className="o-button -white -square -left" type="button" onClick={prevSlide}>
                <span className="o-button_label">
                  <svg className="o-button_icon" role="img"><use xlinkHref="#arrow-prev" /></svg>
                </span>
              </button>
              <button className="o-button -white -square" type="button" onClick={nextSlide}>
                <span className="o-button_label">
                  <svg className="o-button_icon" role="img"><use xlinkHref="#arrow-next" /></svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* SVG Arrows */}
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol viewBox="0 0 18 18" id="arrow-next">
            <path d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z" />
          </symbol>
          <symbol viewBox="0 0 18 18" id="arrow-prev">
            <path d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z" />
          </symbol>
        </svg>
      </section>
    </div>
  );
};

export default TestParallax;


