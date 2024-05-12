import React from "react";
import Navbar1 from "./Navbar1";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


function Main() {
  return (
    <div>
      <Navbar1 />
      <div className="flex justify-center mt-60 gap-10 ">
      <a href="http://localhost:3000/CompanyForm">
      <div className="card w-96 h-80 bg-white shadow-xl">
      <button type="button" class="bg-gradient-to-r from-rose-200 to-blue-200 h-screen rounded-lg hover:from-rose-300 hover:to-blue-300 ...">
      
          <div className="card-body">
            <h2 className="card-header justify-center pt-20 text-black"> Iam the founder.</h2>
            <p className="text-content2">
            </p>
            <div className="text-6xl flex flex-row-reverse text-slate-800 mt-20 hover:text-blue-950  ">
                  <HiOutlineArrowLongRight />
                </div>
          </div>
       
        </button>
        </div>
        </a>
        <div className="card w-96 h-80 bg-white shadow-xl">
        <button type="button" class="bg-gradient-to-r from-rose-200 to-blue-200 h-screen rounded-lg hover:from-rose-300 hover:to-blue-300 ...">
          <div className="card-body">
            <h2 className="card-header justify-center pt-20 text-black">Iam not the founder.</h2>
            <p className="text-content2">
             
            </p>
            <div className="text-6xl flex flex-row-reverse mt-20 text-slate-800 hover:text-blue-950  ">
                  <HiOutlineArrowLongRight />
                </div>
          </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
