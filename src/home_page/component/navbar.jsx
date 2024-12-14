import React from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logokos.png"; 


const Navbar = ({ showNavbar }) => {
      const navigate = useNavigate(); 

      const handlePusatClick = () => {
        navigate("/pusat-bantuan"); 
      };
      const handleLoginClick = () => {
        navigate("/pilihan"); 
      };
    
  return (
    <div
      className={`fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center bg-white shadow-lg z-50 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-4">
        
          <img src={logo} alt="Icon" className="w-10 h-10" />
       
        <span className="text-gray-800 text-xl font-semibold">Jelajah Kost</span>
      </div>

      <div className="flex items-center space-x-8">
        <button className="text-gray-800 text-lg"
        onClick={handlePusatClick}
        >
            Pusat Bantuan
        </button>
        <div className="bg-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer shadow-md">
          <AiOutlineLogin className="text-gray-600" size={20} />
          <button className= "text-gray-600"onClick={handleLoginClick}>Login</button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;