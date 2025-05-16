import { useState, useEffect } from "react";
import nglLogo from "../../assets/ngl-logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="bg-[#3147C3] text-white fixed w-full z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="h-[100px] w-[115px] relative">
                <NavLink to="/" className="block h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                      src={nglLogo}
                      alt="NGL Logo"
                      className="h-full w-full object-cover"
                      role="img"
                      aria-label="NGL Certification Logo"
                    />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex items-center space-x-12" role="menubar">
              <NavLink
                to="/"
                className="font-medium hover:text-gray-200"
                role="menuitem"
                aria-label="Home page"
              >
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="font-medium hover:text-gray-200"
                role="menuitem"
                aria-label="About us page"
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/contact"
                className="font-medium hover:text-gray-200"
                role="menuitem"
                aria-label="Contact page"
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/portal"
                className="font-medium hover:text-gray-200"
                role="menuitem"
                aria-label="Portal page"
              >
                PORTAL
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              title={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-blue-600 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-4" role="menubar">
            <NavLink
              to="/"
              className="text-white hover:text-gray-200 text-lg font-medium"
              role="menuitem"
              aria-label="Home page"
              onClick={toggleMenu}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-gray-200 text-lg font-medium"
              role="menuitem"
              aria-label="About us page"
              onClick={toggleMenu}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:text-gray-200 text-lg font-medium"
              role="menuitem"
              aria-label="Contact page"
              onClick={toggleMenu}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/portal"
              className="text-white hover:text-gray-200 text-lg font-medium"
              role="menuitem"
              aria-label="Portal page"
              onClick={toggleMenu}
            >
              PORTAL
            </NavLink>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
