// components/Card.jsx
import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="rounded-lg  overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-[250px] object-cover rounded-xl" />
      <div className="p-3 text-left">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
