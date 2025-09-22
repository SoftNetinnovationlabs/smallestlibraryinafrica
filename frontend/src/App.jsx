import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import VolunteerDetails from './components/VolunteerDetails/VolunteerDetails'; 
import VolunteerExperience from './components/VolunteerExperience/VolunteerExperience';
import VolunteerConsent from './components/VolunteerConsent/VolunteerConsent';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome.jsx';
import Profile from './Pages/Dashboard/Profile';
import Newsletters from './Pages/Dashboard/Newsletters.jsx';
import Auth from './components/Auth/Auth';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NewsList from './Pages/News/_NewsLayouts/NewsList/NewsList';
import NewsDetails from './Pages/News/_NewsLayouts/NewsDetails/NewsDetails';
import Founder from './Pages/About/Founder/Founder';
import OurWork from './Pages/OurWork/OurWork';
import KeepAlive from './Pages/About/keepAlive.jsx';
import Spinner from './components/Spinner';
import Contact from './Pages/Contact/Contact';
import Donate from './Pages/Donate/Donate';
import Board from './Pages/About/Board/Board';
import ContactSupport from './Pages/Contact/ContactSupport'; 
import './App.css';
import Story from './Pages/About/_Layouts/Story/Story.jsx';
import { Education, Nutrition } from './Pages/OurWork/_Layouts/Approach/ApproachItem.jsx';
import BoardMembers from './Pages/About/Board/BoardMembers/BoardMembers.jsx';
import InternetScholarshipPage from './Pages/InternetScholarshiPage/internetScholarshipPage.jsx';
import WashFeedingProgramPage from './Pages/washFeedingProgramPage/washFeedingProgramPage.jsx';
import YouthDigitalSpaceProgram from './Pages/Youths/YouthsDigitalSpace.jsx';
import ResilientLivelihood from './Pages/ResilientLivelihood/ResilientLivelihood.jsx'
// 🔐 Set to false to block the site
const hasPaid = false;

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [location]);

  const hideLayoutPaths = [
    '/register',
    '/volunteer-details',
    '/volunteer-experience',
    '/volunteer-consent'
  ];
  const hideLayout =
    hideLayoutPaths.includes(location.pathname) ||
    location.pathname.startsWith('/dashboard');

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {!hasPaid ? (
            <ContactSupport />
          ) : (
            <>
              {!hideLayout && <Navbar />}
              <KeepAlive />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/about/founder' element={<Founder />} />
                {/* <Route path='/about/board-of-directors' element={<Board />} /> */}
                <Route path='/our-work' element={<OurWork />} />
                <Route path='/about/our-story' element={<Story />} />
                <Route path='/approach/education' element={<Education/>} />
                <Route path='/approach/nutrition' element={<Nutrition />} />
                <Route path='/approach/resilient-livelihood' element={<ResilientLivelihood />} />    
                <Route path='/about/board-of-directors' element={<BoardMembers />} />
            <Route path="/about/board/:id" element={<Board />} />
                <Route path='/programs/internet-scholarship' element={<InternetScholarshipPage />} />
                <Route path='/programs/smallest-library' element={<WashFeedingProgramPage />} />
                <Route path='/programs/youth-digital-space' element={<YouthDigitalSpaceProgram />} />
                <Route path='/our-impact' element={<h1>Our impact under development</h1>} />
                <Route path='/register' element={<Auth />} />
                <Route path='/volunteer-details' element={<VolunteerDetails />} />
                <Route path='/volunteer-experience' element={<VolunteerExperience />} />
                <Route path='/volunteer-consent' element={<VolunteerConsent />} />
                <Route path='/news' element={<NewsList />} />
                <Route path='/news/:id' element={<NewsDetails />} />
                <Route path='/dashboard' element={<Dashboard />}>
                  <Route index element={<DashboardHome />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='newsletters' element={<Newsletters />} />
                </Route>
              </Routes>
              {!hideLayout && <Footer />}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
