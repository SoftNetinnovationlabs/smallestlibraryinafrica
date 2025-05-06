import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header_container">
        <div className="logo_2"><Link  to={'/'}> SmLibA</Link></div>

        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          {isOpen && (
            <span className="material-symbols-outlined menu close" onClick={toggleMenu}>
              close
            </span>
          )}
          <ul className="nav-links">
            <li className="links"><Link to="/" className="link" onClick={() => setIsOpen(false)}>HOME</Link></li>
            <li className="links"><Link to="/about" className="link" onClick={() => setIsOpen(false)}>ABOUT US</Link></li>
            <li className="links"><Link to="/our-work" className="link" onClick={() => setIsOpen(false)}>OUR WORK</Link></li>
            <li className="links"><Link to="/our-impact" className="link" onClick={() => setIsOpen(false)}>OUR IMPACT</Link></li>
            <li className="links"><Link to="/register" className="link" onClick={() => setIsOpen(false)}>GET INVOLVED</Link></li>
            <li className="links"><Link to="/news" className="link" onClick={() => setIsOpen(false)}>NEWS</Link></li>
          </ul>
        </nav>

        <Link to="/donate" className="btn nav_btn">DONATE</Link>

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
