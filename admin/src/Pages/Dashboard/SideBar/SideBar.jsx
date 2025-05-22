import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // optional: for styling

const SideBar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebar" style={{ width: isOpen ? '200px' : '50px' }}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <h2 className="sidebar-title">{isOpen ? 'Admin': "A"}</h2>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link" end>
                {isOpen ? 'Dashboard Home' : 'D'}

        </NavLink>
        <NavLink to="/profile" className="sidebar-link">
        {isOpen ? 'Profile' : 'P'}
        </NavLink>
        <NavLink to="/sendNewsletters" className="sidebar-link">
      {isOpen ? 'Send Newsletters' : 'S'}
        </NavLink>
        <NavLink to="/news" className="sidebar-link">
          {isOpen ? 'News' : 'N'}
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
