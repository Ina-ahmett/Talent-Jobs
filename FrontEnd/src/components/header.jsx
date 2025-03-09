import React, { useState } from 'react';
import LogoImage from "../assets/Talent-jobs.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Move to Login Page
  };

  return (
    <header className="bg-black p-1">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LogoImage} alt="Talent Jobs" className="h-30 w-42" />
          <span className="text-white text-xl font-semibold">Talent Jobs</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-7 text-white">
        <a href="/" className="hover:text-white text-gray-500">Home</a>
          <a href="/jobs" className="hover:text-white text-gray-500">Jobs</a>
          <a href="/jobDetails" className="hover:text-white text-gray-500">Job Details</a>
          <a href="/" className="hover:text-white text-gray-500">About Us</a>
          <a href="/" className="hover:text-white text-gray-500">Contact Us</a>
        </nav>

        {/* Join Now Button - Desktop */}
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 hidden md:block">
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i> {/* Toggle between hamburger and close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4 bg-blue-500 p-4 text-white">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/jobs" className="hover:text-gray-200">Jobs</a>
          <a href="/job-details" className="hover:text-gray-200">Job Details</a>
          <button onClick={handleLoginClick} className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600">
            Join Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
