// MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../../Header/Header"
import Footer from '../../Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import "./MainLayout.css"
const MainLayout = ({onRegisterClick}) => {
  return (
    <div className="main-layout">
      <Header onRegisterClick={onRegisterClick}/>
      <div className="content-wrapper">
        {/* <Sidebar /> */}
        <div className="page-content">
          <Outlet /> {/* This renders the child routes */}
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default MainLayout;
