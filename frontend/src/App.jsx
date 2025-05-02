import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import './App.css';

const App = () => {
  const location = useLocation();

  const hideLayoutPaths = ['/register'];

  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="App">
      {!hideLayout && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-work' element={<h1>Our work under development</h1>} />
        <Route path='/our-impact' element={<h1>Our impact under development</h1>} />
        <Route path='/register' element={<Auth />} />
        <Route path='/dashboard' element={<h1>404</h1>} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
