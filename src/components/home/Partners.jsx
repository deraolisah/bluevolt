import React from "react";
import Logo1 from "../../assets/partners/AceLabView.jpeg";
import Logo2 from "../../assets/partners/Lloyd.jpeg";

const logos = [Logo1, Logo2];

const Partners = () => {
  return (
    <section className='container flex flex-col sm:flex-row'>
      <div className='flex w-full sm:w-1/4'>
        <h2 className="section-title"> Our Partners </h2>
      </div>
      <div className='flex flex-col w-full sm:w-3/4 space-y-4'>
      <div className="mt-4">
        <div className="flex space-x-10 md:space-x-20">
          {logos.map((logo, i) => (
            <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Partners;