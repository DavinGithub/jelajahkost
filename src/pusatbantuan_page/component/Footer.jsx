import React from 'react';
import { FaHome, FaUserAlt, FaEnvelope, FaPhoneAlt, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10 px-6">
      {/* Main Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Produk dan Fitur */}
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <FaHome className="text-blue-500" />
            <span>Produk dan Fitur untuk Penyewaan</span>
          </h3>
          <p className="mt-2 text-sm">
            Kami menyediakan Produk kamar tersedia serta fitur-fitur yang ada di Jelajah Kost
          </p>
          <a href="#" className="text-blue-500 text-sm mt-1 block">Selengkapnya</a>
        </div>

        {/* Kebijakan Jelajah Kost */}
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <FaShieldAlt className="text-blue-500" />
            <span>Kebijakan Jelajah Kost</span>
          </h3>
          <p className="mt-2 text-sm">
            Kebijakan Privasi Jelajah Kost
          </p>
          <a href="#" className="text-blue-500 text-sm mt-1 block">Selengkapnya</a>
        </div>

        {/* Akun Privasi Pencari Kost */}
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <FaUserAlt className="text-blue-500" />
            <span>Akun Privasi Pencari Kost</span>
          </h3>
          <p className="mt-2 text-sm">
            Lupa Password? Apa yang harus saya lakukan
          </p>
          <a href="#" className="text-blue-500 text-sm mt-1 block">Selengkapnya</a>
        </div>

        {/* Akun Privasi Pemilik Kost */}
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <FaUserAlt className="text-blue-500" />
            <span>Akun Privasi Pemilik Kost</span>
          </h3>
          <p className="mt-2 text-sm">
            Lupa Password? Apa yang harus saya lakukan
          </p>
          <a href="#" className="text-blue-500 text-sm mt-1 block">Selengkapnya</a>
        </div>

        {/* Keamanan Jelajah Kost */}
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <FaShieldAlt className="text-blue-500" />
            <span>Keamanan Jelajah Kost</span>
          </h3>
          <p className="mt-2 text-sm">
            Bagaimana transaksi aman, dan lain-lain
          </p>
          <a href="#" className="text-blue-500 text-sm mt-1 block">Selengkapnya</a>
        </div>

        {/* Rekomendasi Kost */}
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <FaThumbsUp className="text-blue-500" />
            <span>Rekomendasi Kost</span>
          </h3>
          <p className="mt-2 text-sm">
            Jelajah Kost menyediakan rekomendasi kost yang tersedia sesuai lokasi Anda
          </p>
          <a href="#" className="text-blue-500 text-sm mt-1 block">Selengkapnya</a>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="border-t border-gray-300 mt-8 pt-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 space-y-4 lg:space-y-0">
          {/* Left Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500">Tentang Kami</a>
            <a href="#" className="hover:text-blue-500">Promosikan Kost Anda</a>
            <a href="#" className="hover:text-blue-500">Pusat Bantuan</a>
          </div>

          {/* Right Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500">Blog Jelajah Kost</a>
            <a href="#" className="hover:text-blue-500">Kebijakan Privasi</a>
            <a href="#" className="hover:text-blue-500">Syarat dan Ketentuan Umum</a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500">
        <div className="text-center lg:text-left">
          © 2024 Jelajah Kost. All Rights Reserved.
        </div>
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 mt-4 lg:mt-0">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span>cs@jelajahkost.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-500" />
            <span>+62 853-3916-0161</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
