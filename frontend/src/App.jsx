import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VolunteerDetails from './components/VolunteerDetails/VolunteerDetails'; 
import VolunteerExperience from './components/VolunteerExperience/VolunteerExperience';
import VolunteerConsent from './components/VolunteerConsent/VolunteerConsent';
import Dashboard from './Pages/Dashboard/dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome.jsx';
import Profile from './Pages/Dashboard/Profile';
import Newsletters from './Pages/Dashboard/Newsletters.jsx';
import Auth from './components/Auth/Auth';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import './App.css';

const App = () => {
  const location = useLocation();

  const hideLayoutPaths = ['/register', "/volunteer-details", '/volunteer-experience', '/volunteer-consent'];

  const hideLayout = hideLayoutPaths.includes(location.pathname) || location.pathname.startsWith("/dashboard");

  return (
    <div className="App">
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-work' element={<h1>Our work under development</h1>} />
        <Route path='/our-impact' element={<h1>Our impact under development</h1>} />
        <Route path='/register' element={<Auth />} />
        <Route path="/volunteer-details" element={<VolunteerDetails />} />
        <Route path="/volunteer-experience" element={<VolunteerExperience />} />
        <Route path="/volunteer-consent" element={<VolunteerConsent />} />

        {/* Dashboard with nested routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path='profile' element={<Profile />} />
          <Route path='newsletters' element={<Newsletters />} />
        </Route>
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
