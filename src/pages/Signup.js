import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Navbar from "./Navbar";
import axios from "axios";
import bcrypt from "bcryptjs";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (value) => {
    const passwordErrors = [];

    if (value.length < 8) {
      passwordErrors.push("Password must be at least 8 characters long");
    }
    if (!/(?=.*[a-z])/.test(value)) {
      passwordErrors.push("Password must contain at least one lowercase letter");
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      passwordErrors.push("Password must contain at least one uppercase letter");
    }
    if (!/(?=.*\d)/.test(value)) {
      passwordErrors.push("Password must contain at least one digit");
    }
    if (!/(?=.*[@$!%?&])/.test(value)) {
      passwordErrors.push("Password must contain at least one special character");
    }

    return passwordErrors;
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setErrors((prevErrors) => ({ ...prevErrors, email: '' })); // Clear email error message
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    const passwordErrors = validatePassword(value);
    setErrors((prevErrors) => ({ ...prevErrors, password: passwordErrors }));
    if (confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword
      };
      
      try{
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      const response=await axios.post( "http://localhost:4000/api/users",formData)
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/Home");
      } else {
        // Handle failed login
        console.error("Signin failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle network errors and other unexpected errors
      console.error("Error:", error);
      console.error("Signin failed. Please try again later.");
    }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (password.length === 0) {
      const passwordErrors = validatePassword(password);
      newErrors.password = passwordErrors;
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const navigateToLogin = () => {
    navigate("/Login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full mt-20 ">
          <h1 className="text-3xl font-semibold text-center text-black">Sign Up</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">Email address</label>
              <input
                placeholder="Enter your email"
                type="email"
                className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            {/* Password field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">Password</label>
              <div className="mt-1 relative">
                <input
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                  className={` text-black w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 sm:text-sm ${errors.password.length > 0 ? 'border' : ''}`}
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <button
                  className=" absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none text-black"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
              {errors.password && errors.password.length > 0 && (
                <div className="text-red-500">
                  {errors.password.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            {/* Confirm Password field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">Confirm Password</label>
              <input
                placeholder="Confirm your password"
                type="password"
                className={`text-black mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 sm:text-sm ${errors.confirmPassword ? 'border' : ''}`}
                value={confirmPassword}
                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              />
              {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
            </div>
            {/* Submit button */}
            <div className="mb-6">
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 transition duration-300">
                Sign up
              </button>
            </div>
          </form>
          {/* Login link */}
          <div className="text-center mb-4">
            <button className="text-black hover:underline pb-2" onClick={navigateToLogin}>Already have an account? Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;