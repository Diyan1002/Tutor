import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="./tutor.png" // Replace with your logo image URL
          alt="Logo"
          className="w-30 h-10 pl-6"
        />
        {/* <span className="text-xl font-bold">My_Tutor</span> */}
      </div>

      {/* Right: Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 pr-6">
        <a href="#about" className="text-gray-700 hover:text-blue-500">
          About Us
        </a>
        <a href="#courses" className="text-gray-700 hover:text-blue-500">
          Courses
        </a>
        <a href="#events" className="text-gray-700 hover:text-blue-500">
          Events
        </a>
        <a href="#blogs" className="text-gray-700 hover:text-blue-500">
          Blogs
        </a>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center pr-6">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="#courses" className="text-gray-700 hover:text-blue-500">
            Courses
          </a>
          <a href="#events" className="text-gray-700 hover:text-blue-500">
            Events
          </a>
          <a href="#blogs" className="text-gray-700 hover:text-blue-500">
            Blogs
          </a>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
