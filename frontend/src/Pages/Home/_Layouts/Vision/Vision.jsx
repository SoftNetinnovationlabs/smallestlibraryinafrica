import React from "react";
import "./Vision.css";
import { assets } from "../../../../assets/assets";
const Vision = () => {
  return (
    <div className="vision">
      <div className="vision__container">
        <div className="vision__container__title">
          <h1>Our Vision for Change</h1>
                              <div className='title-design'></div>
        </div>
        <div className="vision__container__content">
          <p>
            We believe that creating stronger communities starts by investing in
            special programs that target children and youths who make up 60% of
            Africa’s population. Investing in critical areas like education,
            health, safe spaces and livelihood holds the key that could lift
            millions of families out of poverty{" "}
          </p>
        </div>
      </div>
      <div className="vision__images">
        <div className="vision__image">
          {" "}
          <img src={assets.childrenModel} alt="vision1" />
        </div>
        <div className="vision__image">
          {" "}
          <img src={assets.education} alt="vision1" />
        </div>

      </div>
    </div>
  );
};
export default Vision;
