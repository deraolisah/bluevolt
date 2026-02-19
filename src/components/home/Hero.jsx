import { useEffect, useState } from "react";
import curve from "../../assets/curve.png";
import hero1 from "../../assets/hero/slide-01.jpg";
import hero2 from "../../assets/hero/slide-02.jpg";
import hero3 from "../../assets/hero/slide-03.jpg";
// import BackgroundCircles from "./BackgroundCircles.jsx";

const Hero = () => {
  const slides = [hero1, hero2, hero3];
  const SLIDE_DURATION = 5000;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTimerClick = (index) => {
    setCurrent(index);
    // Optional: reset the timer animation when manually changing slides
  };

  // const handleMouseEnter = () => {
  //   setIsPaused(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsPaused(false);
  // };

  return (
    <section className="container relative py-0! px-0!">
      <div className="text-center h-full w-full mx-auto absolute z-10 left-1/2 -translate-x-1/2 pt-10 text-white bg-black/40 backdrop-blur-xs px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-normal">
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
          <br />
          &nbsp;by Certified Maritime Officers
        </h1>

        <p className="text-base font-normal mb-6 max-w-3xl mx-auto">
          Trusted by oil & gas super majors and upstream operators for maritime
          vessel brokerage, uptime machinery, electrical and emergency system
          survey.
        </p>

        <div className="flex gap-3 justify-center">
          <a href="#vessel-brokerage" className="bg-white text-navy-600 btn-secondary inline-flex items-center justify-center px-8 py-3">
            Learn More
          </a>
          <a href="#contact" className="btn-primary inline-flex items-center justify-center px-8 py-4">
            Find Vessel
          </a>
        </div>
      </div>

      <div className="mt-6 md:mt-10 h-140 w-full mx-auto relative"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="hero"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="w-[calc(100%-20px)] flex justify-center gap-3 z-20 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/10 backdrop-blur-xs p-2 rounded-lg">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleTimerClick(i)}
              className="w-full h-0.5 bg-gray-300/60 rounded overflow-hidden cursor-pointer hover:bg-gray-400/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <div
                  className="h-full bg-white animate-slide-progress"
                  style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* <BackgroundCircles /> */}
    </section>
  );
};

export default Hero;