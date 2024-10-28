import React, { useEffect, useState } from 'react';
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProfImg from "../../assets/profile-img.png";

const MainCard = () => {
  const { isClicked } = useGlobalContext();
  const [delayedVisible, setDelayedVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isClicked) {
      // Set a delay before showing the height transition
      timeoutId = setTimeout(() => {
        setDelayedVisible(true);
      }, 1000); // Adjust the delay in milliseconds as needed
    } else {
      // Hide immediately
      setDelayedVisible(false);
    }

    // Cleanup timeout on component unmount or if `isClicked` changes
    return () => clearTimeout(timeoutId);
  }, [isClicked]);

  return (
    <div
      className={`absolute w-[90vw] md:w-[65vw] flex  top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 
         md:flex-row flex-col transition-all duration-700 ease-in-out
        ${delayedVisible ? "h-[70vh] md:h-[55vh] visible z-10" : "h-0 invisible z-0"}
      `}
    >
      {/* Left Section - Black Background */}
      <div className={`relative bg-black md:w-2/4 w-full h-full border-white border-t-2 border-l-2 md:border-b-2 border-b-0
      border-r-2 md:border-r-0 flex items-center transition-all duration-700 ease-in-out
      ${delayedVisible ? "visible" : "invisible"}
      `}>
        <div className={`text-white p-4 md:p-8
            ${delayedVisible ? "visible" : "invisible"}
          `}>
          <p className="text-3xl font-bold md:text-7xl">Hi,</p>
          <p className="text-2xl font-semibold pt-2 md:text-4xl">I'm Saurabh Sahani</p>
          <p className="text-sm mt-6 md:mt-8 md:text-2xl md:text-[#fcf6f4cc]">
            I design and code simple yet beautiful websites.
          </p>
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className={`relative flex bg-white md:w-2/4 w-full h-full border-black border-l-2 border-b-2 border-r-2
      md:border-t-2 md:border-l-0 transition-all duration-700 ease-in-out
        ${delayedVisible ? "visible" : "invisible"}
      `}>
        <div className="flex justify-center items-end w-full h-full p-4">
          <img
            src={ProfImg}
            alt="Profile"
            className={`w-full h-auto absolute bottom-0 left-2/4 transform -translate-x-2/4
                ${delayedVisible ? "visible" : "invisible"}
              `}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;