import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Achieve() {
  const navigate = useNavigate();
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [errors, setErrors] = useState({ street: "", landmark: "" });

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { street: '' };

    if (!street.trim()) {
      newErrors.street = 'Please fill out this field';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleStreetChange = (value) => {
    setStreet(value);
    setErrors(prevErrors => ({ ...prevErrors, street: '' })); // Clear street error message
  };

  const handleLandmarkChange = (value) => {
    setLandmark(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        street: street,
        landmark: landmark,
      };
      console.log("Form Data:", formData);
      navigate("/Home");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-black">Achievements of the company</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="block text-sm font-medium text-black mb-2">
                Achievement 1 <span className="text-red-500">*</span>
              </p>
              <textarea
                placeholder="Enter your achievement"
                rows="3"
                type="text"
                style={{ width: "100%" }} // Increase width of input field
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={street}
                onChange={(e) => handleStreetChange(e.target.value)} // Updated onChange handler
              />
              {errors.street && <div className="text-red-500">{errors.street}</div>}
            </div>
            <div className="mb-4">
              <p className="block text-sm font-medium text-black mb-2">
                Achievement 2
              </p>
              <textarea
                placeholder="Enter your achievement"
                type="text"
                rows="3"
                style={{ width: "100%" }} // Increase width of input field
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={landmark}
                onChange={(e) => handleLandmarkChange(e.target.value)} // Updated onChange handler
              />
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
