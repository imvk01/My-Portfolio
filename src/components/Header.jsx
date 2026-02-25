import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import logo from "./logo/logo.jpg";
import resumeFile from "./download/Vikash_CV.pdf"; // Your PDF file

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navbar links
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Recommendations", path: "/recommendation" },
    { name: "Contact Me", path: "/contact-me" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-100 shadow-md z-50 backdrop-blur-2xl">
    {/* Mobile Navbar */}
    <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen}  />
  
    {/* Header Main */}
    <div className="flex justify-between items-center max-w-7xl mx-auto p-3 md:px-10">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Vikash Verma Logo"
          className="w-24 h-24 object-scale-down rounded-full border border-gray-300 shadow-xl"
        />
      </Link>
  
      {/* Mobile / Medium Menu Button */}
      <button
        className="lg:hidden text-gray-800"  // visible on small + md, hidden on lg+
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>
  
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 font-semibold text-gray-800">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition-transform hover:scale-105 uppercase font-serif ${
              location.pathname === link.path ? "text-indigo-500" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
  
        {/* Download Resume Button */}
        <a
          href={resumeFile}
          download="Vikash_Resume.pdf"
          className="ml-4 bg-blue-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full font-medium transition-transform hover:scale-105"
        >
          Download CV
        </a>
      </nav>
    </div>
  </header>
  );
}