import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound.jsx";
import ProfileLayout from "../layouts/ProfileLayout.jsx";
import PublicLayout from "../layouts/PublicLayout.jsx";


import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Olamide from "../pages/Olamide.jsx";

function AppRoutes() {


  return (
    
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>


        <Route element={<ProfileLayout />}>
          <Route path="/olamide" element={<Olamide />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>        
      
  )
}

export default AppRoutes;