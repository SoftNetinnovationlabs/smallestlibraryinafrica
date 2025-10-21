import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import boardMembers from '../BoardData';
import './BoardMembers.css';

const BoardMembers = () => {
  return (
    <>
      <div className="board-hero">
        <div className="board-hero__content">
          <h1 className="board-hero__title">Our Board of Directors</h1>
          <p className="board-hero__subtitle">Leadership driving our vision forward</p>
        </div>
        <div className="board-hero__gradient"></div>
      </div>

      <section className="board-section">
        <div className="board-container">
          <div className="board-grid">
            {boardMembers.map((member) => (
              <div key={member.id} className="board-card">
                <div className="board-card__image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="board-card__image"
                  />
                  <div className="board-card__overlay">
                    <div className="board-card__info">
                      <span className="board-card__title">{member.title}</span>
                      <h3 className="board-card__name">{member.name}</h3>
                    </div>
                    <Link
                      to={`/about/board/${member.id}`}
                      className="board-card__link"
                    >
                      <span>Read Story</span>
                      <FaArrowRight className="board-card__icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardMembers;