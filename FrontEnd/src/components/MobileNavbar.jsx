"use client";
import React, { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";

function MobileNavbar({ isOpen, setIsOpen, onOpenForm }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const expertiseList = [
    { name: "Stroke", path: "/services/stroke" },
    { name: "Autism", path: "/services/autism" },
    { name: "Parkinson's", path: "/services/parkinsons" },
    { name: "Cerebral Palsy", path: "/services/cerebral-palsy" },
    { name: "Spinal Cord Injury", path: "/services/sci-injury" },
    { name: "Maysthineya Gravies", path: "/services/maysthineya-gravies" },
  ];

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Location", path: "/location" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    // Backdrop (close on outside click)
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed top-0 left-0 h-screen w-full bg-black/40 backdrop-blur-sm transition-all duration-300 ease-linear z-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Sidebar (clicking inside won't close) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 left-0 h-screen w-4/5 max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${
                location.pathname === link.path
                  ? "text-green-600 font-semibold"
                  : ""
              } hover:text-green-600 transition`}
            >
              {link.name}
            </Link>
          ))}

          {/* Expertise Dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center w-full py-2 text-left hover:text-green-600 transition"
            >
              <span>Our Expertise</span>
              {isDropdownOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {isDropdownOpen && (
              <ul className="ml-2 mt-1 border-l border-gray-200 pl-3 space-y-2">
                {expertiseList.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-1 ${
                        location.pathname === service.path
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      } hover:text-green-600 transition`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                navigate("/book-appointment");
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-full hover:bg-green-600 transition"
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              Enquiry
            </button>
            <button
              onClick={() => {
                onOpenForm(); // Open the callback form
                setIsOpen(false); // Close the mobile navbar
              }}
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
            >
              Callback
              <FontAwesomeIcon icon={faPhone} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;
