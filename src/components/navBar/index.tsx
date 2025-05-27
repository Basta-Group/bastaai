import { useState, useEffect } from "react";
import aiLogo from "../../assets/basta-ai-logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed p-2 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000]/40 backdrop-blur-md" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="block">
              <img
                src={aiLogo}
                alt="BastaAI Logo"
                title="BastaAI Logo"
                className="h-8 w-auto object-contain"
                role="img"
                aria-label="BastaAI Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:mx-5 lg:mx-20">
            <div
              className="text-white hover:text-gray-300 text-base font-medium cursor-pointer"
              role="menuitem"
              aria-label="Home page"
            >
              Home
            </div>
            <div
              className="text-white hover:text-gray-300 text-base font-medium cursor-pointer"
              role="menuitem"
              aria-label="About us page"
            >
              About Us
            </div>
            <div
              className="text-white hover:text-gray-300 text-base font-medium cursor-pointer"
              role="menuitem"
              aria-label="News and Media page"
            >
              News & Media
            </div>
            <div
              className="text-white hover:text-gray-300 text-base font-medium cursor-pointer"
              role="menuitem"
              aria-label="Careers page"
            >
              Careers
            </div>
            <div
              className="text-white hover:text-gray-300 text-base font-medium cursor-pointer"
              role="menuitem"
              aria-label="Contact us page"
            >
              Contact Us
            </div>
          </div>

          {/* Button on the right */}
          <div className="hidden md:flex">
            <div
              className="bg-gradient-to-r from-[#006EFF] to-[#00BFFF] text-white px-4 py-3 rounded-lg text-sm font-medium cursor-pointer uppercase"
              role="menuitem"
              title="Investor Deck"
              aria-label="Investor Deck page"
            >
              Investor Deck
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
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
                  xmlns="http://w3.org/2000/svg"
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
        className={`fixed inset-y-0 right-0 w-64 bg-[#1A1A2E] transform transition-transform duration-300 ease-in-out z-50 ${
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
              className="text-white hover:text-gray-300"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://w3.org/2000/svg"
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
            <div
              className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
              role="menuitem"
              aria-label="Home page"
              onClick={toggleMenu}
            >
              Home
            </div>
            <div
              className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
              role="menuitem"
              aria-label="About us page"
              onClick={toggleMenu}
            >
              About Us
            </div>
            <div
              className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
              role="menuitem"
              aria-label="News and Media page"
              onClick={toggleMenu}
            >
              News & Media
            </div>
            <div
              className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
              role="menuitem"
              aria-label="Careers page"
              onClick={toggleMenu}
            >
              Careers
            </div>
            <div
              className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
              role="menuitem"
              aria-label="Contact us page"
              onClick={toggleMenu}
            >
              Contact Us
            </div>
            <div
              className="text-white hover:text-gray-300 text-lg font-medium cursor-pointer"
              role="menuitem"
              aria-label="Investor Deck page"
              onClick={toggleMenu}
            >
              Investor Deck
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/50 z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
