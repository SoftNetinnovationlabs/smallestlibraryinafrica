import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <h1 className="page-title">Dashboard</h1>
      <div className="nav-actions">
        <span className="admin-name">Welcome, Admin</span>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Navigation;
