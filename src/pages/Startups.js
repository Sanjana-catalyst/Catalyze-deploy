import React from 'react';
import Navbar from './Navbar';

function Startups() {
  return (
    <div className=''>
      <Navbar />
      <div className="vh-100 flex items-center justify-center bg-white">
        <div className="overflow-x-auto w-full md:w-3/4 lg:w-1/2">
          <table className="table-auto border-collapse border border-gray-400 w-full mt-10 md:mt-20">
            <thead>
              <tr>
                <th className="border border-gray-400 px-8 py-4 text-xl text-black">S.NO</th>
                <th className="border border-gray-400 px-8 py-4 text-xl text-black">Startup Name</th>
                <th className="border border-gray-400 px-8 py-4 text-xl text-black">Domain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-8 py-4 text-lg text-black">1</td>
                <td className="border border-gray-400 px-8 py-4 text-lg text-black"></td>
                <td className="border border-gray-400 px-8 py-4 text-lg text-black"></td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-8 py-4 text-lg text-black">2</td>
                <td className="border border-gray-400 px-8 py-4 text-lg text-black"></td>
                <td className="border border-gray-400 px-8 py-4 text-lg text-black"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Startups;
