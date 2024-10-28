import React from 'react'
import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const SocialButtons = () => {
  const { isClicked} = useGlobalContext();

  return (
    <div className="fixed flex items-center justify-center flex-col bottom-0 left-8 z-10 gap-3">
      <a href="#" className={` ${isClicked?'md:text-white':'md:text-black'}`}>
        <FaLinkedinIn className="w-[25px] h-[25px] hover:scale-125 transform transition-transform duration-300" />
      </a>
      <a href="#" className={` ${isClicked?'md:text-white':'md:text-black'}`}>
        <FaGithub className="w-[25px] h-[25px] hover:scale-125 transform transition-transform duration-300" />
      </a>
      <a href="#" className={` ${isClicked?'md:text-white':'md:text-black'}`}>
        <FaExternalLinkAlt className="w-[25px] h-[25px] hover:scale-125 transform transition-transform duration-300" />
      </a>
      <span className={`w-[2px] h-[8rem] ${isClicked?'bg-white':' bg-black '}`}></span>
    </div>
  )
}

export default SocialButtons;
