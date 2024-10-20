import React from 'react';
import Navbar from '../../components/Navbar/navbar';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl font-bold mt-8">Hello Tailwind!</h1>
    </div>
  );
};

export default Home;
