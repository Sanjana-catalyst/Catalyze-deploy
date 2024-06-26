import React, { useEffect, useState } from 'react';
import Navbar1 from './Navbar1';
import WorkoutDetails from '../components/WorkoutDetails';
import axios from 'axios';

// function Home() {
//     const [user, setWorkouts] = useState([]);

//     useEffect(() => {
//       const fetchWorkouts = async () => {
//           try {
//               const response = await axios.get("http://localhost:4000/api/workouts");
//               console.log("API Response:", response);
//               if (response.status === 200) {
//                   console.log("Data from API:", response.data.workouts);
//                   setWorkouts(response.data.workouts);
//               }
//           } catch (error) {
//               console.log("Error fetching workouts:", error);
//           }
//       };
//       fetchWorkouts();
//   }, []);
  
//     return (
//         <div>
//             {/* <Navbar1 /> */}
//             <div className='workouts text-black'>
//                 {user && user.map((userData,index) => (
                  
//                     <WorkoutDetails key={userData._id} user={userData} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;


import { HiOutlineArrowLongRight } from "react-icons/hi2";

function Home() {
  return (
    <div>
      <Navbar1 />
      <div className="flex flex-col items-center mt-20 md:mt-60 gap-10 md:flex-row justify-center">
        <a href="http://localhost:3000/CompanyForm1" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
            <button type="button" className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300">
              <div className="card-body">
                <h2 className="card-header text-center pt-20 text-black ml-20">I am the founder.</h2>
                <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </button>
          </div>
        </a>
        <div className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl">
            <button type="button" className="bg-gradient-to-r from-rose-200 to-blue-200 h-full rounded-lg hover:from-rose-300 hover:to-blue-300">
              <div className="card-body">
                <h2 className="card-header text-center pt-20 text-black ml-20">I am not the founder.</h2>
                <div className="text-6xl flex justify-end text-slate-800 mt-20 hover:text-blue-950">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;