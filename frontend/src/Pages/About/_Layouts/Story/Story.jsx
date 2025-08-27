import React from "react";
import "./Story.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import boardMembers from "../../Board/BoardData"; // ✅ import shared data



const Story = () => {
  return (
    <>
    <div className="hero-story">
      <h1>Our Story</h1>
    </div>
      <div className="story__wrapper">
        <div className="text-story">
          <h3> the humble beginnings</h3>
        </div>

        <div className="story__container">
          <div className="story__content">
            <p>
              The Smallest Library In Africa Initiative began as an open-air
              library in Mugure slums, founded by Cyril Peter Otieno. The
              library operated five days a week from 5:30 pm to 7:30 pm, closing
              during the short and long rainy seasons.
            </p>
          </div>

          <p>
            Despite its humble beginnings, the library became a vital learning
            space for school-going children, offering access to books and a
            safe, supportive environment—something previously unimaginable in
            the area.
          </p>

          <p>
            Having experienced similar educational and social challenges, Cyril
            believed in the potential of his community and was determined to
            transform their narrative from one of impossibilities to
            possibilities.
          </p>

          <p>
            Today, the Smallest Library In Africa is part of a global movement
            to end inequality by promoting education, nutrition, and sustainable
            livelihoods in marginalized communities. Our efforts are powered by
            technology and innovation to design and implement impactful
            solutions.
          </p>
        </div>
      </div>

      <section className="about__container">
        <h1 className="improved-team-title">Our People</h1>
        <div className="flex-container">
          {boardMembers.map((member) => (
            <div key={member.id} className="founder_people">
              <img src={member.image} alt={member.name} />
              <div className="overlay_data">
                <p className="overlay-data_text">
                  {member.title}: {member.name}
                </p>
                <div className="overlay-data_btns">
                  <Link
                    to={`/about/board/${member.id}`}
                    className="overlay-data_link"
                  >
                    Story <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Story;
