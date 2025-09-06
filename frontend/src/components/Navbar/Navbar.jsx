import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { IoPersonCircle } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "about", "work", "programs" or null

  const dropdownRefs = useRef({}); // ref for each dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null); // close all dropdowns when menu toggles
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      for (let key in dropdownRefs.current) {
        if (dropdownRefs.current[key] && !dropdownRefs.current[key].contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header_container">
        {/* Logo */}
        <div className="logo_2">
          <NavLink to="/">
            <img src={assets.bgRemovedLogo} alt="Logo" />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          {/* Mobile close button */}
          {isOpen && (
            <span className="material-symbols-outlined menu close" onClick={toggleMenu}>
              close
            </span>
          )}

          <ul className="nav-links">
            {/* HOME */}
            <li className="links">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "link active-link" : "link")}
              >
                HOME
              </NavLink>
            </li>

            {/* ABOUT US */}
            <li
              className={`links dropdown-parent ${openDropdown === "about" ? "open" : ""}`}
              ref={(el) => (dropdownRefs.current["about"] = el)}
            >
              <span className="link" onClick={() => toggleDropdown("about")}>ABOUT US</span>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div className="data">
                    <h2>About us</h2>
                    <p>
                      The Smallest Library In Africa Initiative began as an open-air library in Mugure slums, founded by Cyril Peter Otieno.
                      The library operated five days a week from 5:30 pm to 7:30 pm, closing during the short and long rainy seasons.
                    </p>
                  </div>
                </div>
                <div className="vertical-line"></div>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <NavLink to="/about/our-story" onClick={() => setIsOpen(false)}>Story</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/board-of-directors" onClick={() => setIsOpen(false)}>Board</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/team" onClick={() => setIsOpen(false)}>Team</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content">
                  <img src={assets.aboutBanner} alt="About Us" />
                </div>
              </div>
            </li>

            {/* OUR WORK */}
            <li
              className={`links dropdown-parent ${openDropdown === "work" ? "open" : ""}`}
              ref={(el) => (dropdownRefs.current["work"] = el)}
            >
              <span className="link" onClick={() => toggleDropdown("work")}>OUR WORK</span>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div className="data">
                    <h2>Our Work</h2>
                    <p>
                      We focus on empowering communities through education, nutrition, health,
                      and mentorship programs designed to create lasting impact.
                    </p>
                  </div>
                </div>
                <div className="vertical-line"></div>
                <div className="dropdown-content">
                  <ul>
                    <h2>Approach</h2>
                    <li>
                      <NavLink to="/approach/education" onClick={() => setIsOpen(false)}>Education</NavLink>
                    </li>
                    <li>
                      <NavLink to="/approach/nutrition" onClick={() => setIsOpen(false)}>Nutrition & Health</NavLink>
                    </li>
                    <li>
                      <NavLink to="/approach/resilient-livelihood" onClick={() => setIsOpen(false)}>Resilient Livelihood</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content">
                  <img src={assets.Nutrition2} alt="Our Work" />
                </div>
              </div>
            </li>

            {/* OUR PROGRAMS */}
            <li
              className={`links dropdown-parent ${openDropdown === "programs" ? "open" : ""}`}
              ref={(el) => (dropdownRefs.current["programs"] = el)}
            >
              <span className="link" onClick={() => toggleDropdown("programs")}>OUR PROGRAMS</span>
              <div className="dropdown">
                <div className="dropdown-content">
                  <div className="data">
                    <h2>Our Programs</h2>
                    <p>We run initiatives like Youth Digital Space, Internet for Scholarship, and Smallest Library WASH & Feeding.</p>
                  </div>
                </div>
                <div className="vertical-line"></div>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <NavLink to="/programs/youth-digital-space" onClick={() => setIsOpen(false)}>Youth Digital Space</NavLink>
                    </li>
                    <li>
                      <NavLink to="/programs/internet-scholarship" onClick={() => setIsOpen(false)}>Internet for Scholarship</NavLink>
                    </li>
                    <li>
                      <NavLink to="/programs/smallest-library" onClick={() => setIsOpen(false)}>Smallest Library WASH & Feeding</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content">
                  <img src={assets.digitalSpace} alt="Our Programs" />
                </div>
              </div>
            </li>

            {/* CONTACT */}
            <li className="links">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "link active-link" : "link")}
              >
                CONTACT US
              </NavLink>
            </li>

            {/* NEWS */}
            <li className="links">
              <NavLink
                to="/news"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "link active-link" : "link")}
              >
                NEWS
              </NavLink>
            </li>

            {/* REGISTER */}
            <li className="links">
              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "link active-link register-icon" : "link register-icon")}
              >
                <IoPersonCircle className="register-icon" />
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Donate Button */}
        <NavLink to="/donate" className="btn nav_btn">
          DONATE
        </NavLink>

        {/* Mobile menu icon */}
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
