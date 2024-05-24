
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Navbar from "./Navbar";
import axios from 'axios';

function FounPerDet1() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", street: "", landmark: "", pincode: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', street: '', landmark: '', pincode: '' };

    if (!name.trim()) {
      newErrors.name = 'Please fill out this field';
    }

    if (!email.trim()) {
      newErrors.email = 'Please fill out this field';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

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

  const handleNameChange = (value) => {
    setName(value);
    setErrors(prevErrors => ({ ...prevErrors, name: '' })); // Clear name error message
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setErrors(prevErrors => ({ ...prevErrors, email: '' })); // Clear email error message
  };

  const handleStreetChange = (value) => {
    setStreet(value);
    setErrors(prevErrors => ({ ...prevErrors, street: '' })); // Clear street error message
  };

  const handleLandmarkChange = (value) => {
    setLandmark(value);
    setErrors(prevErrors => ({ ...prevErrors, landmark: '' })); // Clear landmark error message
  };

  const handlePincodeChange = (value) => {
    if (/^\d+$/.test(value) || value === "") { // Allow only numbers or empty string
      setPincode(value);
      setErrors(prevErrors => ({ ...prevErrors, pincode: '' })); // Clear pincode error message
    } else {
      setErrors(prevErrors => ({ ...prevErrors, pincode: 'Enter correct pincode' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        Name: name,
        Email: email,
        Address: {
        Street: street,
        Landmark: landmark,
        PinCode: pincode
        }
      };
      console.log("Form Data:", formData);
      try{
        const response =await axios.post(
          "http://localhost:4000/api/FounderDet",formData
        );
        
        if (response.status === 201) {
          const { token } = response.data;
          localStorage.setItem("token", token);
          console.log("Founder Details created:", response.data.company);
          navigate("/FounPerDet2");   

      } else {
          console.error("Creation failed. Please check your data.");
      }
      }catch(error){
        console.error("Error:", error);
        console.error("Creation failed. Please try again later.");
  

      }
      
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
              <label className="block text-sm font-medium text-black" htmlFor="name">Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)} // Updated onChange handler
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="email">Email address</label>
              <input
                placeholder="Enter your email"
                type="email"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)} // Updated onChange handler
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="mb-4">
              <p className="block text-sm font-medium text-black mb-2">Address</p>
              <input
                placeholder="Street"
                type="text"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={street}
                onChange={(e) => handleStreetChange(e.target.value)} // Updated onChange handler
              />
              {errors.street && <div className="text-red-500">{errors.street}</div>}
              <input
                placeholder="Landmark"
                type="text"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={landmark}
                onChange={(e) => handleLandmarkChange(e.target.value)} // Updated onChange handler
              />
              {errors.landmark && <div className="text-red-500">{errors.landmark}</div>}
              <input
                placeholder="Pincode"
                type="text"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={pincode}
                onChange={(e) => handlePincodeChange(e.target.value)} // Updated onChange handler
              />
              {errors.pincode && <div className="text-red-500">{errors.pincode}</div>}
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

export default FounPerDet1;