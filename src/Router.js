import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Payment from './pages/Payment/Payment';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/ProductsList/ProductsList';
import Footer from './components/Footer/Footer';
import NiceModal from '@ebay/nice-modal-react';
import Auth from './pages/Login/components/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <NiceModal.Provider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </NiceModal.Provider>
    </BrowserRouter>
  );
};

export default Router;
