import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const closeMenu = () => {
    setIsOpen(false); 
  };

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-[60px] bg-black flex justify-between items-center px-5 z-50">
        {/* Logo */}
        <div className="text-white flex flex-row gap-[10px]">
          <p className="text-[30px] font-bold">Blogs</p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-[30px] items-center">
          <li className="text-white font-bold text-[15px] cursor-pointer">
            <Link to="/Create">Create</Link>
          </li>
          <li className="text-white font-bold text-[15px] cursor-pointer">
            <Link to="/Contact">Contact</Link>
          </li>
          <li><FaUserCircle className="text-white text-[20px]"/></li>
        </ul>
      </div>

      {/* Mobile Menu (Slide-in sidebar) */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[250px] bg-black z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center space-y-[20px] mt-[50px] py-5">
          <li className="text-white list-none cursor-pointer">
            <Link to="/Create" onClick={closeMenu}>Create</Link>
          </li>
          <li className="text-white list-none cursor-pointer">
            <Link to="/Contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Content below the Navbar */}
      <div className="pt-[60px]"> {/* Add padding-top equal to the height of the navbar */}
        {/* Your page content will go here */}
      </div>
    </div>
  );
};

export default Navbar;
