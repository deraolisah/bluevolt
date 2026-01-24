import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import About from "../pages/About.jsx"

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default AppRoutes;