"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo_a.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icon for the hamburger menu

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle sidebar visibility on mobile

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-[#FFF7E2] px-4 py-4 md:px-[104px] gap-8 md:gap-[266px]">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="text-green-900 font-bold text-xl tracking-wide">
            <Image src={Logo} width={259} height={49} alt="Logo" />
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <AiOutlineClose className="text-3xl text-gray-700" />
            ) : (
              <AiOutlineMenu className="text-3xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation Links for desktop */}
        <div className="hidden md:flex gap-10 items-center w-full md:w-auto">
          <a
            href="#"
            className="text-gray-700 hover:text-green-700 text-[20px] font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-700 text-[20px] font-medium"
          >
            Find Doctors
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-700 text-[20px] font-medium"
          >
            About Us
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 h-[56px] items-center">
          <button className="border-[1px] border-[#3A643B] text-center text-[#3A643B] px-[37px] text-[24px] rounded-[11px] font-medium">
            Login
          </button>
          <button className="bg-[#3A643B] text-white text-center px-10 h-14 rounded-[11px] text-2xl flex items-center font-medium">
            Sign-up
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 z-50 w-[250px] h-full bg-[#FFF7E2] transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b-[1px] border-gray-300">
          <div className="text-green-900 font-bold text-xl tracking-wide">
            <Image src={Logo} width={259} height={49} alt="Logo" />
          </div>
          <button onClick={toggleMenu}>
            <AiOutlineClose className="text-3xl text-gray-700" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-center gap-6 py-4">
          <a
            href="#"
            className="text-gray-700 hover:text-green-700 text-[20px] font-medium"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-700 text-[20px] font-medium"
            onClick={toggleMenu}
          >
            Find Doctors
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-700 text-[20px] font-medium"
            onClick={toggleMenu}
          >
            About Us
          </a>
        </div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col items-center gap-4 py-4">
          <button className="border-[1px] border-[#3A643B] text-center text-[#3A643B] px-[37px] text-[24px] rounded-[11px] font-medium">
            Login
          </button>
          <button className="bg-[#3A643B] text-white text-center px-10 h-14 rounded-[11px] text-2xl flex items-center font-medium">
            Sign-up
          </button>
        </div>
      </div>

      {/* Backdrop overlay when sidebar is open */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black opacity-50 md:hidden`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Navbar;
