import React from 'react';

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center absolute">
      <nav>
        <ul className="flex flex-col items-center">
          <li className="mb-4">
            <a href="/">About.</a>
          </li>
          <li className="absolute bottom-1 right-11">
            <a href="/">My Skill.</a>
          </li>
          <li className="absolute bottom-1">
            <a href="/">Work.</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
