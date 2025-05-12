import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {

  return (
    <>
    <footer className='footer'>
      <div className="footer-container">
      <div className='footer__content'>
        <h2>smallest library in Africa</h2>
      </div>
      <div className='footer__content'>
        <h2>Quick Links</h2>
  <ul className='footer__links'>
    <li className='footer__link'><Link className='link' to='/'>Home</Link></li>
    <li className='footer__link'><Link className='link' to='/about'>About</Link></li>
    <li className='footer__link'><Link className='link' to='/contact'>Contact Us</Link></li>
    <li className='footer__link'><Link className='link' to='/our-impact'>Our Impact</Link></li>
    <li className='footer__link'><Link className='link' to='/news'>NEWS</Link></li>
  </ul>
      </div>
      <div className='footer__content'></div>
      <div className='footer__content'>
      <h2>More</h2>
  <ul className='footer__links'>
    <li className='footer__link'><Link className='link' to='/'>Innovation Center</Link></li>
    <li className='footer__link'><Link className='link' to='/register'>Get Involved</Link></li>
    <li className='footer__link'><Link className='link' to='/About#story'>Story</Link></li>
    <li className='footer__link'><Link className='link' to='/our-work'>Our Work</Link></li>
  </ul>
      </div>

      </div>
      <div className="copy">&copy; {new Date().getFullYear()} smallest library in Africa. All rights reserved</div>
    </footer>
    </>
  )
}

export default Footer
