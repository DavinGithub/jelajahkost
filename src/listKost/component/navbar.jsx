import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logokos.png";

const Navbar = ({ showNavbar, onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Kirim kata kunci ke ListKost
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center bg-white shadow-lg z-50 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Icon" className="w-10 h-10" />
        <span className="text-gray-800 text-xl font-semibold">Jelajah Kost</span>
      </div>

      {/* Search Bar */}
      <form className="max-w-md mx-auto flex-grow mx-4" onSubmit={handleSearch}>
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Cari nama kost atau alamat..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      {/* Login */}
      <div className="flex items-center space-x-8">
        <button className="text-gray-800 text-lg" onClick={() => navigate("/pusat-bantuan")}>
          Pusat Bantuan
        </button>
      </div>
    </div>
  );
};

export default Navbar;
