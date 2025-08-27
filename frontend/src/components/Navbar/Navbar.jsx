import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { IoPersonCircle } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          {isOpen && (
            <span
              className="material-symbols-outlined menu close"
              onClick={toggleMenu}
            >
              close
            </span>
          )}
          <ul className="nav-links" ref={dropdownRef}>
            <li className="links">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                HOME
              </NavLink>
            </li>

            {/* ABOUT US DROPDOWN */}
            <li
              className={`links dropdown-parent ${openDropdown === "about" ? "open" : ""}`}
            >
              <span className="link" onClick={() => toggleDropdown("about")}>
                ABOUT US
              </span>
              <div className="dropdown ">
                <div className="dropdown-content">
                 <div className="data">
                   <h2>About us</h2>
                  <p>
                    The Smallest Library In Africa Initiative began as an
                    open-air library in Mugure slums, founded by Cyril Peter
                    Otieno. The library operated five days a week from 5:30 pm
                    to 7:30 pm, closing during the short and long rainy seasons.
                  </p>
                 </div>
                </div>
                <div className="vertical-line"></div>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <NavLink
                        to="/about/our-story"
                        onClick={() => setIsOpen(false)}
                      >
                        Story
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about/board-of-directors"
                        onClick={() => setIsOpen(false)}
                      >
                        Board
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about/team"
                        onClick={() => setIsOpen(false)}
                      >
                        Team
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content">
                  <img src="/assets/AboutUs.png" alt="About Us" />
                </div>
              </div>
            </li>

            {/* CONTACT */}
            <li className="links">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                CONTACT US
              </NavLink>
            </li>

            {/* OUR WORK DROPDOWN */}
          {/* OUR WORK DROPDOWN */}
<li
  className={`links dropdown-parent ${openDropdown === "work" ? "open" : ""}`}
>
  <span className="link" onClick={() => toggleDropdown("work")}>
    OUR WORK
  </span>
  <div className="dropdown">
    {/* Column 1: Title & description */}
    <div className="dropdown-content">
     <div className="data">
       <h2>Our Work</h2>
      <p>
        We focus on empowering communities through education, nutrition, health,
        and mentorship programs designed to create lasting impact.
      </p>
     </div>
    </div>

    {/* Vertical separator */}
    <div className="vertical-line"></div>

    {/* Column 2: Links */}
    <div className="dropdown-content">
      <ul>
        <h2>Approach</h2>
        <li>
          <NavLink
            to="/approach/education"
            onClick={() => setIsOpen(false)}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/approach/nutrition"
            onClick={() => setIsOpen(false)}
          >
            Nutrition & Health
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/approach/mentorship"
            onClick={() => setIsOpen(false)}
          >
            Mentorship
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Column 3: Image */}
    <div className="dropdown-content">
      <img src={assets.Nutrition2} alt="Our Work" />
    </div>
  </div>
</li>



            {/* NEWS */}
            <li className="links">
              <NavLink
                to="/news"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                NEWS
              </NavLink>
            </li>

            {/* REGISTER */}
            <li className="links">
              <NavLink
                to="/register"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "link active-link register-icon"
                    : "link register-icon"
                }
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
