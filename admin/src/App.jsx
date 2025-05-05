import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './Pages/Dashboard/DashboardLayout';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Profile from './Pages/Dashboard/Profile';
import NewsLetterSender from './Pages/Dashboard/NewsLetterSender';
import Auth from './Auth/auth';
import RegisterAdmin from './Auth/RegisterAdmin';
import ProtectedRoute from './Auth/ProtectedRoute';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/register-admin" element={<RegisterAdmin />} />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sendnewsletters" element={<NewsLetterSender />} />
      </Route>
    </Routes>
  );
};

export default App;
