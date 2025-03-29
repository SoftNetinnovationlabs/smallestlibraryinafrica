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
                <a href="HOME" className="link">
                  HOME
                </a>
              </li>
              <li className="links">
                <a href="ABOUT US" className="link">
                  ABOUT US
                </a>
              </li>
              <li className="links">
                <a href="OUR WORK" className="link">
                  OUR WORK
                </a>
              </li>
              <li className="links">
                <a href="OUR IMPACT" className="link">
                  OUR IMPACT
                </a>
              </li>
              <li className="links">
                <a href="GET INVOLVED" className="link">
                  GET INVOLVED
                </a>
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
