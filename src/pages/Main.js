import React from "react";
import Navbar from "./Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-60 gap-10 ">
      <a href="http://localhost:3000/CompanyForm">
      <div className="card w-96 h-80 bg-white shadow-xl">
      <button type="button" class="bg-gradient-to-r from-white-400 to-white-400 h-screen rounded-lg hover:from-rose-200 hover:to-blue-200 ...">
      
          <div className="card-body">
            <h2 className="card-header justify-center pt-20 text-black"> Are you the founder?</h2>
            <p className="text-content2">
            </p>
            <div className="card-footer flex flex-row-reverse mt-20">
              <button className="btn-secondary btn bg-white  ">Learn More</button>
            </div>
          </div>
       
        </button>
        </div>
        </a>
        <div className="card w-96 h-80 bg-white shadow-xl">
        <button type="button" class="bg-gradient-to-r from-white-400 to-white-400 h-screen rounded-lg hover:from-rose-200 hover:to-blue-200 ...">
          <div className="card-body">
            <h2 className="card-header justify-center pt-20 text-black">Are you the owner?</h2>
            <p className="text-content2">
             
            </p>
            <div className="card-footer flex flex-row-reverse mt-20 ">
              <button className="btn-secondary btn justify-end bg-white">Learn More</button>
            </div>
          </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
