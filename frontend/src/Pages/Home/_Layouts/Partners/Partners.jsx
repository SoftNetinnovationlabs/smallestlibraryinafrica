import React from "react";
import Marquee from "react-fast-marquee";
import "./Partners.css";
import { assets } from "../../../../assets/assets";
const Partners = () => {
  const logos = [
    assets.softNetLogo,
    assets.Vayacom,
    assets.t4b,
    assets.safaricom,
    assets.Vayacom,
    assets.t4b,
    assets.softNetLogo,
    assets.Vayacom,
    assets.safaricom,






   
  ];

  return (
    <div className="trusted-container">
      <h1>Our Partners</h1>      
      <Marquee speed={90} gradient={false}>
        {logos.map((logo, index) => (
          <img
            key={index}
            className="logo"
            src={logo}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;