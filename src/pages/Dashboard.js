import React from 'react';
import Navbar from './Navbar';
import { HiOutlineArrowLongRight } from "react-icons/hi2";


function Dashboard() {
  return (
    <div>
        <Navbar />
        <h1 className='mt-20 pt-20 ml-20 text-black text-4xl'>Hi, Akhil</h1>
    <div className='flex flex-col items-center mt-20 md:flex-row justify-center flex justify-around'>
    <a href="http://localhost:3000/CompanyForm1" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
            <button type="button" className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300">
              <div className="card-body">
                <h2 className="card-header text-center pt-20 text-black ml-20"></h2>
                <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </button>
          </div>
        </a>
        <a href="http://localhost:3000/CompanyForm1" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
            <button type="button" className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300">
              <div className="card-body">
                <h2 className="card-header text-center pt-20 text-black ml-20"></h2>
                <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </button>
          </div>
        </a>
        <a href="http://localhost:3000/CompanyForm1" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
            <button type="button" className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300">
              <div className="card-body">
                <h2 className="card-header text-center pt-20 text-black ml-20"></h2>
                <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </button>
          </div>
        </a>
    </div>
    </div>
  )
}

export default Dashboard
