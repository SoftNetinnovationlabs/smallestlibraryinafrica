import React from "react";
import "./Story.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Story = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Story</h1>
      <div className="story__container">
        <div className="story__content">
          <p>
            Smallest Library In Africa Initiative started as an open air library
            in Mugure slums by Cyril Peter Otieno. The library would be open 5
            days a week from 5:30pm-7:30pm and would remain closed during the
            short and long rains
          </p>
         
        </div>
        <div className="story__content">
          <p>
            {" "}
            Despite its makeshift start , the library became a learning haven to
            school going children who could now access books and conducive
            learning space , something that seemed impossible.
          </p>
         
        </div>
        <div className="story__content">
          <p>
            {" "}
            Having experienced the same learning and social challenges , Cyril
            saw this and believed that he could inspire his community to change
            their narrative from impossibilities to possibilities.
          </p>
         
        </div>
        <div className="story__content">
          <p>
            {" "}
            Today, Smallest Library In Africa has become part of the global
            movement of trying to end inequalities through promoting access to
            education ,nutrition and sustainable livelihoods in marginalized
            communities. All this has been made possible as we try to blend
            technology in designing and implementing our solutions
          </p>

        </div>
      </div>
      <section className="about__container">
        <div className="about__card">
          <div className="about__content">
            <h4>Our people</h4>
            <p>
              {" "}
              We are a team of passionate individuals who are committed to
              creating a better future for children and youths in Africa
            </p>
            <Link className="link" to="/about/our-people">
          <FaArrowRight />
          </Link>
          </div>
        </div>
        <div className="about__card">
          <div className="about__content">
            <h4>Our Founder</h4>
            <p>
              {" "}
              Our founder is a young entrepreneur who is passionate about
              creating a better future for children and youths in Africa
            </p>
            <Link className="link" to="/about/founder">
          <FaArrowRight />
          </Link>
          </div>
        </div>
        <div className="about__card">
          <div className="about__content">
            <h4>Our board of directors</h4>
            <p>
              {" "}
              Our board of directors is made up of experienced professionals who
              are committed to creating a better future for children and youths
              in Africa
              </p>
              <Link className="link" to="/about/board-of-directors">
          <FaArrowRight />
          </Link>
          </div>
        </div>
        <div className="about__card">
          <div className="about__content">
            <h4>Our Staff</h4>
            <p>
              {" "}
              Our board of directors is made up of experienced professionals who
              are committed to creating a better future for children and youths
              in Africa
              </p>
              <Link className="link" to="/about/board-of-directors">
          <FaArrowRight />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
