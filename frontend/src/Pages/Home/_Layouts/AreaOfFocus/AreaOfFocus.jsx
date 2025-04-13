import React from "react";
import "./AreaOfFocus.css";
import { Link } from "react-router-dom";
const AreaOfFocus = () => {
  return (
    <div className="area_of_focus">
    <h1>Our Area Of Focus </h1>
      <div className="Area__focus_container">
        <div className="area__focus">
          <div className="icon">
            <span className="material-symbols-outlined school">school</span>
          </div>
          <div className="body">
            <h4>EDUCATION</h4>
            <p>
              {" "}
              We promote literacy by promoting access to quality education and
              conducive reading spaces to children living in impoverished
              communities. Our efforts are invested to capture those children
              who are at the highest risk of missing schooling and accessing
              reading spaces and materials.
            </p>
          </div>
        </div>
        <div className="area__focus">
          <div className="icon">
            <span className="material-symbols-outlined school health">
              health_and_safety
            </span>
          </div>
          <div className="body">
            <h4> HEALTH AND NUTRITION</h4>
            <p>
              {" "}
              We promote proper growth and development of children below 5 years,
              pre adolescent and adolescent by establishing and supporting new
              and existing supplementary feeding programs at both community and
              schooling levels.Furthermore, we also promote access to clean
              water to schools and communities in informal settlements
            </p>

          </div>
        </div>
        <div className="area__focus">
          <div className="icon">
            <span className="material-symbols-outlined school" id="diversity">diversity_3</span>
          </div>
          <div className="body">
            <h4> RESILIENT LIVELIHOODS</h4>
            <p>
              Facilitate the building of life and technical skills of youths
              ,tailored to current realities and market needs and link them to
              entrepreneurial and employment opportunities.
            </p>
          </div>
        </div>
      </div>
                   <Link to="/about" className=" icons_btn"><span className="material-symbols-outlined arrow">arrow_right_alt</span></Link> 

    </div>
  );
};

export default AreaOfFocus;
