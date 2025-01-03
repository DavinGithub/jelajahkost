import React, { useEffect, useState, useRef } from "react";
import BerandaImage from "../assets/Beranda.svg";
import kotaImage from "../assets/kota.png"; 
import kosreguler from "../assets/kostreguler.svg"; 
import kosekslusif from "../assets/kosekslusif.svg"; 
import kontrakkan from "../assets/kontrakkan.svg"; 
import kotaImage2 from "../assets/jakarta.svg"; 
import kotaImage3 from "../assets/malang.svg"; 
import kotaImage4 from "../assets/surabaya.svg"; 
import kotaImage5 from "../assets/kota1.svg"; 
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import logo from "../assets/logokos.png"; 
import { Home, MapPin, Wallet, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import KostComponent from "../component/kostComponent";

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
    navigate("/listkos"); 
  };

  const handleCity = () => {
    navigate("/listkos"); 
  };

  const handleNotfound = () => {
    navigate("/notfound"); 
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
              <button
                className="bg-blue-500 text-white px-6 py-4"
                onClick={handleSearchClick}
              >
                Cari
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-[2%]">
          <div className="mt-8">
            {/* Circles Container */}
            <div className="flex space-x-16 gap-[10%] mb-8">
              <div className="text-center">
                <div className="w-[147px] h-[146px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 mx-auto">
                  <img
                    src={kosreguler} 
                    alt="Kost Reguler"
                    className="w-[147px] h-[146px] object-cover rounded-full"
                  />
                </div>
                <p className="text-white font-medium">Kost Reguler</p>
              </div>
              <div className="text-center">
                <div className="w-[147px] h-[146px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 mx-auto">
                  <img
                    src={kosekslusif} 
                    alt="Kost Ekslusif"
                    className="w-[147px] h-[146px] object-cover rounded-full"
                  />
                </div>
                <p className="text-white font-medium">Kost Ekslusif</p>
              </div>
              <div className="text-center">
                <div className="w-[147px] h-[146px] rounded-full bg-white shadow-lg flex items-center justify-center mb-2 mx-auto">
                  <img
                    src={kontrakkan} 
                    alt="Kontrakkan"
                    className="w-[147px] h-[146px] object-cover rounded-full"
                  />
                </div>
                <p className="text-white font-medium">Kontrakkan</p>
              </div>
            </div>
            
            <div className="mt-[23%] pl-4   ">
              <div>
                <h1 className="text-3xl font-bold">Daftarkan Kost Anda hanya di Jelajah Kost</h1>
                <h1 className="text-1xl font-normal">Dengan berbagai fitur dan layanan Anda bisa mudah mempromosikan Kost Anda.</h1>
              </div>
              
            </div>
          </div>
          <div className="pr-12">
          {/* Replace static block with KostComponent */}
          <KostComponent />
          </div>
        </div>
        
        {/* Rest of the code remains unchanged */}
        <div className="mt-10 grid grid-cols-4 gap-4 px-[5%]">
  <div className="relative w-full h-[150px] rounded-lg shadow-md overflow-hidden" onClick={handleCity}>
    <img
      src={kotaImage}
      alt="Jakarta"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <p className="text-white text-lg font-bold">Yogyakarta</p>
    </div>
  </div>

  <div className="relative w-full h-[150px] rounded-lg shadow-md overflow-hidden"onClick={handleNotfound}>
    <img
      src={kotaImage3}
      alt="Malang"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <p className="text-white text-lg font-bold">Malang</p>
    </div>
  </div>

  <div className="relative w-full h-[150px] rounded-lg shadow-md overflow-hidden"onClick={handleNotfound}>
    <img
      src={kotaImage4}
      alt="Surabaya"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <p className="text-white text-lg font-bold">Surabaya</p>
    </div>
  </div>

  <div className="relative w-full h-[150px] rounded-lg shadow-md overflow-hidden"onClick={handleNotfound}>
    <img
      src={kotaImage5}
      alt="Bandung"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <p className="text-white text-lg font-bold">Bandung</p>
    </div>
  </div>
</div>


      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
