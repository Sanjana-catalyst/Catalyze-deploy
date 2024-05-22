import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaUpload, FaPlus } from "react-icons/fa";

function CompanyForm2() {
  const navigate = useNavigate();
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [logo, setLogo] = useState(null);
  const [skillSet, setSkillSet] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [errors, setErrors] = useState({ street: "", landmark: "", pincode: "" });

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { street: '', landmark: '', pincode: '' };

    if (!street.trim()) {
      newErrors.street = 'Please fill out this field';
    }

    if (!landmark.trim()) {
      newErrors.landmark = 'Please fill out this field';
    }

    if (!pincode.trim()) {
      newErrors.pincode = 'Please fill out this field';
    } else if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = 'Invalid pincode';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleStreetChange = (value) => {
    setStreet(value);
    setErrors(prevErrors => ({ ...prevErrors, street: '' }));
  };

  const handleLandmarkChange = (value) => {
    setLandmark(value);
    setErrors(prevErrors => ({ ...prevErrors, landmark: '' }));
  };

  const handlePincodeChange = (value) => {
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setPincode(value);
    }
    // Show error if alphabets are entered
    else {
      setErrors(prevErrors => ({ ...prevErrors, pincode: 'Enter correct pincode' }));
    }
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    setLogo(file);
  };

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkillSet([...skillSet, newSkill]);
      setNewSkill("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        street: street,
        landmark: landmark,
        pincode: pincode,
        logo: logo,
        skillSet: skillSet
      };
      console.log("Form Data:", formData);
      navigate("/CompanyForm3");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded shadow-md sm:max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-black">Company Details</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="block text-sm font-medium text-black mb-2">Address</p>
              <input
                placeholder="Street"
                type="text"
                className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={street}
                onChange={(e) => handleStreetChange(e.target.value)}
              />
              {errors.street && <div className="text-red-500">{errors.street}</div>}
              <input
                placeholder="Landmark"
                type="text"
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={landmark}
                onChange={(e) => handleLandmarkChange(e.target.value)}
              />
              {errors.landmark && <div className="text-red-500">{errors.landmark}</div>}
              <input
                placeholder="Pincode"
                type="text"
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={pincode}
                onChange={(e) => handlePincodeChange(e.target.value)}
              />
              {errors.pincode && <div className="text-red-500">{errors.pincode}</div>}
            </div>
            <div className="mb-4">
              <p className="block text-sm font-medium text-black mb-2">Logo</p>
              <label className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="absolute inset-0 w-full h-full text-black opacity-0 cursor-pointer"
                />
                <div className="flex items-center justify-center w-full h-9 border border-gray-300 rounded-md shadow-sm focus-within:border-slate-700 bg-white">
                  <FaUpload className="w-4 h-4 mr-2" /> Upload File
                </div>
              </label>
            </div>
            <div className="mb-4">
              <p className="block text-sm font-medium text-black mb-2">Skill Set of Firm</p>
              <div className="flex mb-2 relative">
                <input
                  type="text"
                  placeholder="Enter skill"
                  className="flex-1 px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                  value={newSkill}
                  onChange={handleSkillChange}
                />
                <button
                  type="button"
                  className="absolute right-0 inset-y-0 px-3 py-2 text-black rounded-md"
                  onClick={addSkill}
                >
                  <FaPlus className="w-4 h-4 " />
                </button>
              </div>
              {skillSet.length > 0 && (
                <ul className="max-h-32 overflow-y-auto border border-gray-300 rounded-md p-2">
                  {skillSet.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-6 flex flex-row-reverse">
              <button
                type="submit"
                className="w-1/3 w-full sm:w-1/3 px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
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

export default CompanyForm2;
