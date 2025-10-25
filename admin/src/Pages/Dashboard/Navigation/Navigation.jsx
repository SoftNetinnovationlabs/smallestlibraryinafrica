import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  LogOut, 
  User, 
  Moon, 
  Sun,
  ChevronDown
} from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mock notifications
  const notifications = [
    { id: 1, title: 'New newsletter sent', time: '5 min ago', read: false },
    { id: 2, title: 'News post published', time: '1 hour ago', read: false },
    { id: 3, title: 'Profile updated', time: '2 hours ago', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileMenu(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add actual dark mode implementation here
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      console.log('Logging out...');
      // Implement logout logic
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        {/* Search Bar */}
        <form className="search-container" onSubmit={handleSearch}>
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <kbd className="search-shortcut">Ctrl K</kbd>
        </form>

        {/* Right Side Actions */}
        <div className="nav-actions">
          {/* Dark Mode Toggle */}
          <button 
            className="nav-icon-btn"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <div className="notification-wrapper">
            <button 
              className="nav-icon-btn notification-btn"
              onClick={toggleNotifications}
              title="Notifications"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </button>

            {showNotifications && (
              <div className="dropdown-menu notifications-dropdown">
                <div className="dropdown-header">
                  <h3>Notifications</h3>
                  <button className="mark-read-btn">Mark all as read</button>
                </div>
                <div className="notifications-list">
                  {notifications.map(notif => (
                    <div 
                      key={notif.id} 
                      className={`notification-item ${!notif.read ? 'unread' : ''}`}
                    >
                      <div className="notification-content">
                        <p className="notification-title">{notif.title}</p>
                        <span className="notification-time">{notif.time}</span>
                      </div>
                      {!notif.read && <span className="unread-dot"></span>}
                    </div>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <a href="#" className="view-all-link">View all notifications</a>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button 
            className="nav-icon-btn"
            title="Settings"
          >
            <Settings size={20} />
          </button>

          {/* Profile Menu */}
          <div className="profile-wrapper">
            <button 
              className="profile-btn"
              onClick={toggleProfileMenu}
            >
              <div className="profile-avatar">
                <User size={18} />
              </div>
              <div className="profile-info">
                <span className="profile-name">Admin User</span>
                <span className="profile-role">Administrator</span>
              </div>
              <ChevronDown 
                size={16} 
                className={`chevron-icon ${showProfileMenu ? 'rotated' : ''}`}
              />
            </button>

            {showProfileMenu && (
              <div className="dropdown-menu profile-dropdown">
                <div className="dropdown-header profile-header">
                  <div className="profile-avatar large">
                    <User size={24} />
                  </div>
                  <div>
                    <h3>Admin User</h3>
                    <p>admin@example.com</p>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <User size={16} />
                  My Profile
                </a>
                <a href="#" className="dropdown-item">
                  <Settings size={16} />
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout-item" onClick={handleLogout}>
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;