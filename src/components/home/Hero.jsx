import curve from "../../assets/curve.png";
import heroBackground from "../../assets/hero-background.jpg";
// import gridBg from "../../assets/grid.png";

import BackgroundCircles from "./BackgroundCircles.jsx";
// import TrustStrip from "./TrustStrip.jsx";


const Hero = () => {
  return (
    <section className="bg-white relative">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto relative z-10 pt-15 pb-5">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-navy-700 mb-6 leading-tight">
            Certified Maritime Surveys &&nbsp;
            <span className="relative whitespace-nowrap">
              Vessel Brokerage
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={620}
                height={20}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-base md:text-lg font-normal text-navy-500 mb-8 max-w-3xl mx-auto">
            Trusted by oil & gas operators for vessel inspections, uptime machinery surveys, and emergency system verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Request a Survey
            </a>
            <a
              href="#vessel-brokerage"
              className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Find a Vessel
            </a>
          </div>

        </div>
          {/* <div className="z-10 h-100 w-full mx-auto relative">
            <img
              src={heroBackground}
              className="w-full h-full object-cover object-center rounded-lg md:rounded-xl"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}

          <BackgroundCircles />

          {/* <TrustStrip /> */}
      </div>
    </section>
  )
}

export default Hero;