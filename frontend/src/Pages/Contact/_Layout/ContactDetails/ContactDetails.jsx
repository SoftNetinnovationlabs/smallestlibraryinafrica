import React from 'react';
import { FaPhone, FaLocationArrow, FaEnvelope } from 'react-icons/fa';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className='details'>
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
            <p>smallest@smallestlibraryinafrica.com</p>
            <small>Send us your questions anytime</small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
