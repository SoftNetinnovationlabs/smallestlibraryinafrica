// src/pages/Board.jsx
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import boardMembers from "./BoardData";
import './Board.css';

const Board = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = boardMembers.find((m) => String(m.id) === String(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <section className="member-detail member-notfound">
        <div className="notfound-wrapper">
          <h2>Board Member Not Found</h2>
          <p>The board member you're looking for doesn't exist.</p>
          <Link to="/about/board-of-directors" className="return-link">
            <ArrowLeft size={20} />
            Back to Board
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="member-detail">
      {/* Hero Header */}
      <div className="member-header">
        <div className="member-header-content">
          <Link to="/about/board-of-directors" className="inline-back-link">
            <ArrowLeft size={20} />
            Back to Board
          </Link>
          <h1 className="member-name">{member.name}</h1>
          <p className="member-position">{member.title}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="member-content-wrapper">
        <div className="member-profile-card">
          {/* Image Section */}
          <div className="profile-image-section">
            <div className="profile-image-container">
              <img 
                src={member.image} 
                alt={member.name}
                className="profile-image"
              />
            </div>
            <div className="profile-title-badge">
              <span className="title-text">{member.title}</span>
            </div>
          </div>

          {/* Story Section */}
          <div className="profile-bio-section">
            <div className="bio-heading">
              <h2>Biography</h2>
              <div className="bio-underline"></div>
            </div>
            <div className="bio-text-wrapper">
              <p>{member.story}</p>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="member-navigation">
          <Link to="/about/board-of-directors" className="primary-action-btn">
            <ArrowLeft size={20} />
            View All Board Members
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Board;