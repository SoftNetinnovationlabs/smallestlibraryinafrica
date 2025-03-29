import React from 'react'

function Navbar() {

  return (
    <>
  <header>
    <div className="header_container">
    <div className="logo">smallestLibraryInAfrica</div>
    <nav className="navbar">
      <ul className="nav-links">
        <li className="links"><a href="HOME" className="link">HOME</a></li>
        <li className="links"><a href="ABOUT US" className="link">ABOUT US</a></li>
        <li className="links"><a href="OUR WORK" className="link">OUR WORK</a></li>
        <li className="links"><a href="OUR IMPACT" className="link">OUR IMPACT</a></li>
        <li className="links"><a href="GET INVOLVED" className="link">GET INVOLVED</a></li>
      </ul>
    </nav>
    <div className="donate">DONATE</div>
    </div>
  </header>
    </>
  )
}

export default Navbar
