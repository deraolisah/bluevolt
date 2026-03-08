import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.jpeg";

import grid from "../assets/grid.png";

const Header = ({ isHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      clipPath: "circle(30px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      clipPath: "circle(200% at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const buttonVariants = {
    closed: {
      scale: 0.8,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.4
      }
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Sticky Header
    const handleScroll = () => {
      if (isHome) {
        window.scrollY > 50 ? setHeader(true) : setHeader(false);
      } else {
        return;
      } 
      return;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Handle hash links and navigation
  const handleHashLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Extract the hash part
    const [path, hash] = href.split('#');
    
    // If we're not on the home page, navigate to home first
    if (path && location.pathname !== path) {
      // Navigate to home page with hash
      window.location.href = href;
    } else {
      // We're on the home page, scroll to the element
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle regular navigation links
  const handleNavLinkClick = (href) => {
    setIsMenuOpen(false);
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`${
        header
          ? 'bg-white text-primary shadow-md py-2'
          : 'text-white bg-transparent py-6'
      } ${isHome ? 'fixed' : 'relative'} z-150 w-full transition-all duration-500`}
    >
      <div className="container flex justify-between items-center py-0!">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="z-50 text-base md:text-xl tracking-normal font-medium flex items-center justify-start h-fit gap-2"
          >
            <img 
              src={logo} 
              alt='BlueVoltMarine' 
              className='rounded-full h-10 w-10 object-cover object-center'
            />
            <span>BlueVoltMarine</span>
          </Link>
        </motion.div>

        <nav className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/#request" 
              className="btn-secondary text-nowrap hidden sm:flex" 
              onClick={(e) => handleHashLinkClick(e, '/#request')}
            >
              Find A Vessel
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => { setIsMenuOpen(!isMenuOpen);  }}
            className="z-50 inline-flex items-center justify-center bg-white text-primary px-2 py-2 rounded-full focus:outline-none cursor-pointer shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            aria-label="Toggle menu"
          >
            <motion.svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isMenuOpen ? "open" : "closed"}
            >
              {isMenuOpen ? (
                <motion.path
                  key="close"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  key="menu"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center overflow-hidden"
          >
            <img src={grid} alt='' className='fixed w-full h-full' />
            {/* Decorative background elements */}
            <motion.div
              className="absolute inset-0 opacity-5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
            </motion.div>

            <div className="relative z-10 text-center">
              <motion.div 
                className="space-y-6 px-4"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={navItemVariants}
                    custom={index}
                  >
                    <NavLink
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        `block px-0 py-2 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight transition-colors duration-300 ${
                          isActive 
                            ? "text-primary font-medium" 
                            : "text-gray-600 hover:text-primary"
                        }`
                      }
                      onClick={() => handleNavLinkClick(item.href)}
                    >
                      <motion.span
                        whileHover={{ 
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        className="inline-block"
                      >
                        {item.label}
                      </motion.span>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={buttonVariants}
                className="mt-12"
              >
                <Link 
                  to="/#request" 
                  className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2 group"
                  onClick={(e) => handleHashLinkClick(e, '/#request')}
                >
                  <span>Request a Vessel</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>

            {/* Close button */}
            {/* <motion.button
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;