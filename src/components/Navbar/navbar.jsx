import { div } from 'framer-motion/client';
import React from 'react';

const Navbar = () => {
  return (
    <div className='z-10'>
      <h1 className='text-black inline-block fixed left-8 top-8'>SS</h1>
      <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem] transform duration-500 absolute top-8 right-[calc(1rem+2vw)]'>Say hi..</a>
      <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem] transform duration-500 absolute top-2/4  -rotate-90'>Projects</a>
      <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem]  duration-500  absolute top-2/4 right-0 transform rotate-90'>Projects</a>
      <div className='absolute bottom-4 flex justify-evenly w-full'>
        <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem] transform duration-500'>About</a>
        <a href="#" className='text-black font-medium text-xl hover:text-[1.3rem] transform duration-500'>Skill</a>
      </div>
    </div>
  );
};

export default Navbar;
