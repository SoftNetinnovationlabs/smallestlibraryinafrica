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
    </div>
  );
}
export default App;