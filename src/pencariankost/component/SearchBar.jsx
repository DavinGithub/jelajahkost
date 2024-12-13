import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center bg-blue-500 text-white">
      <button className="px-4 py-2 border-b-2 border-white">Kampus</button>
      <button className="px-4 py-2 hover:border-b-2 hover:border-white">Area</button>
      <button className="px-4 py-2 hover:border-b-2 hover:border-white">Lokasi Terdekat</button>
    </div>
  );
};

export default SearchBar;
