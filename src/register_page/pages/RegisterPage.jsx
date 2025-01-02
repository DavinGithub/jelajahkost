import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../component/LoadingSpinner';
import TextField from '../component/TextField';
import Image from '../assets/loginreact.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false); 

  const handleRegister = async () => {
    setLoading(true);
    try {
      
      const response = await fetch('https://jelajahkost.com/api/auth/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation,
          phone_number: phoneNumber, // Ensure your API expects phone_number
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('access_token', data.access_token);
        navigate('/'); // Redirect to home
      } else {
        // If there's an error, display the error message
        setErrorMessage(data.message || 'Password tidak sesuai!');
      }
    } catch (error) {
      // Handle any errors with the fetch request
      setErrorMessage('Terjadi kesalahan, coba lagi nanti.');
    }
    finally {
      setLoading(false); // Stop loading
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
                Daftar untuk pencari kost
              </h1>

              {/* Name */}
              <TextField
                label="Nama"
                type="text"
                placeholder="Masukan nama lengkap anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* Email */}
              <TextField
                label="Email"
                type="email"
                placeholder="Masukan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Password */}
              <TextField
                label="Password"
                type="password"
                placeholder="Masukan password anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                showToggleIcon={true}
              />
              {/* Confirm Password */}
              <TextField
                label="Konfirmasi Password"
                type="password"
                placeholder="Masukkan ulang password anda"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                showToggleIcon={true}
              />
              {/* Phone Number */}
              <TextField
                label="Nomor Handphone"
                type="text"
                placeholder="Masukan nomor handphone anda"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {/* Error Message */}
              {errorMessage && (
                <p className="text-red-500 text-center mt-4">{errorMessage}</p>
              )}
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4"
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : 'Daftar'} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
