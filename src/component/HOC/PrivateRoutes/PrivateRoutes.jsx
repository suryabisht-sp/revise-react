import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; 
import AuthContext from '../../chapter2/Context/AuthContext'; 

const PrivateRoutes = ({ children,fallback: FallbackComponent }) => {
    const { status } = useContext(AuthContext); 

    return (
       status ? children : <FallbackComponent/>
    );
}

export default PrivateRoutes;
