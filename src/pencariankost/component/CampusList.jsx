import React from "react";

const CampusList = () => {
  const cities = ["Yogyakarta", "Solo", "Surabaya", "Semarang", "Malang", "Jakarta", "Bekasi", "Depok"];

  return (
    <div className="p-6 text-white">
      <h2 className="font-bold mb-4 text-lg">Kampus berdasarkan kota</h2>
      {cities.map((city, index) => (
        <details key={index} className="mb-2 bg-blue-700 rounded-lg shadow-md">
          <summary className="cursor-pointer p-2 text-white font-medium">
            {city}
          </summary>
          <div className="p-2 text-sm bg-blue-800 text-gray-200">
            Daftar kampus di {city} (konten tambahan di sini)
          </div>
        </details>
      ))}
    </div>
  );
};

export default CampusList;
