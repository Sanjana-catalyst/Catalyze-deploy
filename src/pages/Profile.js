import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Navbar from "./Navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col items-center mt-20 md:mt-60 gap-10 md:flex-row justify-center">
          <a
            href="http://localhost:3000/CompanyForm1"
            className="w-full md:w-auto"
          >
            <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
              <button
                type="button"
                className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300"
              >
                <div className="card-body">
                  <h2 className="card-header text-center pt-20 text-black ml-20">
                    Company Details
                  </h2>
                  <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                    <HiOutlineArrowLongRight />
                  </div>
                </div>
              </button>
            </div>
          </a>
          <div className="w-full md:w-auto">
            <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
              <button
                type="button"
                className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300"
              >
                <div className="card-body">
                  <h2 className="card-header text-center pt-20 text-black ml-20">
                    Personal Details
                  </h2>
                  <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                    <HiOutlineArrowLongRight />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
