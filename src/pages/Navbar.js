import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
            <div className="absolute top-full right-0 bg-white shadow-md p-2">
              <button onClick={() => navigateTo('/Login')} className="block py-2 px-4 text-lg text-black hover:bg-gray-100 focus:outline-none">Login</button>
              <button onClick={() => navigateTo('/Signup')} className="block py-2 px-4 text-lg text-black hover:bg-gray-100 focus:outline-none">Signup</button>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center gap-5 pr-5">
          <button onClick={() => navigateTo('/Login')} className="btn-rounded btn rounded-md bg-neutral-200 hover:bg-blue-400 px-4 py-2 text-lg text-black focus:outline-none">Login</button>
          <button onClick={() => navigateTo('/Signup')} className="btn btn-primary rounded-md bg-blue-600 hover:bg-blue-400 px-4 py-2 text-lg text-white focus:outline-none">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;