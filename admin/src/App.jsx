import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Profile from './Pages/Dashboard/Profile';
import NewsLetterSender from './Pages/Dashboard/NewsLetterSender';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sendNewsletters" element={<NewsLetterSender />} />
      </Routes>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
}
export default App;