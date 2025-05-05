import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import DashboardLayout from './Pages/Dashboard/DashboardLayout'
import Profile from './Pages/Dashboard/Profile';
import NewsLetterSender from './Pages/Dashboard/NewsLetterSender';
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" 
        element={<DashboardLayout>
          <DashboardHome/>
          </DashboardLayout>
          }>
        </Route>
        <Route path="/profile" 
        element={<DashboardLayout>
          <Profile />
          </DashboardLayout>
          } />
        <Route path="/sendNewsletters" element={

<DashboardLayout>
<NewsLetterSender />
</DashboardLayout>
        }
          />
      </Routes>

    </div>
  );
}
export default App;