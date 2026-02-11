import React from "react";
import Logo1 from "../../assets/clients/chevron.png";
import Logo2 from "../../assets/clients/hunt.png";
import Logo3 from "../../assets/clients/respol.png";
import Logo4 from "../../assets/clients/shell.png";
import Logo5 from "../../assets/clients/texaco.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-16 w-auto mx-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;