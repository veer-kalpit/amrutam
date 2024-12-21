import React from "react";
import Image from "next/image";
import Logo from "../assets/logo_a.png";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-[#FFF7E2] px-[104px] py-4 gap-[266px]">
      {/* Logo */}
      <div className="flex gap-20 items-center">
        <div className="text-green-900 font-bold text-xl tracking-wide">
          <Image src={Logo} width={259} height={49} alt="Logo"></Image>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10">
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
      </div>

      {/* Buttons */}
      <div className="flex  h-[56px] gap-4">
        <button className="border-[1px] border-[#3A643B] text-center text-[#3A643B] px-[37px] text-[24px] rounded-[11px] font-medium ">
          Login
        </button>
        <button className="bg-[#3A643B] text-white text-center px-10  h-14 rounded-[11px] text-2xl flex items-center font-medium">
          Sign-up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
