import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; 
import AuthContext from '../../chapter2/Context/AuthContext'; 

const PrivateRoutes = ({ children }) => {
    const { status } = useContext(AuthContext); 

    return (
       status ? children : <Navigate to="/home" />
    );
}

export default PrivateRoutes;
