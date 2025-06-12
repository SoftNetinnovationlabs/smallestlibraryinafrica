import React from 'react'
import StructHero from './_struct/_structHero/_structHero'
import { Helmet } from "react-helmet";

const metaTitle = "Founder | Smallest Library in Africa";
const metaDescription = "Meet Cyril Peter Otieno, the visionary founder of the Smallest Library in Africa Initiative. Discover his story, mission, and dedication to empowering communities through education.";
const metaUrl = "https://smallestlibraryinafrica.org/about/founder";
const metaImage = "https://smallestlibraryinafrica.org/images/founder-cover.jpg"; // Replace with your actual image

const Founder = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
      <StructHero />
      {/* <Info/> */}
    </div>
  )
}

export default Founder