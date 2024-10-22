import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
      {/* White overlay layer */}
      <div
        className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isClicked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      ></div>

      {/* Button positioned in the center initially and moves to bottom-right */}
      <button
        className={`absolute transition-all duration-1000 ease-in-out transform
        ${isClicked ? 'md:translate-x-[calc(100%+450px)] translate-x-[calc(100%+50px)] translate-y-[calc(100%+200px)]' : 'translate-x-[-50%] translate-y-[-50%]'}
        left-1/2 top-1/2 px-4 py-2 bg-black text-white rounded-lg shadow-lg`}
        onClick={handleClick}
      >
        Click Me
      </button>

      {/* Left side black background (comes from top) */}
      <div className={`black w-full md:w-6/12 md:h-screen h-3/6 bg-black transition-transform duration-1000 ease-in-out ${isClicked ? 'translate-y-0' : '-translate-y-full'}`}>
      </div>

      {/* Right side white background */}
      <div className="white w-full md:w-6/12 md:h-screen h-3/6 bg-white">
      </div>
    </div>
  );
};

export default Home;
