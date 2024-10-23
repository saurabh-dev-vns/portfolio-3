import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import LoadingImg from "../../assets/loading.svg";


const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
            <Navbar/>
            <div
                className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-1000 ease-in-out 
            ${isClicked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            ></div>

            
            <button
                className={`absolute bg-white border-[2px] w-20 h-20 border-cyan-950 rounded-full p-2 transform transition-all duration-1000
    -translate-y-2/4 -translate-x-2/4 ${isClicked ? 'top-[92%] left-[88%] md:top-[90%] md:left-[92%]' : 'top-2/4 left-2/4'}`}
                onClick={handleClick}
            >
                <img
                    src={LoadingImg}
                    alt="Loading"
                />
            </button>
            <div className={`black w-full md:w-6/12 md:h-screen h-3/6 bg-black transition-transform duration-1000 ease-in-out ${isClicked ? 'translate-y-0' : '-translate-y-full'}`}>
            </div>
            <div className="white w-full md:w-6/12 md:h-screen h-3/6 bg-white">
            </div>
        </div>
    );
};

export default Home;
