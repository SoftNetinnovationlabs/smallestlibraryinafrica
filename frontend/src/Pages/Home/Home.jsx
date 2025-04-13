import React from "react";
import Vision from "./_Layouts/Vision/Vision.jsx";
import TheNeed from "./_Layouts/TheNeed/TheNeed.jsx";
import Hero from "./_Layouts/Hero/Hero.jsx";
import Display from "./_Layouts/Display/Display";
import AreaOfFocus from "./_Layouts/AreaOfFocus/AreaOfFocus.jsx";
import Vision2 from './_Layouts/Vision2/Vision2'
import Partners from "./_Layouts/Partners/Partners.jsx";
import CoreValues from "./_Layouts/CoreValues/CoreValues.jsx";
import Counter from './_Layouts/Counter/Counter'
const Home = () => {
  return (
    <div>
      <Hero />
      <Vision />
      <TheNeed />
      <AreaOfFocus />
  <Display />
      <Vision2 />
      <CoreValues />
      <Counter />
      <Partners />
    </div>
  );
};
export default Home;
