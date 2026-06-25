import React from "react";
import { X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import resumeFile from "./download/Vikash-CV.pdf";
import { useDarkMode } from "../DarkModeContext";

function MobileNavbar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const { darkMode } = useDarkMode();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Recommendations", path: "/recommendation" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 right-0 h-screen w-4/5 max-w-sm 
          bg-white dark:bg-custom-background-dark
          shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            JS<span className="text-accent">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-surface transition-colors"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-surface hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {link.name}
                {isActive && <ArrowRight size={16} />}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5">
            <a
              href={resumeFile}
              download="Vikash_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
