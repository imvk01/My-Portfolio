import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-12 dark:bg-gray-900 text-center max-w-8xl mx-auto ">
      <p className="text-black dark:text-white font-semibold font-mono">
        © 2026 Vikash Verma — Crafted with precision
      </p>

      <div className="flex justify-center space-x-4 mt-3 text-indigo-600 dark:text-indigo-400 text-xl">
        <a
          href="https://www.linkedin.com/in/imvk1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-300 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/imvk01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-300 transition"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}