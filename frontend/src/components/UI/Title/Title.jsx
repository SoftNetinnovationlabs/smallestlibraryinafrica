import React from 'react';
import './Title.css';

const Title = ({ text, align = 'center', dark = true }) => {
  return (
    <div className={`title ${align} ${dark ? 'dark' : ''}`}>
      <h2 className="value-title">{text}</h2>
      <div className="title-design"></div>
    </div>
  );
};

export default Title;
