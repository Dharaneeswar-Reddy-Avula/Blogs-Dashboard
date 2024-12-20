import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Using Link from react-scroll
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the mobile menu when an item is clicked
  };

  return (
    <div>
      {/* Main Navbar container */}
      <div className="fixed left-0 top-0 h-[60px] w-full bg-[black] flex justify-between items-center px-5 z-50">
        {/* Logo */}
        <div className="text-white flex flex-row gap-[10px]">
          <p className="text-[30px] font-bold">
            <span className="text-[orangered]">Sireesha</span> reddy
          </p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-[30px] items-center">
          <li className={`text-white font-bold text-[15px] cursor-pointer`}>
            <Link to="home" smooth={true} duration={500}>Home</Link>  {/* Scroll to Home section */}
          </li>
          <li className={`text-white font-bold text-[15px] cursor-pointer`}>
            <Link to="about" smooth={true} duration={500}>About</Link>  {/* Scroll to About section */}
          </li>
          <li className={`text-white font-bold text-[15px] cursor-pointer`}>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>  {/* Scroll to Contact section */}
          </li>
          <li className={`text-white font-bold text-[15px] cursor-pointer`}>
            <Link to="project" smooth={true} duration={500}>Project</Link>  {/* Scroll to Project section */}
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Slide-in sidebar) */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[250px] bg-black z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center space-y-[20px] py-5">
          <li className="text-white list-none cursor-pointer">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>  {/* Close menu after click */}
          </li>
          <li className="text-white list-none cursor-pointer">
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li className="text-white list-none cursor-pointer">
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
          </li>
          <li className="text-white list-none cursor-pointer">
            <Link to="project" smooth={true} duration={500} onClick={closeMenu}>Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
