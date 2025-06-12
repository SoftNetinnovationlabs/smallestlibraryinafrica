import React from 'react'
import DataForm from './_Layout/InputForm/DataForm' 
import ContactDetails from './_Layout/ContactDetails/ContactDetails'
import { Helmet } from "react-helmet";

const metaTitle = "Contact Us | Smallest Library in Africa";
const metaDescription = "Reach out to the Smallest Library in Africa Initiative. Fill out our contact form or use our details to connect for support, questions, or partnership opportunities.";
const metaUrl = "https://smallestlibraryinafrica.org/contact";
const metaImage = "https://smallestlibraryinafrica.org/images/contact-cover.jpg"; // Replace with your actual image

const Contact = () => {
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
      <DataForm/>
      <ContactDetails/>
    </div>
  )
}

export default Contact