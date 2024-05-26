import React, { useState } from 'react';
import Navbar from './Navbar';
import Users from './Users';
import Startups from './Startups';

function Admin() {
  const [activeText, setActiveText] = useState('text1');

  const handleTextClick = (text) => {
    setActiveText(text);
  };

  return (
    <div>
      <Navbar />
    <div className='flex flex-col vh-90 mt-20 pt-5'>
      {/* Text container */}
      <div className='flex justify-center mt-8 space-x-8 border-b-2 border-gray-300'>
        <span
          onClick={() => handleTextClick('text1')}
          className={`cursor-pointer text-lg font-medium pb-1 ${
            activeText === 'text1' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'
          }`}
        >
          Users
        </span>
        <span
          onClick={() => handleTextClick('text2')}
          className={`cursor-pointer text-lg font-medium pb-1 ${
            activeText === 'text2' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'
          }`}
        >
          Startups
        </span>
        <span
          onClick={() => handleTextClick('text3')}
          className={`cursor-pointer text-lg font-medium pb-1 ${
            activeText === 'text3' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'
          }`}
        >
          Analysis
        </span>
      </div>
      {/* Content container */}
      <div className='flex-grow flex items-center justify-center p-4'>
        {activeText === 'text1' && (
          <div className='w-full h-full bg-white'>
            <Users />
          </div>
        )}
        {activeText === 'text2' && (
          <div className='w-full h-full bg-white'>
           <Startups />
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Admin;
