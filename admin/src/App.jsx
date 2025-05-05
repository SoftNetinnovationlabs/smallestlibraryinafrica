import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './Pages/Dashboard/DashboardLayout';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Profile from './Pages/Dashboard/Profile';
import NewsLetterSender from './Pages/Dashboard/NewsLetterSender';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sendNewsletters" element={<NewsLetterSender />} />
      </Route>
    </Routes>
  );
};

export default App;
