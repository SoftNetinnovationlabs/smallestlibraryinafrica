import React from "react";
import Marquee from "react-fast-marquee";
import "./Partners.css";
import { assets } from "../../../../assets/assets";
import Title from '../../../../components/UI/Title/Title'
const Partners = () => {
  const logos = [
    assets.softNetLogo,
        assets.PeanutLogo,
    assets.Vayacom,
    assets.t4b,
    assets.safaricom,
    assets.PeanutLogo,
    assets.Vayacom,
    assets.t4b,
    assets.softNetLogo,
    assets.PeanutLogo,
    assets.Vayacom,
    assets.safaricom,






   
  ];

  return (
    <div className="trusted-container">
            <Title text="Partners"/>

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