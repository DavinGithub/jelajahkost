import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import TextField from '../component/TextField';
import Image from '../assets/loginreact.png';
import LoadingSpinner from '../component/LoadingSpinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // New state to manage loading

  const navigate = useNavigate(); // To redirect to the homepage after successful login

  const handleLogin = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('https://bpkbautodigital.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          phone_number: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem("access_token", data.access_token);
        navigate("/home"); // Redirect to home
      } else {
        setErrorMessage(data.message || 'Email, password, atau nomor handphone salah!');
      }
    } catch (error) {
      setErrorMessage('Akun tidak ditemukan');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Redirect to registration page
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

              {/* Displaying error message alert */}
              {errorMessage && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <span className="font-medium">Error:</span> {errorMessage}
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegisterClick();
                }}
                className="text-blue-500 hover:underline"
              >
                Daftarkan sekarang!
              </a>
              <br />
             
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4"
              disabled={loading} // Disable the button when loading
            >
              {loading ? <LoadingSpinner /> : 'Masuk'} {/* Show loading spinner if loading */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
