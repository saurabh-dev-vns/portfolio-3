// src/context/GlobalContext.js
import React, { createContext, useState } from "react";

// Create a Context
const GlobalContext = createContext();

// Create a Provider component
export const GlobalProvider = ({ children }) => {
  // Define global state variables
  const [isClicked, setIsClicked] = useState(false);

  return (
    <GlobalContext.Provider value={{isClicked, setIsClicked }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
