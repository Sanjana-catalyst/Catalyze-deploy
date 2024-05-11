import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [wordCount, setWordCount] = useState(null); // Initialize word count to null
  const [errors, setErrors] = useState({ companyName: "", domain: "", description: "" });

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { companyName: '', domain: '', description: '' };

    if (!companyName.trim()) {
      newErrors.companyName = 'Please fill out this field';
    }

    if (!domain.trim()) {
      newErrors.domain = 'Please select a domain';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.trim().split(/\s+/).length < 50) {
      newErrors.description = '50 words are mandatory';
    } else if (description.trim().split(/\s+/).length > 100) {
      newErrors.description = "You can't write more";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleCompanyNameChange = (value) => {
    setCompanyName(value);
    setErrors(prevErrors => ({ ...prevErrors, companyName: '' })); // Clear companyName error message
  };

  const handleDomainChange = (value) => {
    setDomain(value);
    setErrors(prevErrors => ({ ...prevErrors, domain: '' })); // Clear domain error message
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
    setErrors(prevErrors => ({ ...prevErrors, description: '' })); // Clear description error message
    // Update word count
    const words = value.trim().split(/\s+/);
    setWordCount(words.length);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        companyName: companyName,
        domain: domain,
        description: description
      };
      console.log("Form Data:", formData);
      navigate("/Home");
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
              <label className="block text-sm font-medium text-black" htmlFor="companyName">Name of the company</label>
              <input
                placeholder="Enter your company name"
                type="text"
                id="companyName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={companyName}
                onChange={(e) => handleCompanyNameChange(e.target.value)}
              />
              {errors.companyName && <div className="text-red-500">{errors.companyName}</div>}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="domain">Domain</label>
              <select
                id="domain"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={domain}
                onChange={(e) => handleDomainChange(e.target.value)}
              >
                <option value="" disabled hidden>Select a domain</option>
                <option value="agriculture">Agriculture</option>
                <option value="business">Business</option>
              </select>
              {errors.domain && <div className="text-red-500">{errors.domain}</div>}
            </div>
           
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="description">Description of the company</label>
              <textarea
                id="description"
                placeholder="Few words about your company" // Placeholder added here
                rows="5" // Increased number of rows
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={description}
                onChange={(e) => handleDescriptionChange(e.target.value)}
              />
              {wordCount !== null && <div className="text-right text-sm text-gray-500">{wordCount}/100</div>}
              {errors.description && <div className="text-red-500">{errors.description}</div>}
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

export default Login;
