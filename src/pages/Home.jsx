import React from 'react'
// import UnderConstruction from '../components/UnderConstruction';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import Team from '../components/home/Team';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesServed from '../components/home/IndustriesServed';
import Process from '../components/home/Process';
import VesselBrokerage from '../components/home/VesselBrokerage';
// import Testimonials from '../components/home/Testimonials';
import Clients from "../components/home/Clients.jsx";
// import CTASection from '../components/home/CTASection';
import ContactForm from '../components/home/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Team />
      <WhyChooseUs />
      <IndustriesServed />
      <Process />
      <VesselBrokerage />
      {/* <Testimonials /> */}
      <Clients />
      {/* <CTASection /> */}
      <ContactForm />
    </>
  )
}

export default Home;