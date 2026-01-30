import { Routes, Route } from "react-router-dom";

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";

function AppRoutes() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<div> Page Not Found </div>} />
      </Routes>        
      <Footer />
    </div>
  )
}

export default AppRoutes;