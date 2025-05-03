import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './_subComponents/Sidebar/Sidebar'
import Navigation from './_subComponents/Navigation/Navigation'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Navigation />
        <main className="main">
          <Outlet /> {/* Nested route content goes here */}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
