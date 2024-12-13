import React from "react";

const PopularSearch = () => {
  const popular = ["UGM", "UNY", "ATMA JAYA", "AMIKOM", "UPN", "UKDW", "UMY", "UII"];

  return (
    <div className="p-6 text-white">
      <h2 className="font-bold mb-4 text-lg">Pencarian Terpopuler</h2>
      <div className="grid grid-cols-2 gap-4">
        {popular.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white text-blue-600 rounded-3xl text-center font-semibold hover:bg-blue-100 shadow-md"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularSearch;
