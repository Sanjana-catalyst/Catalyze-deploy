import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Achieve() {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([{ text: "" }]);
  const [errors, setErrors] = useState([{ text: "" }]);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = achievements.map(achievement => ({ text: "" }));

    achievements.forEach((achievement, index) => {
      if (!achievement.text.trim()) {
        newErrors[index].text = "Please fill out this field";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", achievements);
      navigate("/Home");
    }
  };

  const handleInputChange = (index, value) => {
    const newAchievements = [...achievements];
    newAchievements[index].text = value;
    setAchievements(newAchievements);

    const newErrors = [...errors];
    newErrors[index].text = "";
    setErrors(newErrors);
  };

  const addAchievement = () => {
    if (achievements[achievements.length - 1].text.trim()) {
      setAchievements([...achievements, { text: "" }]);
      setErrors([...errors, { text: "" }]);
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
                  type="text"
                  style={{ width: "100%" }}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm mb-2 ${errors[index].text ? "border-red-500" : ""}`}
                  value={achievement.text}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {errors[index].text && <div className="text-red-500">{errors[index].text}</div>}
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
