import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../component/Header';
import ButtonChoice from '../component/ButtonChoice';
import KostImage from '../assets/Mask group.svg';
import HouseIcon from '../assets/Vector.svg';


const PilihanMasuk = () => {
  const navigate = useNavigate();
  const handlePencariKostClick = () => {
    navigate("/"); 
  };

  const handlePemilikKostClick = () => {
    navigate("/")
    console.log('Pemilik Kost clicked');
  };

  return (
    <div className="min-h-screen bg-blue-500 text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-4">
        <div className="flex justify-center mt-8">
          <h2 className="text-2xl font-bold">Selamat Datang!</h2>
        </div>
        <div className="flex flex-col mt-28 items-start">
          <p className="text-lg mb-6">Hallo, Anda ingin masuk sebagai</p>
          <div className="space-y-10">
            <ButtonChoice
              image={<img src={KostImage} alt="Pencari Kost Icon" className="h-10 w-20" />}
              text="Pencari Kost"
              onClick={handlePencariKostClick}
            />
            <ButtonChoice
              image={<img src={HouseIcon} alt="Pemilik Kost Icon" className="h-10 w-20" />}
              text="Pemilik Kost"
              onClick={handlePemilikKostClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PilihanMasuk;
