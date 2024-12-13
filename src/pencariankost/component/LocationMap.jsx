import React from "react";
import mapImage from "../assets/Premium Vector _ Gps icon mockup on the city map with pin location and cloud 3D illustration (1) 1.svg"; // Peta


const LocationMap = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-90 h-90">
        {/* Gambar peta */}
        <img src={mapImage} alt="Map" className="w-full h-full rounded-lg shadow-lg" />
        
      </div>
    </div>
  );
};

export default LocationMap;
