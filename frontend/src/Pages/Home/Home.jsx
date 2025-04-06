import React from "react";
import Vision from "./_Layouts/Vision/Vision.jsx";
import TheNeed from "./_Layouts/TheNeed/TheNeed.jsx";
import Hero from "./_Layouts/Hero/Hero.jsx";
import Display from "./_Layouts/Display/Display";
import AreaOfFocus from "./_Layouts/AreaOfFocus/AreaOfFocus.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Vision />
      <TheNeed />
      <AreaOfFocus />
      <Display />
    </div>
  );
};
export default Home;
