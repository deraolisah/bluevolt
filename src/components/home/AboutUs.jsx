import React from 'react';
import ScrollReveal from '../animations/ScrollReveal';

const AboutUs = () => {
  return (
    <ScrollReveal direction="left" threshold={0.3}>
      <section className='container flex flex-col sm:flex-row bg-primary/5 text-primary'>
        <ScrollReveal direction="right" delay={0.2} className='flex w-full sm:w-1/4'>
          <h2 className='section-title'> About Us </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4} className='flex flex-col w-full sm:w-3/4 space-y-4'>
          <p>
            Trusted by oil & gas super majors and upstream operators for maritime vessel brokerage, uptime machinery, electrical and emergency system survey.

            <br/><br/>

            We source and vet offshore vessels based on operational requirements and technical specifications. 
            Our maritime officer-led assessments ensure vessel suitability for specific offshore applications.

            <br/><br/>

            Our network includes vessel owners, operators, and charter markets worldwide. We provide technical due diligence, market analysis, and negotiation support.

            <br/><br/>

            Whether for charter, purchase, or long-term lease, we ensure vessels meet operational, safety, and compliance standards.
          </p>
          <ScrollReveal direction="up" delay={0.6}>
            <a href='#request' className='btn-primary w-fit'>
              Request A Vessel
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </ScrollReveal>
  )
}

export default AboutUs;