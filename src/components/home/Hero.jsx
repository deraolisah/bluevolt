import { useEffect, useState } from "react";
import curve from "../../assets/curve.png";
import hero1 from "../../assets/hero/HeroBg.png";
import hero2 from "../../assets/hero/slide-02.jpg";
import hero3 from "../../assets/hero/slide-03.jpg";

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
    <section className="container relative p-0! h-[89.5vh] md:h-160 z-80">
      <div className="container text-center h-full w-full mx-auto text-white absolute z-100 top-0 left-0 flex flex-col justify-end items-start gap-6 bg-primary/40">
        <div className="rounded-full bg-primary p-1 border border-gray-500/50">
          <button className="btn-secondary">
            Get In touch
          </button>
          <button className="btn-secondary bg-transparent border-0 text-white">
            Learn More
          </button>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl text-left font-bold leading-normal"> 
          Vessel Brokerage By Certified, <br/>
          Experienced Maritime Officers
        </h1>
      </div>

      <div className="h-full w-full mx-auto relative"
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
        {/* <div className="w-[calc(100%-20px)] flex justify-center gap-3 z-20 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/10 backdrop-blur-xs p-2 rounded-lg">
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
        </div> */}
      </div>
    </section>
  );
};

export default Hero;