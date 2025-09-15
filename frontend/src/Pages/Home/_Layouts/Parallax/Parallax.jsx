import React, { useState, useEffect } from "react";
import "./Parallax.css"; // Make sure your CSS includes all necessary classes
import { assets } from "../../../../assets/assets";

const slides = [
  {
    title: "Everything broken can be repaired",
    subtitle: "See how",
    image: assets.Take43,
  },
  {
    title: "See through the field",
    subtitle: "Learn more about",
    image: assets.ChildrenWith,
  },
  {
    title: "Hey, take a time to relax!",
    subtitle: "Everybody needs",
    image: assets.innovation,
  },
];

const Parallax = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="wrapper">
      <section className="slideshow" id="js-header">
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
          const isNext = !isCurrent && !isPrev;

          return (
            <div
              key={index}
              className={`slideshow__slide js-slider-home-slide ${
                isCurrent ? "is-current" : isPrev ? "is-prev" : "is-next"
              }`}
              data-slide={index + 1}
            >
              <div
                className="slideshow__slide-background-parallax background-absolute js-parallax"
                data-speed="-1"
                data-position="top"
                data-target="#js-header"
              >
                <div className="slideshow__slide-background-load-wrap background-absolute">
                  <div className="slideshow__slide-background-load background-absolute">
                    <div className="slideshow__slide-background-wrap background-absolute">
                      <div className="slideshow__slide-background background-absolute">
                        <div className="slideshow__slide-image-wrap background-absolute">
                          <div
                            className="slideshow__slide-image background-absolute"
                            style={{ backgroundImage: `url(${slide.image})` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slideshow__slide-caption">
                <div className="slideshow__slide-caption-text">
                  <div
                    className="container js-parallax"
                    data-speed="2"
                    data-position="top"
                    data-target="#js-header"
                  >
                    <h1 className="slideshow__slide-caption-title">{slide.title}</h1>
                    <a
                      className="slideshow__slide-caption-subtitle -load o-hsub -link"
                      href="#"
                    >
                      <span className="slideshow__slide-caption-subtitle-label">
                        {slide.subtitle}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Controls */}
        <div className="c-header-home_footer">
          <div className="o-container">
            <div className="c-header-home_controls -nomobile o-button-group">
              <div
                className="js-parallax is-inview"
                data-speed="1"
                data-position="top"
                data-target="#js-header"
              >
                <button
                  className="o-button -white -square -left js-slider-home-button js-slider-home-prev"
                  type="button"
                  onClick={prevSlide}
                >
                  <span className="o-button_label">
                    <svg className="o-button_icon" role="img">
                      <use xlinkHref="#arrow-prev" />
                    </svg>
                  </span>
                </button>
                <button
                  className="o-button -white -square js-slider-home-button js-slider-home-next"
                  type="button"
                  onClick={nextSlide}
                >
                  <span className="o-button_label">
                    <svg className="o-button_icon" role="img">
                      <use xlinkHref="#arrow-next" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Symbols */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol viewBox="0 0 18 18" id="arrow-next">
          <path d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z" />
        </symbol>
        <symbol viewBox="0 0 18 18" id="arrow-prev">
          <path d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z" />
        </symbol>
      </svg>
    </div>
  );
};

export default Parallax;
