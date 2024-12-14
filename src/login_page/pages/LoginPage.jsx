import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import TextField from '../component/TextField';
import Image from '../assets/loginreact.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages

  const navigate = useNavigate(); // To redirect to the homepage after successful login

  const handleLogin = async () => {
    try {
      const response = await fetch('https://bpkbautodigital.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          phone_number: phoneNumber, // Ensure your API expects phone_number
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If the login is successful, redirect to the homepage
        navigate('/home');
      } else {
        // If there's an error (like invalid credentials), show the error message
        setErrorMessage(data.message || 'Email atau password salah!');
      }
    } catch (error) {
      // Handle any errors with the fetch request
      setErrorMessage('Terjadi kesalahan, coba lagi nanti.');
    }
  };

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
                Masuk sebagai Pencari Kost
              </h1>

              {errorMessage && (
                <div className="text-red-500 text-center mb-4">
                  {errorMessage}
                </div>
              )}

              <TextField
                label="Email"
                type="email"
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
                label="Nomor Handphone"
                type="text"
                placeholder="Masukan nomor handphone anda"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="text-center text-sm text-gray-600">
              Belum punya akun Jelajah Kost?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Daftarkan sekarang!
              </a>
              <br />
              <a href="#" className="text-blue-500 hover:underline">
                Lupa password?
              </a>
            </div>
            <button
              onClick={handleLogin} // Call the handleLogin function when the button is clicked
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
