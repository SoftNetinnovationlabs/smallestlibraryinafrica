import React from "react";
import "./Vision.css";
import { assets } from "../../../../assets/assets";
const Vision = () => {
  return (
    <div className="vision">
      <div className="vision__container">
        <div className="vision__container__title">
          <h1>Our Vision for Change</h1>
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
          <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="vision1" />
        </div>

      </div>
    </div>
  );
};
export default Vision;
