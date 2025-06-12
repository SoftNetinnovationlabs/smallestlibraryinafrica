import React from "react";
import "./Board.css";
import { assets } from "../../../assets/assets";
import HeroBoard from "./HeroBoard/HeroBoard";
const boardMembers = [
  {
    name: "Maurine Wambui",
    title: " financial professional ",
    image: assets.board, // Add this image to your assets
    story: `Maureen Wambui is a seasoned financial professional and a passionate community leader with over a decade of experience in financial coaching, nonprofit leadership, and grassroots advocacy. Maureen is deeply committed to advancing youth empowerment, economic equity, and inclusive community development.

Maureen has dedicated her career to guiding immigrants and minority communities in navigating complex financial systems, helping families build sustainable wealth and access economic opportunities. Her leadership is grounded in empathy and service, evident through her hands-on initiatives such organizing community-based financial literacy workshops and partnering with different community organizations to better serve the community. 

She holds a degree in Business and has extensive experience in Finance and Banking within the U.S. Financial System. She has also enhanced her expertise through a range of leadership and civic engagement programs. Her work bridges the gap between policy and people, particularly advocating for youth access to education, entrepreneurship, and empowerment.

“I joined the Advisory Board of The Smallest Library in Africa because I believe access to knowledge is one of the greatest equalizers in society. As someone who has benefited from education and mentorship, I see this initiative as a chance to give back by investing in the minds of future leaders. This library is more than a building—it’s a beacon of hope, a safe space for imagination, and a launchpad for young dreamers across the continent. Being part of this vision allows me to contribute to a legacy of literacy, empowerment, and generational change.”`,
  },
  {
    name: "ANN NGATIA",
    title: " Strategic Growth & Marketing",
    image: assets.Board2, // Add this image to your assets
    story: `Anne W. Ngatia is a seasoned Strategic Business Leader with over 15 years of experience in marketing, advertising, and business development across Sub-Saharan Africa. Currently serving as the Growth and Marketing Lead at Statsspeak, Anne has consistently driven top-line growth, strengthened brand positioning, and led innovative go-to-market strategies for leading organizations including Ogilvy Africa Kenya and Scanad Kenya.

Her expertise spans integrated communications, PR, digital marketing, and commercial best practices—resulting in increased market share, improved pitch-to-win rates, and operational excellence. She is also a dedicated Consultant Course Facilitator at ISA Africa, where she supports aspiring marketers through knowledge transfer and mentorship.

Anne holds a Diploma in Professional Marketing from The Chartered Institute of Marketing, complemented by specialized training in Consumer Neuroscience and Advertising. Beyond her professional pursuits, Anne is passionate about nurturing a reading culture in children and actively advocates for the empowerment of the boy child.

With a global outlook and a deep understanding of local dynamics, Anne brings strategic insight, purpose-driven leadership, and a strong commitment to social impact to the Smallest Library in Africa Initiative board.`,
  },
  {
    name: "Katharine Machon",
    title: " Sustainability & Community Engagement",
    image: assets.Cyril, // Add this image to your assets
    story: `Katharine Machon is the founder and operator of Safari Series, a tented safari camp based in Laikipia, Kenya, where she blends adventure tourism with environmental stewardship. A passionate environmentalist, Katharine believes that every individual has a role to play in combating the climate crisis and is committed to promoting sustainable practices through her work and advocacy.

She holds a degree in History from the University of Leeds in the UK, where she developed a strong appreciation for storytelling, culture, and the transformative power of education. Katharine believes that education, paired with dedication and hard work, is the most reliable path to creating a brighter, more equitable future. A lifelong lover of books, she is especially passionate about promoting literacy and a love for reading among children and youth.

Katharine joined the board of the Smallest Library in Africa Initiative inspired by Cyril’s unwavering passion for his community and vision for change. She brings her environmental insight, entrepreneurial spirit, and deep belief in grassroots impact to support the organization’s mission of empowering young minds through learning.`,
  },
  // Add more members as needed
];

const Board = () => (
  <div className="board-section">
    <HeroBoard />
    <h1 className="board-title">Board of Directors</h1>
    <div className="board-grid">
      {boardMembers.map((member, idx) => (
        <div className="board-card" key={idx}>
          <div className="board-img-wrapper">
            <img src={member.image} alt={member.name} />
          </div>
          <h3>{member.name}</h3>
          <h5>{member.title}</h5>
          <p className="board-story">{member.story.split('\n\n').map((paragraph, idx) =>(
            <p key={idx}>{paragraph}</p>
          ))}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Board;
