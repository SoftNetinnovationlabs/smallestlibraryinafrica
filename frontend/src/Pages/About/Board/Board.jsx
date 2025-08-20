// src/pages/Board.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import boardMembers from "./BoardData";
import './Board.css'
const Board = () => {
  const { id } = useParams();
  const member = boardMembers.find((m) => String(m.id) === String(id));

  if (!member) {
    return <h2>Member not found</h2>;
  }

  return (
    <section className="board">
      <h2>{member.name}</h2>
      <div className="board-card">
       <div className="side-body">
        <div className="img">
           <img src={member.image} alt={member.name} />
        </div>
       </div>
       <div className="side-body">
         <h3>{member.title}</h3>
        <p>{member.story}</p>
     <Link to={"/about#board"}>Back to Board</Link>
       </div>
      </div>
    </section>
  );
};

export default Board;
