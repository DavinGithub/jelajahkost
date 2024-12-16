import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login_page/pages/LoginPage'; 
import HomePage from './home_page/pages/HomePage'; 
import PusatBantuan from './pusatbantuan_page/pages/PusatBantuan.jsx';
import PencarianKost from './pencariankost/pages/PencarianKost'; 
import PilihanMasuk from './pilihanMasuk_page/pages/PilihanMasuk.jsx';
import ProductCard from './detail/detail.jsx';
import Detail from './detail/detail.jsx';
import Register from './register_page/pages/RegisterPage.jsx';
import ListKost from './listKost/ListKost.jsx';
import NotFoundPage from './home_page/component/notfound.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path ="/pilihan" element={<PilihanMasuk />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pencarian-kost" element={<PencarianKost />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path ="/register" element={<Register />} />
        <Route path="/listkos" element={<ListKost />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
