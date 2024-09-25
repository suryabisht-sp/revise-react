import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; 
import AuthContext from '../../component/chapter2/Context/AuthContext';

const PrivateRoutes = ({ children,fallback: FallbackComponent, registerRef }) => {
    const { status } = useContext(AuthContext); 

    return (
       status ? children : <FallbackComponent registerRef={registerRef} />
    );
}

export default PrivateRoutes;
