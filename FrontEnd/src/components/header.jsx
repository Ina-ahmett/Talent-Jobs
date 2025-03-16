import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/Talent-Jobs.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-between items-center px-6 py-4 md:px-10 ">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src={LogoImage} alt="Sawirka Logada" className="w-12 h-12" />
        <h1 className="text-2xl font-bold">Talent-<span className="text-blue-500">Jobs</span></h1>
      </div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-lg">
        <NavLink to='/' className= {({ isActive }) => isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300" >Home</li> 
        </NavLink>

        <NavLink to="jobs" className= {({ isActive }) => isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300">Jobs</li> 
        </NavLink> 

        <NavLink to="about"className={({ isActive }) =>isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300">About</li>
        </NavLink>

        <NavLink to="contact" className={({ isActive }) =>isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300">Contacts</li> 
        </NavLink>
      </ul>
      
      {/* Join Button */}
      <button className="hidden md:block bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600" onClick={ () => navigate("/login") } >
        Join Now
      </button>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
         <NavLink to='/' className= {({ isActive }) => isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300" >Home</li> 
        </NavLink>

        <NavLink to="jobs" className= {({ isActive }) => isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300">Jobs</li> 
        </NavLink> 

        <NavLink to="about"className={({ isActive }) =>isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300">About</li>
        </NavLink>

        <NavLink to="contact" className={({ isActive }) =>isActive? "border-b-2 border-blue-500 text-blue-500 font-semibold": "hover:text-gray-600 hover:border-b-2 hover:border-blue-400"}> 
          <li className="cursor-pointer px-3 py-1 transition-all duration-300">Contacts</li> 
        </NavLink>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600" onClick={ () => navigate("/login") }>
            Join Now
          </button>
        </ul>
      )}
    </div>
  );
};

export default Header;