import React, { createContext, useContext, useState } from 'react';

// Create the context
 export const CaptainDataContext = createContext();


// Provider component
export const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const  [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
   
  }
  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain}}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;