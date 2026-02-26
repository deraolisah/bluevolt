import React from "react";
import Logo1 from "../../assets/partners/AceLabView.jpeg";
import Logo2 from "../../assets/partners/AceLabView.jpeg";
import Logo3 from "../../assets/partners/AceLabView.jpeg";


const logos = [Logo1, Logo2, Logo3];

const Partners = () => {
  return (
    <section className="container">
      <h2 className="section-title"> Our Partners </h2>
      <div className="marquee">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-16 w-auto mx-10 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;