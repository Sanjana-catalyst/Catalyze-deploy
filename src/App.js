import React from 'react';
import { Routes,Route,} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Main from './pages/Main';
import CompanyForm from './pages/CompanyForm';


function App() {
  
  
  return (
    <div className='bg-white h-screen overflow-y-auto'>
      <Routes>
        <Route element={<Login/>}path="/Login"> </Route>
        <Route element={<Signup/>}path="/Signup"> </Route>
        <Route element={<Home/>}path="/Home"> </Route>
        <Route element={<Main/>}path="/Main"> </Route>
        <Route element={<CompanyForm/>}path="/CompanyForm"> </Route>
        <Route element={<Landing/>}path="/"> </Route>

      </Routes>
    </div>
  )
}
export default App; 