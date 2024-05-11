import React from 'react';
import { Routes,Route,} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from './pages/Landing';
import Home from './pages/Home';



function App() {
  
  
  return (
    <div className='bg-white h-screen overflow-y-auto'>
      <Routes>
        <Route element={<Login/>}path="/Login"> </Route>
        <Route element={<Signup/>}path="/Signup"> </Route>
        <Route element={<Home/>}path="/Home"> </Route>
        
        <Route element={<Landing/>}path="/"> </Route>
      </Routes>
    </div>
  )
}
export default App; 