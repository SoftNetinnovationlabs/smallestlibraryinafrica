import React from "react";
import "./Story.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
const Story = () => {
  return (
    <div>
    <div className="story__wrapper">
<div className="text-story">       
   <h3>Our Story: the humble beginnings</h3>
</div>
      <div className="story__container">
        <div className="story__content">
          <p>
            The Smallest Library In Africa Initiative began as an open-air library in Mugure slums, founded by Cyril Peter Otieno. The library operated five days a week from 5:30 pm to 7:30 pm, closing during the short and long rainy seasons.
          </p>
        </div>

          <p>
            Despite its humble beginnings, the library became a vital learning space for school-going children, offering access to books and a safe, supportive environment—something previously unimaginable in the area.
          </p>

          <p>
            Having experienced similar educational and social challenges, Cyril believed in the potential of his community and was determined to transform their narrative from one of impossibilities to possibilities.
          </p>

          <p>
            Today, the Smallest Library In Africa is part of a global movement to end inequality by promoting education, nutrition, and sustainable livelihoods in marginalized communities. Our efforts are powered by technology and innovation to design and implement impactful solutions.
          </p>
      </div>

    </div>
      <section className="about__container">
        

        <div className="about__card">
          <div className="founder_people">
            <img src={assets.Founder} alt="Founder" />
          </div>
          <div className="about__content">
            <h4>Our Founder</h4>
            {/* <p>
              Meet the visionary behind the initiative—a young entrepreneur passionate about transforming communities through education and opportunity.
            </p> */}
            <Link className="link" to="/about/founder">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="about__card">
          <div className="about__content">
               <div className="founder_people">
            <img src={assets.board} alt="Founder" />
          </div>
            <h4>Our Board of Directors</h4>
            {/* <p>
              Our board is composed of experienced leaders dedicated to advancing our mission and ensuring transparency, accountability, and sustainability.
            </p> */}
            <Link className="link" to="/about/board-of-directors">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* <div className="about__card">
          <div className="about__content">
               <div className="founder_people">
            <img src={assets.Founder} alt="Founder" />
          </div>
            <h4>Our Staff</h4>
            <p>
              Meet the dedicated team members who work tirelessly to bring our programs and initiatives to life.
            </p>
            <Link className="link" to="/about/staff">
              <FaArrowRight />
            </Link>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Story;
