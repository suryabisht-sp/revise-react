import React, { useState } from 'react';

// Create the context with default values
const AuthContext = React.createContext({
  status: false, // default status is 'logged out'
  login: () => {},
  logout: () => {},
});

export default AuthContext;
