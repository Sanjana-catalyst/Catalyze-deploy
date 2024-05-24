import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import Contact from './Contact'

function Landing() {
  const [chatIndex, setChatIndex] = useState(0);
  const [chats, setChats] = useState([
    {
      name: "User",
      time: "",
      message: "You were the Chosen One!",
      status: "",
    },
    { name: "Catalyze", time: "", message: "I hate you!", status: "" },
    {
      name: "User",
      time: "",
      message: "You were the Chosen One!",
      status: "",
    },
    { name: "Catalyze", time: "", message: "I hate you!", status: "" },
    {
      name: "User",
      time: "",
      message: "You were the Chosen One!",
      status: "",
    },
    { name: "Catalyze", time: "", message: "I hate you!", status: "" },
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

  return (
    <div className="h-screen overflow-hidden overflow-y-auto">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-between mt-16 md:mt-0">
        <div className="flex justify-center md:justify-start">
          <div className="text-center md:text-left">
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

        <div className="" style={{ marginTop: "120px", marginRight: "50px" }}>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-2`}
              style={{
                display: index <= chatIndex ? "flex" : "none", // Display chat bubble only if its index is less than or equal to chatIndex
              }}
            >
              {/* {index % 2 === 0 && (
                <div
                  className="chat-image avatar"
                  style={{
                    marginTop: "26px",
                    marginRight: "6px",
                    marginLeft: "6px",
                  }}
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxFrOAXsjjDeftyujtCiOyppmEtna2lTdsKDm2T5ahw&s"
                    />
                  </div>
                </div>
              )} */}
              <div
                className={`chat ${
                  index % 2 === 0 ? "chat-start" : "chat-end"
                } mr-2`}
                style={{
                  marginLeft: index % 2 === 0 ? "-0px" : "10px",
                  marginRight: index % 2 === 0 ? "180px" : "3px",

                  marginBottom: "-8px", // Add margin bottom to separate chat bubbles
                }}
              >
                <div className="chat-header">
                  {chat.name}
                  <time className="text-xs opacity-50">{chat.time}</time>
                </div>
                <div className="chat-bubble text-white">{chat.message}</div>
                <div className="chat-footer opacity-50">{chat.status}</div>
              </div>
              {/* {index % 2 !== 0 && (
                <div
                  className="chat-image avatar"
                  style={{ marginTop: "6px", marginLeft: "6px" }}
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxFrOAXsjjDeftyujtCiOyppmEtna2lTdsKDm2T5ahw&s"
                    />
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Landing;
