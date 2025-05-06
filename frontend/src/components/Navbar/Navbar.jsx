import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header_container">
        <div className="logo_2"><NavLink to={'/'}> SmLibA</NavLink></div>

        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          {isOpen && (
            <span className="material-symbols-outlined menu close" onClick={toggleMenu}>
              close
            </span>
          )}
          <ul className="nav-links">
            <li className="links">
              <NavLink 
                to="/" 
                className="link" 
                onClick={() => setIsOpen(false)} 
                activeClassName="active-link" // Add activeClassName
              >
                HOME
              </NavLink>
            </li>
            <li className="links">
              <NavLink 
                to="/about" 
                className="link" 
                onClick={() => setIsOpen(false)} 
                activeClassName="active-link"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="links">
              <NavLink 
                to="/our-work" 
                className="link" 
                onClick={() => setIsOpen(false)} 
                activeClassName="active-link"
              >
                OUR WORK
              </NavLink>
            </li>
            <li className="links">
              <NavLink 
                to="/our-impact" 
                className="link" 
                onClick={() => setIsOpen(false)} 
                activeClassName="active-link"
              >
                OUR IMPACT
              </NavLink>
            </li>
            <li className="links">
              <NavLink 
                to="/register" 
                className="link" 
                onClick={() => setIsOpen(false)} 
                activeClassName="active-link"
              >
                GET INVOLVED
              </NavLink>
            </li>
            <li className="links">
              <NavLink 
                to="/news" 
                className="link" 
                onClick={() => setIsOpen(false)} 
                activeClassName="active-link"
              >
                NEWS
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink to="/donate" className="btn nav_btn">DONATE</NavLink>

        {!isOpen && (
          <span className="material-symbols-outlined menu" onClick={toggleMenu}>
            menu
          </span>
        )}
      </div>
    </header>
  );
}

export default Navbar;
