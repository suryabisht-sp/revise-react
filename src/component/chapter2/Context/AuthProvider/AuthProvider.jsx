import React, { useState } from 'react'
import AuthContext from '../AuthContext';

const AuthProvider = ({ children }) => {
    const [status, setStatus] = useState(false); 
  
    const login = () => {
      setStatus(true);
    };
  
    const logout = () => {
      setStatus(false);
    };
  
    // Value provided to the context consumers
    const contextValue = {
      status,
      login,
      logout  
    };
  
    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  };


  export default AuthProvider