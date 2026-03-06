import { Routes, Route } from "react-router-dom";

// import UnderConstruction from "../components/UnderConstruction.jsx";
import Header from '../components/Header'
import Chatbot from "../components/Chatbot.jsx";
import Footer from '../components/Footer'

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import NotFound from "../pages/NotFound.jsx";

function AppRoutes() {

  const isHome = ['/', '/home', '/index'].includes(location.pathname);


  return (
    <div className="min-h-screen flex flex-col justify-between font-body overflow-x-hidden bg-white text-primary relative">
      {/* <UnderConstruction /> */}
      <Header isHome={isHome} />
      <Chatbot />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<NotFound />} />
      </Routes>        
      <Footer />
    </div>
  )
}

export default AppRoutes;