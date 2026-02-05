import { Routes, Route } from "react-router-dom";

// import UnderConstruction from "../components/UnderConstruction.jsx";
import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";

function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-body overflow-x-hidden bg-white text-navy-700 pt-8">
      {/* <UnderConstruction /> */}
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