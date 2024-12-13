import React, { useState } from 'react';
import TextField from '../component/TextField';
import Image from '../assets/loginreact.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-500">
        <div className="flex w-11/12 max-w-5xl overflow-hidden">
          <div className="w-1/2 bg-blue-500 flex items-center justify-center px-2">
            <img src={Image} alt="Illustration" className="max-w-full h-auto" />
          </div>
          <div className="w-1/2 flex items-center justify-center px-6">
            <div className="bg-white shadow-md rounded-[50px] w-11/12 max-w-sm p-8 h-[650px] flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                  Daftar untuk pencari kost
                </h1>
  
                {/* Email */}
                <TextField
                  label="Nama"
                  type="name"
                  placeholder="Masukan nama lengkap anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Email"
                  type="name"
                  placeholder="Masukan email anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Masukan password anda"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  showToggleIcon={true}
                />
                <TextField
                  label="Komfrimasi password"
                  type="text"
                  placeholder="Masukkan ulang password anda"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                   <TextField
                  label="Nomor Handphone"
                  type="text"
                  placeholder="Masukan nomor handphone anda"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
               
              </div>
              <div className="text-center text-sm text-gray-600">
              Dengan klik ini Saya Setuju, saya menyatakan
bahwa saya telah membaca dan
menyetujui Syarat dan Ketentuan serta
Kebijakan Privasi Jelajah Kost.
              
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4">
                Daftar
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Register;
