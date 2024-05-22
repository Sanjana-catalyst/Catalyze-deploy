import React from 'react';
import { Routes,Route,} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from './pages/Landing';
import Home from './pages/Home';
import FounderPerDet1 from './pages/FounPerDet1'
import FounPerDet2 from './pages/FounPerDet2';
import Achieve from './pages/Achieve';
import CompanyForm1 from './pages/CompanyForm1';
import CompanyForm2 from './pages/CompanyForm2';
import CompanyForm3 from './pages/CompanyForm3';

function App() {

  return (
    <div className='bg-white h-screen overflow-hidden overflow-y-auto'>
      <Routes>
        <Route element={<Login/>}path="/Login"> </Route>
        <Route element={<Signup/>}path="/Signup"> </Route>
        <Route element={<Home/>}path="/Home"> </Route>
        <Route element={<FounderPerDet1/>}path="/FounPerDet1"> </Route>
        <Route element={<FounPerDet2/>}path="/FounPerDet2"> </Route>
        <Route element={<CompanyForm1/>}path="/CompanyForm1"> </Route>
        <Route element={<CompanyForm2/>}path="/CompanyForm2"> </Route>
        <Route element={<CompanyForm3/>}path="/CompanyForm3"> </Route>
        <Route element={<Achieve/>}path="/Achieve"> </Route>
        <Route element={<Landing/>}path="/"> </Route>

      </Routes>
      

    </div>
  )
}
export default App; 