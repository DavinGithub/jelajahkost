import React, { useEffect, useState, useRef } from "react";
import BerandaImage from "../assets/Beranda.svg";
import kotaImage from "../assets/kota.png"; 
import Navbar from "../component/navbar";
import { Home, MapPin, Wallet, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const img = new Image();
    img.src = BerandaImage;
    img.onload = () => {
      setImageHeight(img.height);
    };

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    navigate("/pencarian-kost"); 
  };

  return (
    <div className="relative w-full">
      <Navbar showNavbar={showNavbar} />

      <div
        className="relative w-full"
        style={{ height: `${imageHeight}px` }}
      >
        <div
          ref={imageRef}
          className="w-full h-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${BerandaImage})`,
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-10 pt-24">
        <div className="container mx-auto mt-[5%] pl-[5%]">
          <h1 className="text-white text-4xl font-bold">Mau cari kost?</h1>
          <h1 className="text-white text-3xl font-normal">Cari cepat dengan jelajah kost</h1>

          <div className="mt-6 bg-white p-4 shadow-lg w-[40%] rounded-lg">
            <div className="flex space-x-4 rounded-lg">
            <input
              type="text"
              placeholder="Masukkan kata pencarian disini"
              className="flex-grow py-4 px-5 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-4"
                onClick={handleSearchClick}
            >Cari</button>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-[2%]">
          <div className="mt-8">
            {/* Circles Container */}
            <div className="flex space-x-16 gap-[10%] mb-8">
              <div className="text-center">
                <div className="w-[147px] h-[146px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 mx-auto">
                  <Home className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-white font-medium">Kost Tersedia</p>
              </div>
              <div className="text-center">
                <div className="w-[147px] h-[146px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 mx-auto">
                  <MapPin className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-white font-medium">Lokasi Strategis</p>
              </div>
              <div className="text-center">
                <div className="w-[147px] h-[146px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 mx-auto">
                  <Wallet className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-white font-medium">Harga Terjangkau</p>
              </div>
            </div>
            
            <div className="mt-[18%] pl-4">
              <div className="">
                <h1 className="text-3xl font-bold">Daftarkan Kost Anda hanya di Jelajah Kost </h1>
                <h1 className="text-1xl font-normal">Dengan berbagai fitur dan layanan Anda bisa mudah mempromosikan Kost Anda. </h1>
              </div>
              <div className="flex justify-between"> 
                <button className="px-6 py-3 bg-[#2B7FBB] text-white hover:bg-blue-600 font-medium">
                    Daftarkan
                </button>
                <button className="px-6 py-3 bg-[#2B7FBB] text-white hover:bg-blue-600 font-medium">
                    Pelajari lebih lanjut
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[-10%] mr-[3%]">
            <div className="bg-white rounded-lg shadow-lg p-4 w-[585px] h-[736px] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">Kost Putri</h3>
                <p className="text-gray-600">Mulai dari Rp 800.000/bulan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-16 pr-[6%]">
  <div className="flex justify-center gap-[64px]">
    <div 
      className="w-[213px] h-[257px] relative rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${kotaImage})`, // Ensure this path is correct and accessible
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">Kost Jakarta</h3>
      </div>
    </div>

    <div 
      className="w-[213px] h-[257px] relative rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${kotaImage})`, // Use correct URL for placeholder images
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">Kost Bandung</h3>
      </div>
    </div>

    <div 
      className="w-[213px] h-[257px] relative rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${kotaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">Kost Surabaya</h3>
      </div>
    </div>

    <div 
      className="w-[213px] h-[257px] relative rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${kotaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">Kost Yogyakarta</h3>
      </div>
    </div>  

    <div 
      className="w-[213px] h-[257px] relative rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${kotaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">Kost Semarang</h3>
      </div>  
    </div>
    
  </div>
</div>

      </div>  
      <div className="flex items-center space-x-4 pl-[4%] mt-4">
        <div className="bg-black p-2 rounded-full shadow-md">
          <img src="../assets/Beranda.svg" alt="Icon" className="w-6 h-6" />
        </div>
        <span className="text-gray-800 text-xl font-bold">Jelajah Kost</span>
      </div>
      <span className="text-gray-800 text-xl font-normal pl-[7.5%]">Temukan Kost Idealmu dengan Sekali Jelajah!</span>
      <div className="mt-6 bg-white text-black py-4">
        <div className="container pl-[6%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <p className="text-lg">Tentang Kami</p>
            <p className="text-lg">Blog Jelajah Kost</p>
            <p className="text-lg">Kebijakan Privasi</p>
            <p className="text-lg">Promosikan Kost Anda</p>
            <p className="text-lg">Syarat dan Ketentuan Umum</p>
            <p className="text-lg">Pusat Bantuan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
