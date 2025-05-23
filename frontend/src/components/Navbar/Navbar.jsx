import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoPersonCircle } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header_container">
        <div className="logo_2">
          <NavLink to="/">SmLibA</NavLink>
        </div>

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
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "link active-link" : "link"}
              >
                HOME
              </NavLink>
            </li>
            <li className="links">
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "link active-link" : "link"}
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="links">
              <NavLink
                to="/our-work"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "link active-link" : "link"}
              >
                OUR WORK
              </NavLink>
            </li>
            <li className="links">
              {/* <NavLink
                to="/our-impact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "link active-link" : "link"}
              >
                OUR IMPACT
              </NavLink> */}
            </li>
            <li className="links">
              <NavLink
                to="/news"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "link active-link" : "link"}
              >
                NEWS
              </NavLink>
            </li>
            <li className="links">
              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => isActive ? "link active-link register-icon" : "link register-icon"}
              >
                <IoPersonCircle className="register-icon" />
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
