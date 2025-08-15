import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div
              className={`font-bold text-2xl ${
                isScrolled || !isHomePage ? "text-primary-600" : "text-white"
              }`}
            >
              Bereket H<span className="text-primary-400">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <ScrollLink
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-white"
                  } font-medium hover:text-primary-500 transition cursor-pointer`}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-white"
                  } font-medium hover:text-primary-500 transition cursor-pointer`}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-white"
                  } font-medium hover:text-primary-500 transition cursor-pointer`}
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-white"
                  } font-medium hover:text-primary-500 transition cursor-pointer`}
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-white"
                  } font-medium hover:text-primary-500 transition cursor-pointer`}
                >
                  Contact
                </ScrollLink>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-secondary-900"
                  } font-medium hover:text-primary-500 transition`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-secondary-900"
                  } font-medium hover:text-primary-500 transition ${
                    location.pathname === "/about" ? "text-primary-500" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-secondary-900"
                  } font-medium hover:text-primary-500 transition ${
                    location.pathname === "/projects" ? "text-primary-500" : ""
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className={`${
                    isScrolled ? "text-secondary-900" : "text-secondary-900"
                  } font-medium hover:text-primary-500 transition ${
                    location.pathname === "/contact" ? "text-primary-500" : ""
                  }`}
                >
                  Contact
                </Link>
              </>
            )}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download="Bereket-CV.pdf"
              className={`px-5 py-2 rounded-md font-medium ${
                isScrolled || !isHomePage
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "bg-white text-primary-600 hover:bg-opacity-90"
              } transition`}
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center ${
              isScrolled || !isHomePage ? "text-secondary-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {isHomePage ? (
            <>
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-secondary-900 font-medium hover:text-primary-500 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-secondary-900 font-medium hover:text-primary-500 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-secondary-900 font-medium hover:text-primary-500 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-secondary-900 font-medium hover:text-primary-500 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-secondary-900 font-medium hover:text-primary-500 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-secondary-900 font-medium hover:text-primary-500 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-secondary-900 font-medium hover:text-primary-500 transition ${
                  location.pathname === "/about" ? "text-primary-500" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`text-secondary-900 font-medium hover:text-primary-500 transition ${
                  location.pathname === "/projects" ? "text-primary-500" : ""
                }`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`text-secondary-900 font-medium hover:text-primary-500 transition ${
                  location.pathname === "/contact" ? "text-primary-500" : ""
                }`}
              >
                Contact
              </Link>
            </>
          )}
          <a
            href="/resume.pdf"
            download="Bereket-CV.pdf"
            className={`px-5 py-2 rounded-md font-medium ${
              isScrolled || !isHomePage
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "bg-white text-primary-600 hover:bg-opacity-90"
            } transition`}
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
