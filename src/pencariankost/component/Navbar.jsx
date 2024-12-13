import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <button className="text-2xl">&larr;</button>
      <input
        type="text"
        placeholder="Depok, Daerah Istimewa Yogyakarta"
        className="w-2/3 p-2 rounded text-black"
      />
      <button className="text-xl">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Navbar;
