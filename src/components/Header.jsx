import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ]

  useEffect(() => {
    if(isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);



  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once on mount

  return (
    // <header className="sticky bg-white/50 backdrop-blur-xs w-full top-0 z-150">
    <header className={`${header ? 'bg-white text-primary shadow-md py-3' : 'text-white bg-transparent py-6'} fixed z-150 w-full transition-all duration-500`}>
      <div className="container flex justify-between items-center py-0!">
        <Link to="/" onClick={() => {scrollTo(0,0) }} className="z-80 text-base md:text-xl tracking-normal font-medium flex items-center justify-start h-fit gap-2">
          <img src={logo} alt='' className='rounded-full h-11 object-cover object-center' />
          <span > BlueVoltMarine </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link to="/#request" className="btn-secondary text-nowrap hidden sm:flex" onClick={() => {setIsMenuOpen(false)}}>
            Find A Vessel
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-100 inline-flex items-center justify-center bg-white text-primary px-2 py-2 rounded-full focus:outline-none cursor-pointer shadow border border-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>          
      </div>

      <div className={`bg-white w-full h-full fixed top-0 left-0 z-40 flex flex-col items-center justify-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}>
        <div className="px-4 py-2 space-y-2 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end
              className={({ isActive }) =>
                `block px-0 py-2 rounded-md text-2xl text-center ${
                  isActive ? "text-primary font-medium" : "text-navy-500 hover:text-primary"
                }`
              }
              onClick={() => { setIsMenuOpen(false); scrollTo(0,0) }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <Link to="/#request" className="btn-primary w-fit mx-auto mt-6" onClick={() => setIsMenuOpen(false)}>
          Request a Vessel
        </Link>
      </div>
    </header>
  )
}