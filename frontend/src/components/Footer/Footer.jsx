import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer__section">
          <h2>Smallest Library in Africa</h2>
          <p>Empowering communities through knowledge and access to books.</p>
        </div>

        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul className="footer__links">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/contact">Contact Us</Link></li>
            <li><Link className="link" to="/our-impact">Our Impact</Link></li>
            <li><Link className="link" to="/news">News</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>More</h3>
          <ul className="footer__links">
            <li><Link className="link" to="/">Innovation Center</Link></li>
            <li><Link className="link" to="/register">Get Involved</Link></li>
            <li><Link className="link" to="/about#story">Story</Link></li>
            <li><Link className="link" to="/our-work">Our Work</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Contact Info</h3>
          <ul className="footer__contact">
            <li><FaPhone /><span>+254 793 888 552</span></li>
            <li><FaEnvelope /><span>smallest@smallestlibraryinafrica.com</span></li>
            <li><FaMapMarkerAlt /><span>00618 Mugure Ruraraka, Nairobi, Kenya</span></li>
          </ul>
        </div>

      </div>
      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} Smallest Library in Africa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
