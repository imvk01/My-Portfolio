import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500 font-mono">
          © {new Date().getFullYear()} Vikash Verma
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/imvk1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/imvk01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
