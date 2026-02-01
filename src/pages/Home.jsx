import React from 'react'
// import UnderConstruction from '../components/UnderConstruction';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesServed from '../components/home/IndustriesServed';
import Process from '../components/home/Process';
import VesselBrokerage from '../components/home/VesselBrokerage';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import ContactForm from '../components/home/ContactForm';

const Home = () => {
  return (
    <section className='overflow-x-hidden'>
      <Hero />
      <TrustStrip />
      <Process />
      <WhyChooseUs />
      <IndustriesServed />
      <VesselBrokerage />
      <Testimonials />
      <CTASection />
      <ContactForm />
    </section>
  )
}

export default Home;