import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Componets/Navbar/Topbar'
import Footer from './Componets/Footer/Footer'
import Home from './LinkPage/Home/HomePage';
import Menu from './LinkPage/MenuPage/Menu';
import Order from './LinkPage/OrderPage/OrderPage';
import Contact from './LinkPage/Contact/ContactPage';
import NotFound from './LinkPage/NotFoundPage/NotFound'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Handles unknown routes */}
      </Routes>
      <Footer />
    </>
  );
}
