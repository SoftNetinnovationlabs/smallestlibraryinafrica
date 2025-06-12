import React from 'react';
import { FaPhone, FaLocationArrow, FaEnvelope } from 'react-icons/fa';
import './ContactDetails.css';
import { Helmet } from "react-helmet";

const metaTitle = "Contact Us | Smallest Library in Africa";
const metaDescription = "Get in touch with the Smallest Library in Africa Initiative. Call, visit, or email us for support, questions, or partnership opportunities.";
const metaUrl = "https://smallestlibraryinafrica.org/contact";
const metaImage = "https://smallestlibraryinafrica.org/images/contact-cover.jpg"; // Replace with your actual image

const ContactDetails = () => {
  return (
    <div className='details'>
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
      <section className="wrapper-contact">
        <div className="contact-content">
          <div className="icon">
            <FaPhone />
          </div>
          <div className="description">
            <p>+254 793 888 552</p>
            <small>Call us anytime for support</small>
          </div>
        </div>

        <div className="contact-content">
          <div className="icon">
            <FaLocationArrow />
          </div>
          <div className="description">
            <p>00618 Mugure Ruraraka, Nairobi, Kenya</p>
            <small>Visit our office location</small>
          </div>
        </div>

        <div className="contact-content">
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="description">
            <p>smallest@smallestlibraryinafrica.org</p>
            <small>Send us your questions anytime</small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
