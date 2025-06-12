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
import { Helmet } from "react-helmet";

const metaTitle = "Smallest Library in Africa | Empowering Communities Through Education";
const metaDescription = "Welcome to the Smallest Library in Africa Initiative. Discover our mission, vision, and impact as we empower communities through education, literacy, and sustainable development.";
const metaUrl = "https://smallestlibraryinafrica.org/";
const metaImage = "https://smallestlibraryinafrica.org/images/hero-cover.jpg"; // Replace with your actual image

const Home = () => {
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
