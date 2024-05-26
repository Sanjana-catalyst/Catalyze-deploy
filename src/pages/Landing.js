import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
// import Contact from './Contact';

function Landing() {
  const [chatIndex, setChatIndex] = useState(0);
  const [chats, setChats] = useState([
    {
      name: "User",
      time: "",
      message: "Hello, what can i do here",
      status: "",
    },
    { name: "Catalyze", time: "", message: "We will let you know", status: "" },
    {
      name: "User",
      time: "",
      message: "What's should i do at this moment?",
      status: "",
    },
    {
      name: "Catalyze",
      time: "",
      message: "Do Signup for more details",
      status: "",
    },
    {
      name: "User",
      time: "",
      message: "Where can i signup?",
      status: "",
    },
    {
      name: "Catalyze",
      time: "",
      message: " You'll find the signup option in the top right corner. ",
      status: "",
    },
    // Add more chat objects as needed
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChatIndex((prevIndex) => {
        if (prevIndex < chats.length) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [chats]);

  const [count, setCount] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const numberInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 946000000) {
          return prevCount + 1000000; // Increment by 1,000,000 for faster rolling
        } else {
          clearInterval(numberInterval);
          return prevCount;
        }
      });
    }, 1); // Reduced interval duration for faster rolling

    const text = "Andhra Pradesh";
    let index = 0;
    const textInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(textInterval);
      }
    }, 210); // Interval duration for displaying each letter (1 second)

    const textTimeout = setTimeout(() => {
      clearInterval(textInterval); // Clear the text interval if not already cleared
    }, 3000); // Delay before displaying "Andhra Pradesh"

    return () => {
      clearInterval(numberInterval);
      clearInterval(textInterval);
      clearTimeout(textTimeout);
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    startupName: "",
    phoneNumber: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      className="h-screen overflow-y-scroll"
      style={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }

          .no-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <Navbar />
      <div className="vh-100">
        <div className="flex flex-col md:flex-row justify-between mt-16 md:mt-0">
          <div className="flex justify-center md:justify-start ">
            <div className="text-center md:text-left ">
              <h1 className="text-3xl md:text-5xl font-semibold mt-8 md:mt-60 ml-4 md:ml-40 text-black">
                Connecting{" "}
                <span
                  className="font-bold"
                  style={{ color: "#60a5fa", fontWeight: "bold" }}
                >
                  {count.toLocaleString()}
                </span>{" "}
                <br />
                people with outstanding <br />
                Startups of <br />
                <span style={{ color: "#60a5fa", fontWeight: "bold" }}>
                  {displayedText}
                </span>
              </h1>
            </div>
          </div>

          <div style={{ marginTop: "120px", marginRight: "50px" }}>
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-2`}
                style={{
                  display: index <= chatIndex ? "flex" : "none",
                }}
              >
                <div
                  className={`chat ${
                    index % 2 === 0 ? "chat-start" : "chat-end"
                  } mr-2`}
                  style={{
                    marginLeft: index % 2 === 0 ? "-0px" : "10px",
                    marginRight: index % 2 === 0 ? "180px" : "3px",
                    marginBottom: "-8px",
                  }}
                >
                  <div className="chat-header">
                    {chat.name}
                    <time className="text-xs opacity-50">{chat.time}</time>
                  </div>
                  <div className="chat-bubble text-white">{chat.message}</div>
                  <div className="chat-footer opacity-50">{chat.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-slate-100 ">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-center text-black mb-6">
            Connect to Catalyze{" "}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700">
                Full Name
              </label>
              <input
                placeholder="Enter your name"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="startupName" className="block text-gray-700">
                Startup Name
              </label>
              <input
                placeholder="Enter your Startup name"
                type="text"
                id="startupName"
                name="startupName"
                value={formData.startupName}
                onChange={handleChange}
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">
                Phone Number
              </label>
              <input
                placeholder="Enter your phone number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700">
                Location
              </label>
              <input
                placeholder="Enter your location"
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-700 focus:border-slate-700 bg-white sm:text-sm"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Let's connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
