import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Navbar from "./Navbar";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Please fill out this field';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setErrors(prevErrors => ({ ...prevErrors, email: '' })); // Clear email error message
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setErrors(prevErrors => ({ ...prevErrors, password: '' })); // Clear password error message
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:4000/api/users",
  //         { email, password }
  //       );
  //       if (response.status === 200) {
  //         const { token } = response.data;
  //         localStorage.setItem("token", token);
  //         navigate("/Home");
  //       } else {
  //         // Handle failed login
  //         console.error("Login failed. Please     check your credentials.");
  //       }
  //     } catch (error) {
  //       // Handle network errors and other unexpected errors
  //       console.error("Error:", error);
  //       console.error("Login failed. Please   try again later.");
  //     }
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/api/users/login', { email, password });
        if (response.status == 200){ 
          setMessage(response.data.message);
          console.log(response.data.message);
          // Save the token to local storage or state management
          localStorage.setItem('token', response.data.token);
          navigate('/Home');
        }else{
          console.log(response.data.message)
        }
       
        
    } catch (error) {
        setMessage(error.response ? error.response.data.message : 'Error logging in');
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
          <h1 className="text-3xl font-semibold text-center text-black">Log In</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black" htmlFor="email">Email address</label>
              <input
                placeholder="Enter your email"
                type="email"
                className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)} // Updated onChange handler
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">Password</label>
              <div className="mt-1 relative">
                <input
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  className=" text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)} // Updated onChange handler
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none text-black"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                </button>
              </div>
              {errors.password && <div className="text-red-500">{errors.password}</div>}
            </div>
            <div className="form-field">
              <div className="form-control justify-between">
                <label className="form-label">
                  <p
                    className="text-m text-black hover:text-gray-900 hover:underline focus:outline-none pb-5 pr-10"
                    onClick={navigateToSignup}
                  >
                    Forgot your password?
                  </p>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-600"
              >
                Log in
              </button>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-m text-black hover:text-gray-900 hover:underline focus:outline-none"
                onClick={navigateToSignup}
              >
                Don't have an account yet? Signup
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
