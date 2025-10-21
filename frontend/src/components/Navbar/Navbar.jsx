import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { IoPersonCircle } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRefs = useRef({});
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
    // Prevent body scroll when mobile menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    document.body.style.overflow = 'unset';
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click outside dropdowns - improved logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside all dropdown refs
      let isOutside = true;
      
      for (let key in dropdownRefs.current) {
        if (dropdownRefs.current[key] && dropdownRefs.current[key].contains(event.target)) {
          isOutside = false;
          break;
        }
      }
      
      if (isOutside && openDropdown) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        if (isOpen) {
          closeMenu();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Dropdown data structure
  const dropdownData = {
    about: {
      title: "About us",
      description: "The Smallest Library In Africa Initiative began as an open-air library in Mugure slums, founded by Cyril Peter Otieno. The library operated five days a week from 5:30 pm to 7:30 pm, closing during the short and long rainy seasons.",
      links: [
        { label: "Story", path: "/about/our-story" },
        { label: "Board", path: "/about/board-of-directors" },
        { label: "Team", path: "/about/team" }
      ],
      image: assets.aboutBanner,
      imageAlt: "About Us"
    },
    work: {
      title: "Our Work",
      description: "We focus on empowering communities through education, nutrition, health, and mentorship programs designed to create lasting impact.",
      subtitle: "Approach",
      links: [
        { label: "Education", path: "/approach/education" },
        { label: "Nutrition & Health", path: "/approach/nutrition" },
        { label: "Resilient Livelihood", path: "/approach/resilient-livelihood" }
      ],
      image: assets.Nutrition2,
      imageAlt: "Our Work"
    },
    programs: {
      title: "Our Programs",
      description: "We run initiatives like Youth Digital Space, Internet for Scholarship, and Smallest Library WASH & Feeding.",
      links: [
        { label: "Youth Digital Space", path: "/programs/youth-digital-space" },
        { label: "Internet for Scholarship", path: "/programs/internet-scholarship" },
        { label: "Smallest Library WASH & Feeding", path: "/programs/smallest-library" }
      ],
      image: assets.digitalSpace,
      imageAlt: "Our Programs"
    }
  };

  // Reusable Dropdown Component
  const DropdownMenu = ({ type }) => {
    const data = dropdownData[type];
    
    return (
      <div className="dropdown">
        <div className="dropdown-content">
          <div className="data">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="dropdown-content">
          <ul>
            {data.subtitle && <h2>{data.subtitle}</h2>}
            {data.links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown-content">
          <img src={data.image} alt={data.imageAlt} loading="lazy" />
        </div>
      </div>
    );
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header_container">
        {/* Logo */}
        <div className="logo_2">
          <NavLink to="/" onClick={closeMenu} aria-label="Home">
            <img src={assets.bgRemovedLogo} alt="Company Logo" />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav 
          ref={navbarRef}
          className={`navbar ${isOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {/* Mobile close button */}
          {isOpen && (
            <span 
              className="material-symbols-outlined menu close" 
              onClick={toggleMenu}
              role="button"
              aria-label="Close menu"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
            >
              close
            </span>
          )}

          <ul className="nav-links">
            {/* HOME */}
            <li className="links">
              <NavLink
                to="/"
                onClick={closeMenu}
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
              <span 
                className="link" 
                onClick={() => toggleDropdown("about")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleDropdown("about")}
                aria-expanded={openDropdown === "about"}
                aria-haspopup="true"
              >
                ABOUT US
              </span>
              <DropdownMenu type="about" />
            </li>

            {/* OUR WORK */}
            <li
              className={`links dropdown-parent ${openDropdown === "work" ? "open" : ""}`}
              ref={(el) => (dropdownRefs.current["work"] = el)}
            >
              <span 
                className="link" 
                onClick={() => toggleDropdown("work")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleDropdown("work")}
                aria-expanded={openDropdown === "work"}
                aria-haspopup="true"
              >
                OUR WORK
              </span>
              <DropdownMenu type="work" />
            </li>

            {/* OUR PROGRAMS */}
            <li
              className={`links dropdown-parent ${openDropdown === "programs" ? "open" : ""}`}
              ref={(el) => (dropdownRefs.current["programs"] = el)}
            >
              <span 
                className="link" 
                onClick={() => toggleDropdown("programs")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleDropdown("programs")}
                aria-expanded={openDropdown === "programs"}
                aria-haspopup="true"
              >
                OUR PROGRAMS
              </span>
              <DropdownMenu type="programs" />
            </li>

            {/* CONTACT */}
            <li className="links">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "link active-link" : "link")}
              >
                CONTACT US
              </NavLink>
            </li>

            {/* NEWS */}
            <li className="links">
              <NavLink
                to="/news"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "link active-link" : "link")}
              >
                NEWS
              </NavLink>
            </li>

            {/* REGISTER */}
            <li className="links">
              <NavLink
                to="/register"
                onClick={closeMenu}
                className={({ isActive }) => 
                  isActive ? "link active-link" : "link"
                }
                aria-label="Register or Login"
              >
                <IoPersonCircle className="register-icon" />
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Donate Button */}
        <NavLink to="/donate" className="btn nav_btn" onClick={closeMenu}>
          DONATE
        </NavLink>

        {/* Mobile menu icon */}
        {!isOpen && (
          <span 
            className="material-symbols-outlined menu" 
            onClick={toggleMenu}
            role="button"
            aria-label="Open menu"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
          >
            menu
          </span>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="navbar-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Navbar;