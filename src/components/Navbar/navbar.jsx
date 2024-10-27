import React from 'react';
import { useGlobalContext } from "../../hooks/useGlobalContext";

const Navbar = () => {
  const { isClicked, setIsClicked } = useGlobalContext();

  return (
    <div className='z-10'>
      <h1 className={`${isClicked?'text-white':'text-black'} font-pacifico font-bold text-3xl inline-block fixed left-8 top-8`}>SS</h1>
      <a href="#" className={`${isClicked?"text-white md:text-black":"text-black"} font-medium text-xl hover:text-[1.3rem] transform duration-500 absolute top-8 right-[calc(1rem+2vw)]`}>Say hi..</a>
      <a href="#" className={`${isClicked?"md:text-white":"text-black"} font-medium text-xl hover:text-[1.3rem] transform duration-500 absolute top-[calc(50%+30px)] md:top-2/4 -rotate-90`}>Projects</a>
      <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem]  duration-500  absolute top-[calc(50%+30px)] md:top-2/4 right-0 transform rotate-90'>Projects</a>
      <div className='absolute bottom-4 flex justify-evenly w-full'>
        <a href="#" className={`${isClicked?"md:text-white":"text-black"} font-medium text-xl hover:text-[1.3rem] transform duration-500`}>About</a>
        <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem] transform duration-500'>Skill</a>
      </div>
    </div>
  );
};

export default Navbar;
