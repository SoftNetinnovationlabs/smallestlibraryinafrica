import React from 'react';
import Hero from './_Layouts/Hero/Hero';
import Story from './_Layouts/Story/Story';
import Embedded from './_Layouts/embedded/embedded';
import { Outlet, useLocation } from 'react-router-dom';

const About = () => {

  return (
    <div>
      <Hero />
 
          <Story />
          <Embedded />
      <Outlet />
    </div>
  );
};

export default About;
