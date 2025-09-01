import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import boardMembers from "../BoardData";
import './BoardMembers.css'
const BoardMembers = () => {
  return (
    <>
   <div className="board-members">
        <h1 className="improved-team-title">Our Board of Directors</h1>

       </div>
      <section className="about__container">
        <div className="flex-container">
          {boardMembers.map((member) => (
            <div key={member.id} className="founder_people">
              <img src={member.image} alt={member.name} />
              <div className="overlay_data">
                <p className="overlay-data_text">
                  {member.title}: {member.name}
                </p>
                <div className="overlay-data_btns">
                  <Link
                    to={`/about/board/${member.id}`}
                    className="overlay-data_link"
                  >
                    Story <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

   </>
  )
}

export default BoardMembers