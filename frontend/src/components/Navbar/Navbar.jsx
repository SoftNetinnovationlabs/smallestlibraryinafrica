import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="logo">logo</div>
          <nav className="navbar">
            <ul className="nav-links">
              <li className="links">
                <Link to="/" className="link">
                  HOME
                </Link>
              </li>
              <li className="links">
                <Link to="/about" className="link">
                  ABOUT US
                </Link>
              </li>
              <li className="links">
                <Link to="/our-work" className="link">
                  OUR WORK
                </Link>
              </li>
              <li className="links">
                <Link to="/our-impact" className="link">
                  OUR IMPACT
                </Link>
              </li>
              <li className="links">
                <Link to="/register" className="link">
                  GET INVOLVED
                </Link>
              </li>
            </ul>
          </nav>
          <Link to='/donate' className="btn">DONATE</Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
