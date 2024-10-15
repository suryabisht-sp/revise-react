import React from 'react';
import { Outlet } from 'react-router-dom'; // Add Outlet

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Logo Section */}
      <div className="flex justify-center mt-10">
        <img src="/path-to-logo.png" alt="Logo" className="h-16" />
      </div>

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
          {/* Use Outlet to render nested routes */}
          <Outlet />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
