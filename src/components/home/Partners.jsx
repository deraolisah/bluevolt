import React from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import Logo1 from "../../assets/partners/AceLabView.jpeg";
import Logo2 from "../../assets/partners/Lloyd.jpeg";

const logos = [Logo1, Logo2];

const Partners = () => {
  return (
    <ScrollReveal direction="up" threshold={0.2}>
      <section className='container flex flex-col sm:flex-row'>
        <ScrollReveal direction="right" delay={0.2} className='flex w-full sm:w-1/4'>
          <h2 className="section-title"> Our Partners </h2>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3} className='flex flex-col w-full sm:w-3/4 space-y-4'>
          <div className="mt-4">
            <StaggerContainer staggerDelay={0.2}>
              <div className="flex space-x-10 md:space-x-20">
                {logos.map((logo, i) => (
                  <StaggerItem key={i} direction="up">
                    <img
                      src={logo}
                      alt="client logo"
                      className="h-16 w-auto object-contain"
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </section>
    </ScrollReveal>
  );
};

export default Partners;