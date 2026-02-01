import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Services', href: '/services' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-navy-700/80 text-white backdrop-blur-sm border-b border-px border-navy-50/30">
      <div className="container py-0">
        <div className="flex justify-between items-center h-16 md:h-18">
          <Link to="/" onClick={() => {scrollTo(0,0) }} className="text-xl tracking-tight">
            Bluevolt Marine
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
                      isActive ? "text-white font-medium" : "text-navy-300 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button className="btn-secondary text-sm">
                Request Survey
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-px rounded-md text-white hover:text-white focus:outline-none cursor-pointer"
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
        <div className="md:hidden bg-navy-700/0">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                end
                className={({ isActive }) =>
                  `block px-0 py-2 rounded-md text-base ${
                    isActive ? "text-white font-medium" : "text-navy-100 hover:text-white"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button className="btn-secondary w-full mt-4">
              Request Survey
            </button>
          </div>
        </div>
      )}
    </header>
  )
}