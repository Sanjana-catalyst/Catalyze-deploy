import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';

function Achieve() {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([""]);
  const [errors, setErrors] = useState([""]);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = achievements.map(() => "");

    achievements.forEach((achievement, index) => {
      if (!achievement.trim()) {
        newErrors[index] = "Please fill out this field";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      const updateData = {
        Achievements: achievements,
      };
      console.log("Form Data:", updateData);

      const token = localStorage.getItem("token");

      try {
        const response = await axios.patch("http://localhost:4000/api/FounderDet", updateData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          console.log("Team Members updated:", response.data.message);
          navigate("/Home");
        } else {
          console.error("Update failed. Please check your data.");
        }
      } catch (error) {
        console.error("Error:", error);
        console.error("Update failed. Please try again later.");
      }
    }
  };

  const handleInputChange = (index, value) => {
    const newAchievements = [...achievements];
    newAchievements[index] = value;
    setAchievements(newAchievements);

    const newErrors = [...errors];
    newErrors[index] = "";
    setErrors(newErrors);
  };

  const addAchievement = () => {
    if (achievements[achievements.length - 1].trim()) {
      setAchievements([...achievements, ""]);
      setErrors([...errors, ""]);
      setShowValidationMessage(false);
    } else {
      setShowValidationMessage(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-black">Achievements of the company</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-4">
                <p className="block text-sm font-medium text-black mb-2">
                  Achievement {index + 1} {index === 0 && <span className="text-red-500">*</span>}
                </p>
                <textarea
                  placeholder="Enter your achievement"
                  rows="3"
                  style={{ width: "100%" }}
                  className={`text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2 ${errors[index] ? "border-red-500" : ""}`}
                  value={achievement}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {errors[index] && <div className="text-red-500">{errors[index]}</div>}
              </div>
            ))}
            {showValidationMessage && (
              <div className="mb-6">
                <p className="text-red-500 text-sm">Please fill out the fields before adding another achievement.</p>
              </div>
            )}
            <div className="flex justify-between items-center mb-6">
              <button
                type="button"
                onClick={addAchievement}
                className="text-m text-black hover:text-gray-900 hover:underline focus:outline-none cursor-pointer"
              >
                Add Achievement
              </button>
            </div>
            <div className="mb-6 flex flex-row-reverse">
              <button
                type="submit"
                className="w-1/3 px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Achieve;
