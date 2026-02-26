import React from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import resumeFile from "./download/Vikash_CV.pdf";
import { useDarkMode } from "../DarkModeContext"; // import context

function MobileNavbar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const { darkMode } = useDarkMode(); // use dark mode state

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Recommendations", path: "/recommendation" },
    { name: "Contact Me", path: "/contact-me" },
  ];

  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 left-0 h-screen w-4/5 max-w-xs 
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} 
        shadow-2xl rounded-r-3xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Gradient Header */}
        <div
          className={`flex justify-between items-center p-5 rounded-tr-3xl ${
            darkMode
              ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
          }`}
        >
          <h2 className="text-lg font-semibold tracking-wide">Welcome to My Portfolio</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/20 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6 space-y-3 font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? darkMode
                        ? "bg-gray-800 text-indigo-400 border-l-4 border-indigo-400"
                        : "bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600"
                      : darkMode
                      ? "hover:bg-gray-800 hover:text-indigo-400"
                      : "hover:bg-gray-100 hover:text-indigo-600"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Divider */}
          <div className={`border-t my-4 ${darkMode ? "border-gray-700" : "border-gray-300"}`}></div>

          {/* Resume Button */}
          <a
            href={resumeFile}
            download="Vikash_CV.pdf"
            onClick={() => setIsOpen(false)}
            className={`bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white px-4 py-3 rounded-full 
                       text-center font-medium 
                       shadow-md hover:shadow-lg 
                       transition-all duration-300 
                       hover:scale-105`}
          >
            Download CV
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;