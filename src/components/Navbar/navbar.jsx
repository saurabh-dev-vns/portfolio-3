import { div } from 'framer-motion/client';
import React from 'react';

const Navbar = () => {
  return (
   <div className='z-10'>
    <h1 className='text-black inline-block fixed left-8 top-8'>SS</h1>
    <a href="#" className='text-black absolute top-8 right-[calc(1rem+2vw)]'>Say hi..</a>
   </div>
  );
};

export default Navbar;
