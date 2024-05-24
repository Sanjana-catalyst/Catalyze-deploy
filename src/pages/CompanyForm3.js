import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function CompanyForm3() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([{ name: "", designation: "", socialLink: "" }]);
  const [errors, setErrors] = useState([{ name: "", designation: "", socialLink: "" }]);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = [...errors];

    members.forEach((member, index) => {
      const { name, designation, socialLink } = member;
      if (!name.trim()) {
        newErrors[index].name = "Please enter a name";
        isValid = false;
      } else {
        newErrors[index].name = "";
      }

      if (!designation.trim()) {
        newErrors[index].designation = "Please enter a designation";
        isValid = false;
      } else {
        newErrors[index].designation = "";
      }

      if (!socialLink.trim()) {
        newErrors[index].socialLink = "Please enter a social profile link";
        isValid = false;
      } else {
        newErrors[index].socialLink = "";
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Team Details:", members);

      const updateData = {
        TeamMembers: members.map(member => ({
          Name: member.name,
          Designation: member.designation,
          SocialProfile: member.socialLink
        }))
      };

      const token = localStorage.getItem("token");

      try {
        const response = await axios.patch("http://localhost:4000/api/CompanyForms", updateData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          console.log("Team Members updated:", response.data.message);
          navigate("/FounPerDet1"); // Navigate to home or any other page
        } else {
          console.error("Update failed. Please check your data.");
        }
      } catch (error) {
        console.error("Error:", error);
        console.error("Update failed. Please try again later.");
      }
    }
  };

  const handleInputChange = (index, key, value) => {
    const newMembers = [...members];
    newMembers[index][key] = value;
    setMembers(newMembers);
  };

  const addMember = () => {
    if (!members[members.length - 1].name.trim() || !members[members.length - 1].designation.trim() || !members[members.length - 1].socialLink.trim()) {
      setShowValidationMessage(true);
    } else {
      setMembers([...members, { name: "", designation: "", socialLink: "" }]);
      setErrors([...errors, { name: "", designation: "", socialLink: "" }]);
      setShowValidationMessage(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded shadow-md sm:max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-black">Team Details</h1>
          <form className="mt-4" onSubmit={handleSubmit}>
            {members.map((member, index) => (
              <div key={index}>
                <h2 className="text-xl font-medium text-black text-center text-gray-700 mb-4">Member {index + 1}</h2>
                <div className="mb-4">
                  <label htmlFor={`name${index}`} className="block text-sm font-medium text-black mb-2">Name</label>
                  <input
                    id={`name${index}`}
                    type="text"
                    placeholder="Enter name"
                    className={`mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm ${errors[index].name ? "border-red-500" : ""}`}
                    value={member.name}
                    onChange={(e) => handleInputChange(index, "name", e.target.value)}
                  />
                  {errors[index].name && <p className="text-red-500 text-sm mt-1">{errors[index].name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor={`designation${index}`} className="block text-sm font-medium text-black mb-2">Designation</label>
                  <input
                    id={`designation${index}`}
                    type="text"
                    placeholder="Enter designation"
                    className={`mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm ${errors[index].designation ? "border-red-500" : ""}`}
                    value={member.designation}
                    onChange={(e) => handleInputChange(index, "designation", e.target.value)}
                  />
                  {errors[index].designation && <p className="text-red-500 text-sm mt-1">{errors[index].designation}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor={`socialLink${index}`} className="block text-sm font-medium text-black mb-2">Social Profile Link</label>
                  <input
                    id={`socialLink${index}`}
                    type="text"
                    placeholder="Enter social profile link"
                    className={`mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm ${errors[index].socialLink ? "border-red-500" : ""}`}
                    value={member.socialLink}
                    onChange={(e) => handleInputChange(index, "socialLink", e.target.value)}
                  />
                  {errors[index].socialLink && <p className="text-red-500 text-sm mt-1">{errors[index].socialLink}</p>}
                </div>
              </div>
            ))}
            {showValidationMessage && (
              <div className="mb-6">
                <p className="text-red-500 text-sm">Please fill out the fields before adding another member.</p>
              </div>
            )}
            <div className="form-field">
              <div className="form-control justify-between">
                <label className="form-label">
                  <p
                    className="text-m text-blue-600 hover:text-blue-600 hover:underline focus:outline-none pb-5 pr-10"
                  >
                    Test link
                  </p>
                  <button
                    type="button"
                    onClick={addMember}>
                    <p
                      className="text-m text-black ml-10 hover:text-gray-900 hover:underline focus:outline-none pb-5 pr-10"
                    >
                      Add member
                    </p>
                  </button>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
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

export default CompanyForm3;
