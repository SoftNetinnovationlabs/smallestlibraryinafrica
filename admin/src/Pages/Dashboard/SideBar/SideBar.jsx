import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // optional: for styling

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link" end>
          Dashboard Home
        </NavLink>
        <NavLink to="/profile" className="sidebar-link">
          Profile
        </NavLink>
        <NavLink to="/sendNewsletters" className="sidebar-link">
          Send Newsletters
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
