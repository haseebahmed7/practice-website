import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-pink-200  text-gray-600 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <img
            src="/sandbox-log.png" // Replace with your image file name if different
            alt="Fillo Web Logo"
            width={100} // Adjust as needed
            height={20} // Adjust as needed
          />
        </div>

        {/* Navigation Links Section */}
        <div className="hidden md:flex space-x-6 text-lg font-bold ">
          {" "}
          {/* md:flex to show links on medium screens and up */}
          <a href="#" className="hover:text-gray-300">
            Demos
          </a>
          <a href="#" className="hover:text-gray-300">
            Pages
          </a>
          <a href="#" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="hover:text-gray-300">
            Blocks
          </a>
          <a href="#" className="hover:text-gray-300">
            Documentation
          </a>
        </div>

        {/* Sign In / Sign Up Buttons Section */}
        <div className="hidden md:flex items-center space-x-4">
          {" "}
          {/* md:flex to show buttons on medium screens and up */}
          <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button (will be visible on small screens) */}
        <div className="md:hidden">
          {/* This will be our mobile menu icon later */}
          <button className="text-white focus:outline-none">
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
