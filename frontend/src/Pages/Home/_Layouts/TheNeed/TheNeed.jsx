import React from "react";
import "./TheNeed.css";
import {assets} from '../../../../assets/assets'
const TheNeed = () => {
  return (
    <div className="theneed">
      <h1>The Need</h1>
      <div className="container__theneed">
        <div className="theneed__content">
          <div className="description">
            <p>
              {" "}
              Majority of the Kenyan Urban population live in the informal slum
              where access to basic human needs like food, shelter, clothing,
              sanitation and education is a big challenge
            </p>
            <p>
              {" "}
              Children and Youths growing up in such settings are the most
              vulnerable hence the continuous cycle of poverty one generation
              after another.
            </p>
            <p>
              {" "}
              Baba dogo and lucky summer wards are such communities where
              children and young adults are trapped by the systems that hold
              urban poverty
            </p>
            <button className="btn">learn More</button>
          </div>
        </div>
        <div className="theneed__content">
          <div className="description">
            <div className="img">
              <img src={assets.image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNeed;
