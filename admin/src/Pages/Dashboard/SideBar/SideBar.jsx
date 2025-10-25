import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  Mail, 
  Newspaper, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import './Sidebar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard Home', short: 'D' },
    { path: '/profile', icon: User, label: 'Profile', short: 'P' },
    { path: '/sendNewsletters', icon: Mail, label: 'Send Newsletters', short: 'S' },
    { path: '/news', icon: Newspaper, label: 'News', short: 'N' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={closeMobileSidebar} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        {/* Toggle Button */}
        <button 
          className="toggle-button" 
          onClick={toggleSidebar}
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isMobile ? (
            isOpen ? <X size={20} /> : <Menu size={20} />
          ) : (
            isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />
          )}
        </button>

        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="admin-badge">
            <User className="admin-icon" size={isOpen ? 24 : 20} />
          </div>
          {isOpen && (
            <div className="admin-text">
              <h2 className="sidebar-title">Admin Panel</h2>
              <p className="sidebar-subtitle">Management Dashboard</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMobileSidebar}
                end={item.path === '/'}
              >
                <Icon className="link-icon" size={20} />
                {isOpen && <span className="link-text">{item.label}</span>}
                {!isOpen && <span className="link-tooltip">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="sidebar-footer">
            <div className="footer-content">
              <p>© 2024 Admin</p>
              <p className="version">v1.0.0</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Toggle Button (Fixed) */}
      {isMobile && !isOpen && (
        <button 
          className="mobile-menu-button"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      )}
    </>
  );
};

export default SideBar;