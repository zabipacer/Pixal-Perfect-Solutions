import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-[#007991] to-[#009FB7] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/NTVyRDZ/Gemini-Generated-Image-o8obp8o8obp8o8ob.jpg"
            className="h-14 w-14 rounded-full border-2 border-white shadow-md"
            alt="Logo"
          />
          <span className="text-xl font-bold hidden md:block">Pixal Perfect</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
        <Link to="/" className="hover:text-[#FF8700] transition font-medium">
        Home
      </Link>
      <Link to="/portfolio" className="hover:text-[#FF8700] transition font-medium">
        Portfolio
      </Link>
      <Link to="/pricing" className="hover:text-[#FF8700] transition font-medium">
        Pricing
      </Link>
      <Link to="/about" className="hover:text-[#FF8700] transition font-medium">
        About
      </Link>
        </nav>

        {/* Call to Action Button */}
        <button className="bg-[#FF8700] hover:bg-[#FF7000] text-sm md:text-base px-5 py-2 rounded-full shadow-lg transition transform hover:scale-105">
          Free Quote
        </button>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
