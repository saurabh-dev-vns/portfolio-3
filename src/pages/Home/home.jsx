import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import { useGlobalContext } from "../../hooks/useGlobalContext";
import RotatingButton from '../../components/Button/RotatingButton';
import MainCard from '../../components/Card/mainCard';

const Home = () => {
    const { isClicked, setIsClicked } = useGlobalContext();



    return (
        <div className="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
            <Navbar />
            <div
                className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity
                    duration-1000 ease-in-out 
            ${isClicked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            ></div>
            <RotatingButton />
            <MainCard/>
            <div className={`black w-full md:w-6/12 md:h-screen h-3/6 bg-black transition-transform 
                duration-1000 ease-in-out ${isClicked ? 'translate-y-0' : '-translate-y-full'}`}>
            </div>
            <div className="white w-full md:w-6/12 md:h-screen h-3/6 bg-white">
            </div>
        </div>
    );
};

export default Home;
