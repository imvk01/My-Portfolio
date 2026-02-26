import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import rec1 from "./gallery/A.jpg";
import rec2 from "./gallery/B.jpg";
import rec3 from "./gallery/C.jpg";

export default function Recommendations() {
  const [selectedImage, setSelectedImage] = useState(null);

  const recommendations = [rec1, rec2, rec3];

  return (
    <>
      <div className="min-h-screen pt-32 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 lg:mt-5 mt-4">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          My <span className="text-indigo-600 dark:text-indigo-400">Recommendations</span>
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((image, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer mb-7"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Recommendation ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 dark:bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>

      {/* ===== FOOTER ===== */}
      <div className="py-6 px-4 sm:px-6 lg:px-12 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-black dark:text-white font-semibold">
          © 2026 Vikash Verma. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2 text-indigo-600 dark:text-indigo-400">
          <a
            href="https://www.linkedin.com/in/imvk1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/imvk01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-300 text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}