// Sidebar.js (Tailwind version)
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-0'} transition-width duration-300 h-full`}>
      <button
        className="absolute top-4 right-[-50px] bg-gray-700 text-white py-2 px-4 rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Hide' : 'Show'} Sidebar
      </button>
      <nav className={`${isOpen ? '' : 'hidden'} mt-10`}>
        <ul>
          <li className="mb-4"><a href="/" className="block p-2">Home</a></li>
          <li className="mb-4"><a href="/about" className="block p-2">About</a></li>
          <li className="mb-4"><a href="/services" className="block p-2">Services</a></li>
          <li className="mb-4"><a href="/contact" className="block p-2">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
