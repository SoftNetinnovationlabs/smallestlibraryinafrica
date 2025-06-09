import React from "react";
import "./Board.css";
import { assets } from "../../../../assets/assets";

const boardMembers = [
  {
    name: "Jane Mwangi",
    title: "Chairperson",
    image: assets.board, // Add this image to your assets
    story: "Jane is a passionate advocate for education and has led several community initiatives focused on youth empowerment. Her leadership ensures the library’s vision is realized."
  },
  {
    name: "Samuel Otieno",
    title: "Treasurer",
    image: assets.board2, // Add this image to your assets
    story: "Samuel brings over 15 years of experience in finance and non-profit management. He is dedicated to ensuring transparency and accountability in all our operations."
  },

  // Add more members as needed
];

const Board = () => (
  <div className="board-section">
    <h1 className="board-title">Board of Directors</h1>
    <div className="board-grid">
      {boardMembers.map((member, idx) => (
        <div className="board-card" key={idx}>
          <div className="board-img-wrapper">
            <img src={member.image} alt={member.name} />
          </div>
          <h3>{member.name}</h3>
          <h5>{member.title}</h5>
          <p className="board-story">{member.story}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Board;