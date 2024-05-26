import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdSettings } from "react-icons/io";
import { HiMenuAlt3 } from 'react-icons/hi';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigateTo = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      setIsDropdownOpen(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className='bg-white'>
      <div className="navbar bg-white py-5 fixed w-full top-0 z-10 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => navigateTo('/')} className="text-2xl font-semibold text-black focus:outline-none ml-4">Catalyze</button>
        </div>
        <div className="md:hidden" ref={dropdownRef}>
          <HiMenuAlt3 
            className="text-3xl text-black cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="absolute top-full right-0 bg-white shadow-md w-full">
              <button onClick={() => navigateTo('/profile')} className={`block w-full py-2 px-4 text-lg ${isActive('/profile') ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:underline focus:outline-none`}>Profile</button>
              <button onClick={() => navigateTo('/settings')} className={`block w-full py-2 px-4 text-lg ${isActive('/settings') ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:underline focus:outline-none`}>Settings</button>
              <button onClick={() => navigateTo('/profile')} className={`block w-full py-2 px-4 text-lg ${isActive('/') ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:underline focus:outline-none`}>Logout</button>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center gap-5 pr-5">
          <button 
            onClick={() => navigateTo('/profile')} 
            className={`text-lg font-semibold ${isActive('/profile') ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:underline focus:outline-none`}
          >
            Profile
          </button>
          <button 
            onClick={() => navigateTo('/')} 
            className={`text-lg font-semibold ${isActive('/') ? 'text-blue-500' : 'text-black'} hover:text-blue-500 hover:underline focus:outline-none`}
          >
            Logout
          </button>
          <IoMdSettings 
            className="text-4xl text-black cursor-pointer hover:text-blue-500"
            onClick={() => navigateTo('/settings')}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
