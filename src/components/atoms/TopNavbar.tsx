import React from "react";
import { FiSearch, FiBell, FiHeart } from "react-icons/fi";

const TopNavbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 shadow-sm bg-white">
      {/* Left: Logo or Brand Name */}
      <h2 className="text-2xl font-sans text-[#3563E9]">MORENT</h2>

      {/* Center: Search Bar */}
      <div className="flex items-center w-full max-w-lg mx-4 bg-gray-100 px-4 py-2 rounded-lg">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search something here"
          className="bg-transparent outline-none flex-1 text-sm"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <FiBell className="text-gray-600 cursor-pointer text-xl" />
        <FiHeart className="text-gray-600 cursor-pointer text-xl" />
        {/* Avatar or user icon */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default TopNavbar;
