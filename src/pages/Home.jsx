import React, { useEffect } from 'react'
// import UnderConstruction from '../components/UnderConstruction';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import AboutUs from '../components/home/AboutUs';
import OurCatalogue from '../components/home/OurCatalogue';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import Partners from '../components/home/Partners';

import Team from '../components/home/Team';
import WhoWeServe from '../components/home/WhoWeServe';
import VesselBrokerage from '../components/home/VesselBrokerage';
// import Testimonials from '../components/home/Testimonials';
import RequestForm from '../components/home/RequestForm';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const { hash } = useLocation(); 
  useEffect(() => { 
    if (hash) { 
      const element = document.querySelector(hash); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); 
      } 
    } 
  }, [hash]);

  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutUs />
      <OurCatalogue />
      <WhyChooseUs />
      <HowItWorks />
      <Partners />



      <Team />
      <WhoWeServe />
      <VesselBrokerage />
      {/* <Testimonials /> */}
      <RequestForm />
    </>
  )
}

export default Home;