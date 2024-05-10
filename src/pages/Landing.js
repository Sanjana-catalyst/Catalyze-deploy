import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';

function Landing() {
  const [chatIndex, setChatIndex] = useState(0);
  const [chats, setChats] = useState([
    { name: "Admin", time: "", message: "You were the Chosen One!", status: "" },
    { name: "User", time: "", message: "I hate you!", status: "" },
    { name: "Admin", time: "", message: "You were the Chosen One!", status: "" },
    { name: "User", time: "", message: "I hate you!", status: "" },
    { name: "Admin", time: "", message: "You were the Chosen One!", status: "" },
    { name: "User", time: "", message: "I hate you!", status: "" },
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
  const [displayedText, setDisplayedText] = useState('');
  
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
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-col lg:flex-row lg:gap-80'>
        <div className='lg:w-1/2'>
          <div className="text-left">
            <h1 className="text-5xl font-semibold mt-60 ml-40 lg:mt-20 lg:ml-20 text-black">
              Connecting <span className='font-bold' style={{ color: '#60a5fa', fontWeight: 'bold' }}>{count.toLocaleString()}</span> <br />
              people with outstanding <br />
              Startups of <br />
              <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>{displayedText}</span>
            </h1>
          </div>
        </div>
        <div className='lg:w-1/2 mt-10 lg:mt-0'>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-2`}
              style={{
                display: index <= chatIndex ? 'flex' : 'none', // Display chat bubble only if its index is less than or equal to chatIndex
              }}
            >
              {/* {index % 2 === 0 && (
                <div className="chat-image avatar" style={{ marginTop: '26px', marginRight: '6px', marginLeft: '6px'}}>
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div> */}
              {/* )} */}
              <div className=''>
              <div
                className={`chat ${index % 2 === 0 ? 'chat-start' : 'chat-end'} mr-2`}
                style={{
                  marginLeft: index % 2 === 0 ? '100px' : '55px',
                  marginRight: index % 2 === 0 ? '180px' : '130px',
                  marginTop: '0px', // Add margin bottom to separate chat bubbles
                  marginBottom: '-10px'
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
              {/* {index % 2 !== 0 && (
                <div className="chat-image avatar" style={{ marginTop: '6px', marginLeft: '6px' }}>
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
