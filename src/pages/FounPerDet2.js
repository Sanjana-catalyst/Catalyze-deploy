import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Navbar from "./Navbar";

function FounderPerDet2() {
  const navigate = useNavigate();
  const [latestEducation, setLatestEducation] = useState("");
  const [latestExperience, setLatestExperience] = useState("");
  const [errors, setErrors] = useState({ latestEducation: "", latestExperience: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { latestEducation: '', latestExperience: '' };

    if (!latestEducation.trim()) {
      newErrors.latestEducation = 'Please fill out this field';
    }

    if (!latestExperience.trim()) {
      newErrors.latestExperience = 'Please fill out this field';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleLatestEducationChange = (value) => {
    setLatestEducation(value);
    setErrors(prevErrors => ({ ...prevErrors, latestEducation: '' })); // Clear latest education error message
  };

  const handleLatestExperienceChange = (value) => {
    setLatestExperience(value);
    setErrors(prevErrors => ({ ...prevErrors, latestExperience: '' })); // Clear latest experience error message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        latestEducation: latestEducation,
        latestExperience: latestExperience
      };
      console.log("Form Data:", formData);
      navigate("/Achieve");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-black">Personal Details</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="latestEducation">Latest Education Qualifications</label>
              <input
                placeholder="Enter your latest education qualifications"
                type="text"
                className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={latestEducation}
                onChange={(e) => handleLatestEducationChange(e.target.value)} // Updated onChange handler
              />
              {errors.latestEducation && <div className="text-red-500">{errors.latestEducation}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="latestExperience">Latest Experience</label>
              <textarea
                placeholder="Enter your latest experience"
                rows="4" // Increase rows to make the textarea larger
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={latestExperience}
                onChange={(e) => handleLatestExperienceChange(e.target.value)} // Updated onChange handler
              />
              {errors.latestExperience && <div className="text-red-500">{errors.latestExperience}</div>}
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

export default FounderPerDet2;
