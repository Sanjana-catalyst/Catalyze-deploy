import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import FounderPerDet1 from './pages/FounPerDet1';
import FounPerDet2 from './pages/FounPerDet2';
import Achieve from './pages/Achieve';
import CompanyForm1 from './pages/CompanyForm1';
import CompanyForm2 from './pages/CompanyForm2';
import CompanyForm3 from './pages/CompanyForm3';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import CompanyDet from './pages/CompanyDet';
import PersonalDet from './pages/PersonalDet';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Startups from './pages/Startups';

function App() {
  return (
    <div className="app-wrapper bg-white " style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="content-wrapper" style={{ flex: 1 }}>
        <Routes>
          <Route element={<Login />} path="/Login" />
          <Route element={<Signup />} path="/Signup" />
          <Route element={<Home />} path="/Home" />
          <Route element={<Dashboard />} path="/Dashboard" />
          <Route element={<FounderPerDet1 />} path="/FounPerDet1" />
          <Route element={<FounPerDet2 />} path="/FounPerDet2" />
          <Route element={<CompanyForm1 />} path="/CompanyForm1" />
          <Route element={<CompanyForm2 />} path="/CompanyForm2" />
          <Route element={<CompanyForm3 />} path="/CompanyForm3" />
          <Route element={<CompanyDet />} path="/CompanyDet" />
          <Route element={<Achieve />} path="/Achieve" />
          <Route element={<Landing />} path="/" />
          <Route element={<Profile />} path="/Profile" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<PersonalDet />} path="/PersonalDet" />
          <Route element={<Admin />} path="/Admin" />
          <Route element={<Users />} path="/Users" />
          <Route element={<Startups />} path="/Startups" />
        </Routes>
      </div>
      <Footer className='py-4' style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px', position: 'fixed', width: '100%', bottom: 0 }} />
    </div>
  );
}

export default App;
