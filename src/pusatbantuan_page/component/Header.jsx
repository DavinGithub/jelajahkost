import React from 'react';
import Image from '../assets/logokos.png';
const Header = () => {
  return (
    <header className="bg-white px-4 py-2 flex items-center">
                 <img src={Image} alt="Jelajah Kost" className="h-8" />
      <h1 className="text-blue-500 text-lg font-semibold ml-2">Jelajah Kost</h1>
    </header>
  );
};

export default Header;
