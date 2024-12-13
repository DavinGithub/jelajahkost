import React from "react";
import Navbar from "../component/Navbar";
import SearchBar from "../component/SearchBar";
import PopularSearch from "../component/PopularSearch";
import CampusList from "../component/CampusList";
import LocationMap from "../component/LocationMap";

const PencarianKost = () => {
    return (
        <div className="bg-blue-500 min-h-screen text-white font-sans">
          <Navbar />
          <div className="flex flex-col lg:flex-row mt-4">
            {/* Peta di sisi kiri */}
            <div className="lg:w-1/2 flex justify-center">
              <LocationMap />
            </div>
            {/* Pencarian populer dan daftar kampus di sisi kanan */}
            <div className="lg:w-1/2">
              <PopularSearch />
              <CampusList />
            </div>
          </div>
        </div>
      );
};

export default PencarianKost;
