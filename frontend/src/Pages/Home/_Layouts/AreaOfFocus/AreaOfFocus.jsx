import React from "react";
import "./AreaOfFocus.css";
const AreaOfFocus = () => {
  return (
    <div className="area_of_focus">
      <div className="Area__focus_container">
        <div className="area__focus">
          <div className="icon">
            <span className="material-symbols-outlined school">school</span>
          </div>
          <div className="body">
            <h5>EDUCATION</h5>
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
            <h6> HEALTH AND NUTRITION</h6>
            <p>
              {" "}
              Wepromote proper growth and development of children below 5 years,
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
            <h5> RESILIENT LIVELIHOODS</h5>
            <p>
              Facilitate the building of life and technical skills of youths
              ,tailored to current realities and market needs and link them to
              entrepreneurial and employment opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
