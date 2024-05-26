import React, { useState } from 'react';
import CompanyDet from './CompanyDet';
import PersonalDet from './PersonalDet';
import Navbar from './Navbar';

function Dashboard() {
  const [activeText, setActiveText] = useState('text1');

  const handleTextClick = (text) => {
    setActiveText(text);
  };

  return (
    <div>
      <Navbar />
    <div className='flex flex-col min-h-screen mt-20 pt-5'>
      {/* Text container */}
      <div className='flex justify-center mt-8 space-x-8  border-b-2 border-gray-300'>
        <span
          onClick={() => handleTextClick('text1')}
          className={`cursor-pointer text-lg font-medium pb-1 ${
            activeText === 'text1' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'
          }`}
        >
          Company Details
        </span>
        <span
          onClick={() => handleTextClick('text2')}
          className={`cursor-pointer text-lg font-medium pb-1 ${
            activeText === 'text2' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'
          }`}
        >
          Personal Details
        </span>
      </div>
      {/* Content container */}
      <div className='flex-grow flex items-center justify-center p-4'>
        {activeText === 'text1' && (
          <div className='w-full h-full bg-white'>
            <CompanyDet />
          </div>
        )}
        {activeText === 'text2' && (
          <div className='w-full h-full bg-white'>
            <PersonalDet />
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
