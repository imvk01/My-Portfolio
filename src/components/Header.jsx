import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Sun, Moon, Download } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import resumeFile from "./download/Jass-CV.pdf";
import { useDarkMode } from "../DarkModeContext";
import logo from "./logo/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Recommendations", path: "/recommendation" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-custom-background-dark/80 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 md:px-10">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-3 group">
        <img
            src={logo}
            alt="Vikash Verma Logo"
            className="w-20 h-20 object-scale-down rounded-full border border-gray-300 dark:border-gray-600 shadow-xl transition-colors duration-300"
          />
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
            VK<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-surface text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-surface-light transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-surface text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-surface-light transition-all duration-300"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-surface"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-white/10">
            <a
              href={resumeFile}
              download="Jaskaran_Singh_CV.pdf"
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <Download size={15} />
              Resume
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-surface text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-surface-light transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
