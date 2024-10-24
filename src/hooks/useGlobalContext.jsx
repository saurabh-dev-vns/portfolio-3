// src/hooks/useGlobalContext.js
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Custom hook for accessing the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
