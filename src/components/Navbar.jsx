import React from "react";
import { BrowserRouter } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="shadow-sm px-6 py-4 flex items-center justify-between bg-white">
      {/* Logo */}
      <span className="text-orange-400 text-3xl font-bold">SHOPHUB</span>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-2xl mx-8">
        {/* Search Input with Icon */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img
              src="icons/searchicon.png"
              alt="Search"
              className="h-5 w-5" // Adjust size here
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Search Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-r-full transition-colors duration-200">
          Search
        </button>
      </div>
      <div className="flex gap-4">
        {/* Login Button */}

        <Link
          to="/login"
          className="px-5 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Login
        </Link>

        {/* Signup Button  */}
        <Link
          to="/Signup"
          className="px-5 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
