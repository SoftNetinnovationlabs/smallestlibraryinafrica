import React from 'react'
import Navbar from './components/Navbar/Navbar'
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
          <Route path='/about' element={<h1>About</h1>}/>
          <Route path='/contact' element={<h1>Contact</h1>}/> 
          <Route path='/login' element={<h1>Login</h1>}/>
          <Route path='/register' element={<h1>Register</h1>}/>
          <Route path='/dashboard' element={<h1>Dashboard</h1>}/>
        </Routes>
        </div>
    </>
  )
}

export default App
