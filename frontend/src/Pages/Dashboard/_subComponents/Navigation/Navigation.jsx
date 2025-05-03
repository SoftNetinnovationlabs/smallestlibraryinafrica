import React from 'react';
import { useAuth } from '../../../../components/Auth/Context/Auth.context';
import './Navigation.css';
const Navigation = () => {
    const { user } = useAuth();
    return (
      <div className="navigation">
        <p style={{ marginLeft: '1rem' }}>👋 Hello, {user?.name || 'User'}</p>
      </div>
    );
  };
  export default Navigation;
  