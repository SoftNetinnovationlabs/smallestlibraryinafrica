import React from "react";
import "./Story.css";
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
    </div>
  );
};

export default Story;
