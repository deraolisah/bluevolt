import React from 'react'
import { Outlet } from 'react-router-dom';


// import UnderConstruction from "../components/UnderConstruction.jsx";
import Header from '../components/Header'
import Chatbot from "../components/Chatbot.jsx";
import Footer from '../components/Footer'


const PublicLayout = () => {
    
  const isHome = ['/', '/home', '/index'].includes(location.pathname);


  return (
    <div className="min-h-screen flex flex-col justify-between font-body overflow-x-hidden bg-white text-primary relative">
      {/* <UnderConstruction /> */}
      <Header isHome={isHome} />
      <Chatbot />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default PublicLayout;