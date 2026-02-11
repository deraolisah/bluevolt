import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white text-navy-700 backdrop-blur-sm border-b border-px border-navy-200/50">
      <div className="container py-0!">
        <div className="flex justify-between items-center h-14 md:h-18">
          <Link to="/" onClick={() => {scrollTo(0,0) }} className="text-xl tracking-tight font-medium flex items-center gap-1">
          <img src={logo} alt='' className='rounded-full w-10 md:w-12 max-h-fit object-cover object-center' />
          <span> Bluevolt Marine </span>
          </Link>

          <nav className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  end
                  className={({ isActive }) =>
                    `px-2 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-navy-700 font-medium" : "text-navy-500 hover:text-navy-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href='#contact' className="btn-primary text-sm">
                Request a Vessel
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center bg-navy-100 text-navy-700 p-1 rounded-full focus:outline-none cursor-pointer"
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
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white w-full h-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                end
                className={({ isActive }) =>
                  `block px-0 py-2 rounded-md text-base ${
                    isActive ? "text-navy-700 font-medium" : "text-navy-500 hover:text-navy-700"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button className="btn-primary w-full mt-4">
              Find a Vessel
            </button>
          </div>
        </div>
      )}
    </header>
  )
}