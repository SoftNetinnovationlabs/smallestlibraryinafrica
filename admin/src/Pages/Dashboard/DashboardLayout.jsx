import React from 'react';
import SideBar from './SideBar/SideBar';
import {Outlet} from 'react-router-dom'
import Navigation from './Navigation/Navigation';
import './DashboardLayout.css'
const DashboardLayout = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='main-area'>
        <Navigation />
        <Outlet/>
      </div>
    </div>
  );
};

export default DashboardLayout;
