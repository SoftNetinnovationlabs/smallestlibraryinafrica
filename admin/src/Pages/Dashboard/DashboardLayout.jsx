import React, { useState, useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className={`main-area ${isSidebarOpen && !isMobile ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Navigation />
        <main className='main-content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;