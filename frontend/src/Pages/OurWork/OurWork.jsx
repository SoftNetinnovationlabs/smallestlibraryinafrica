import React from 'react'
import HeroWork from './_Layouts/HeroWork/HeroWork'
import Approach from './_Layouts/Approach/Approach'
import Programs from './_Layouts/Programs/Programs'
import {assets} from '../../assets/assets'
// Place this inside your OurWork component, preferably at the top
import { Helmet } from 'react-helmet';
const metaTitle = "Our Work | Smallest Library in Africa";
const metaDescription = "Discover how the Smallest Library in Africa Initiative empowers communities through education, innovative programs, and sustainable development. Learn about our approach, impact, and ongoing projects.";
const metaUrl = "https://smallestlibraryinafrica.org"; // Replace with your actual URL
const metaImage = `https://smallestlibraryinafrica.org/${assets.childrenModel}` // Replace with your actual image

const OurWork = () => {
    return (
       <>
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
        <HeroWork/>
        <Approach />
        <Programs />
       </>
    )
}
export default OurWork