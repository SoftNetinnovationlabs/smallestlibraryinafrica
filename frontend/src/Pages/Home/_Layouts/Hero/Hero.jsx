import { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
      import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
      import {FaXTwitter} from 'react-icons/fa6'
const Hero = () => {
  const DataSet = [
    {
      title: "programs",
      description:
        "Started in 2014 in Mugure slums as an open air library, our objective as a program is to strengthen and create a reading culture among children in low-income communities.",
    },
    {
      title: "Our Approach",
      description:
        "Our approach combines grassroots involvement with community-driven solutions, empowering locals to lead sustainable change.",
    },
    {
      title: "area of focus",
      description:
        "We focus on education, mentorship, and community development through literacy and access to knowledge.",
    },
  ];

  const [activeTitle, setActiveTitle] = useState(DataSet[0].title);

  const handleClick = (title) => {
    setActiveTitle(title);
  };

  const activeItem = DataSet.find((item) => item.title === activeTitle);

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="dynamic_btns">
          {DataSet.map((item, index) => (
            <span style={{cursor: "pointer"}}
              key={index}
              className={`d_btn ${activeTitle === item.title ? "active" : ""}`}
              onClick={() => handleClick(item.title)}
            >
              {item.title}
            </span>
          ))}
        </div>
        <h1 className="hero__title">
          Welcome to the Smallest Library in Africa!
        </h1>
        <p className="hero__description">{activeItem.description}</p>
        <Link to="/about" className="hero__button btn">
          Learn More
        </Link>
      </div>
        

<section className="social-section">
  <div className="socialmedia-links">
    <a href="https://www.facebook.com/share/12M22t7mL97/" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaXTwitter />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
  </div>
</section>


    </div>
  );
};

export default Hero;
