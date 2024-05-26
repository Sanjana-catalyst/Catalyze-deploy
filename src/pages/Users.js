import React from 'react';
import Navbar from './Navbar';

function Users() {
  return (
    <div className=''>
      <Navbar />
      <div className="vh-100 flex items-center justify-center bg-white">
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse mt-20 border border-gray-400 w-full md:w-3/4 lg:w-1/2">
            <thead>
              <tr>
                <th className="border border-gray-400 px-6 py-4 text-lg text-black">S.NO</th>
                <th className="border border-gray-400 px-6 py-4 text-lg text-black">Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">1</td>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">Akhil</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">2</td>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">Jahnavi</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">3</td>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">Siddhartha</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">4</td>
                <td className="border border-gray-400 px-6 py-4 text-lg text-black">Sanjana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
