import React from 'react';
import SideBar from './SideBar/SideBar';
import Navigation from './Navigation/Navigation';
import './DashboardLayout.css'
const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='main-area'>
        <Navigation />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
