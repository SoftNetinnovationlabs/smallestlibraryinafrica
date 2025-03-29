import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import './App.css'

const App = () => {

  return (
    <>
      <div className="App">
        <Navbar/> 
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<h1>about under development</h1>}/>
          <Route path='/our-work' element={<h1>our work under development</h1>}/> 
          <Route path='/our-impact' element={<h1>our impact under development</h1>}/>
          <Route path='/register' element={<h1>registration under construction</h1>}/>
          <Route path='/dashboard' element={<h1>404</h1>}/>
        </Routes>
        <Footer/>
        </div>
    </>
  )
}

export default App
