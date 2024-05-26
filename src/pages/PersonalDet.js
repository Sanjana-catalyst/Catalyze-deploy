import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";


function FounPerDet1() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", street: "", landmark: "", pincode: "", latestEducation: "", latestExperience: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [latestEducation, setLatestEducation] = useState("");
  const [latestExperience, setLatestExperience] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', street: '', landmark: '', pincode: '',  latestEducation: '', latestExperience: '' };

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

    if (!latestEducation.trim()) {
        newErrors.latestEducation = 'Please fill out this field';
      }
  
      if (!latestExperience.trim()) {
        newErrors.latestExperience = 'Please fill out this field';
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
        name: name,
        email: email,
        street: street,
        landmark: landmark,
        pincode: pincode,
        latestEducation: latestEducation,
        latestExperience: latestExperience
      };
      console.log("Form Data:", formData);
      navigate("/FounPerDet2");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden">
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
                disabled
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
                disabled
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
                disabled
                onChange={(e) => handleStreetChange(e.target.value)} // Updated onChange handler
              />
              {errors.street && <div className="text-red-500">{errors.street}</div>}
              <input
                placeholder="Landmark"
                type="text"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2"
                value={landmark}
                disabled
                onChange={(e) => handleLandmarkChange(e.target.value)} // Updated onChange handler
              />
              {errors.landmark && <div className="text-red-500">{errors.landmark}</div>}
              <input
                placeholder="Pincode"
                type="text"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={pincode}
                disabled
                onChange={(e) => handlePincodeChange(e.target.value)} // Updated onChange handler
              />
              {errors.pincode && <div className="text-red-500">{errors.pincode}</div>}
            </div>
          </form>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="latestEducation">Latest Education Qualifications</label>
              <input
                placeholder="Enter your latest education qualifications"
                type="text"
                className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={latestEducation}
                disabled
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
                disabled
                onChange={(e) => handleLatestExperienceChange(e.target.value)} // Updated onChange handler
              />
              {errors.latestExperience && <div className="text-red-500">{errors.latestExperience}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FounPerDet1;
