import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Landing() {
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
    }, 100); // Interval duration for displaying each letter

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
    <div>
      <Navbar />
      <div className="flex justify-start">
        <div className="text-left">
          <h1 className="text-5xl font-semibold mt-60 ml-40 text-black">
            Connecting  <span style={{ }}>{count.toLocaleString()}</span> <br />
            people with outstanding <br />
            Startups of <br />
            {displayedText}
          </h1>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
