// App.jsx
import React from 'react';
import Header from '../component/Header';
import Card from '../component/Card';
import Footer from '../component/Footer';
import pusatbantuan1 from "../assets/unsplash_2FPjlAyMQTA.svg"; 
import pusatbantuan2 from "../assets/unsplash_mfB1B1s4sMc.svg"; 


const PusatBantuan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-customBlue py-10 px-8 sm:px-30">
        <h2 className="text-2xl font-bold text-black mb-8 text-left">Hallo, apa yang bisa kami bantu?</h2>
        {/* Search Bar */}
        <div className="flex justify-start mb-16">
          <div className="w-full max-w-md flex items-start bg-white shadow-md rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Masukkan kata pencarian disini"
              className="flex-grow py-4 px-5 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-4">Cari</button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 max-w-5xl mx-auto">
        <Card title="Pencari Kost" image={pusatbantuan1} />

          <Card title="Pemilik Kost" image={pusatbantuan2} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PusatBantuan;
