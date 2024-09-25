import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import authContext from '../chapter2/Context/AuthContext';
import "./styles.css"
import Logo from './Logo/Logo';

const Header = ({ onRegisterClick }) => {
  const { status, login, logout } = useContext(authContext);

  return (
    <header className='header'>
     <Logo/>
      <nav className='nav'>
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/about" className='navLink'>About</Link>
        <Link to="/services" className='navLink'>Services</Link>
        <Link to="/contact" className='navLink'>Contact</Link>
      </nav>
      <div className='authButtons'>         
           {!status ? <button className='btn button'  onClick={login}>Login</button> :
           <button className='btn button' onClick={logout}>Logout</button> }
          {!status && <button className='btn button' onClick={onRegisterClick}>Register</button>}
      </div>
    </header>
  );
};

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#f8f9fa',
//     borderBottom: '1px solid #e5e5e5'
//   },
//   logo: {
//     fontSize: '24px',
//     fontWeight: 'bold'
//   },
//   nav: {
//     display: 'flex',
//     gap: '25px'
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#007bff',
//     fontSize: '18px'
//   },
//   authButtons: {
//     display: 'flex',
//     gap: '10px',
//     width: "180px"
//   },

// };

export default Header;
