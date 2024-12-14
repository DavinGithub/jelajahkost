import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login_page/pages/LoginPage'; 
import HomePage from './home_page/pages/HomePage'; 
import PusatBantuan from './pusatbantuan_page/pages/PusatBantuan.jsx';
import PencarianKost from './pencariankost/pages/PencarianKost'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pencarian-kost" element={<PencarianKost />} />
      </Routes>
    </Router>
  );
};

export default App;
