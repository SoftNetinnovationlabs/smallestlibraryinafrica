import React from 'react';
import Hero from './_Layouts/Hero/Hero';
import Story from './_Layouts/Story/Story';
import Embedded from './_Layouts/embedded/embedded';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet";

const metaTitle = "About Us | Smallest Library in Africa";
const metaDescription = "Learn about the mission, story, and impact of the Smallest Library in Africa Initiative. Meet our team and discover how we empower communities through education and innovation.";
const metaUrl = "https://smallestlibraryinafrica.org/about";
const metaImage = "https://smallestlibraryinafrica.org/images/about-cover.jpg"; // Replace with your actual image

const About = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
      <Hero />
      <Story />
      <Embedded />
      <Outlet />
    </div>
  );
};

export default About;
