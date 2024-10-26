import React from 'react'
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { motion } from "framer-motion";

const RotatingButton = () => {
    const { isClicked, setIsClicked } = useGlobalContext();

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  return (
    <button
                className={`absolute container flex justify-center items-center flex-col bg-white p-2 
                    transform transition-all duration-1000 -translate-y-2/4 -translate-x-2/4 w-[120px] h-[120px] md:w-[200px] md:h-[200px]
    ${isClicked ? 'top-[88%] left-[92%] w-[55px] h-[55px] md:w-[120px] md:h-[120px] sm:w-[80px] sm:h-[80px]' : 'top-2/4 left-2/4'}`}
                onClick={handleClick}
                
            >
                <motion.svg aria-hidden="true" data-prefix="fas" data-icon="yin-yang" className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16 md:w-[200px] md:h-[200px] w-[150px] h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration:1.5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                ><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
                </motion.svg>
            </button>
  )
}

export default RotatingButton