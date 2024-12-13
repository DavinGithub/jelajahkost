import React from 'react';

const ButtonChoice = ({ image, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-white rounded-sm shadow-md py-6 px-8 hover:bg-gray-100 transition transform hover:scale-105"
    >
      {image && <div className="h-8 w-8 mr-40">{image}</div>}
      <span className="text-xl font-semibold text-black text-center">{text}</span>
    </button>
  );
};

export default ButtonChoice;
