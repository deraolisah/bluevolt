import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import curve from "../../assets/curve.png";
import hero1 from "../../assets/hero/HeroBg.png";
import hero2 from "../../assets/hero/slide-02.jpg";
import hero3 from "../../assets/hero/slide-03.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [hero1, hero2, hero3];
  const SLIDE_DURATION = 5000;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setKey(prev => prev + 1);
        return next;
      });
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleTimerClick = (index) => {
    setCurrent(index);
    setKey(prev => prev + 1);
  };

  // Simple text animation variant
  const textVariants = {
    hidden: { 
      y: 200,
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
    },
    visible: { 
      y: 0,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <section className="container relative p-0! h-[89.5vh] md:h-160 z-80 overflow-hidden">
      <motion.div 
        className="container text-center h-full w-full mx-auto text-white absolute z-100 top-0 left-0 flex flex-col justify-end items-start gap-6 bg-primary/40 p-8 md:p-12"
        initial="hidden"
        animate="visible"
        key={key}
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.3, duration: 0.6 }
            }
          }}
          className="rounded-full flex items-center bg-primary p-1.5 border border-gray-500/50"
        >
          <Link to="/contact" className="btn-secondary">
            Get In touch
          </Link>
          <Link to="/services" className="btn-secondary bg-transparent border-0 text-white">
            Learn More
          </Link>
        </motion.div>

        <motion.h1 
          variants={textVariants}
          className="text-2xl md:text-4xl lg:text-5xl text-left font-bold leading-normal"
        >
          Vessel Brokerage By Certified, <br/>
          Experienced Maritime Officers
        </motion.h1>

        {/* <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.6, duration: 0.6 }
            }
          }}
          className="text-lg md:text-xl text-left max-w-2xl"
        >
          Professional maritime services tailored to your needs
        </motion.p> */}
      </motion.div>

      <div className="h-full w-full mx-auto relative">
        {slides.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="hero"
            className={`absolute inset-0 w-full h-full object-cover object-center`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: i === current ? 1 : 0,
              scale: i === current ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 5 }
            }}
          />
        ))}

        <div className="w-[calc(100%-40px)] md:w-96 flex justify-center gap-3 z-20 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/10 backdrop-blur-md p-3 rounded-lg">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => handleTimerClick(i)}
              className="w-full h-1 bg-gray-300/60 rounded overflow-hidden cursor-pointer hover:bg-gray-400/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {i === current && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: SLIDE_DURATION / 1000,
                    ease: "linear"
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* <motion.img 
        src={curve} 
        alt="" 
        className="absolute bottom-0 left-0 w-full pointer-events-none z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      /> */}
    </section>
  );
};

export default Hero;