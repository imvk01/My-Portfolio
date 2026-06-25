import React, { useState } from "react";
import rec1 from "./gallery/A.jpg";
import rec2 from "./gallery/B.jpg";
import rec3 from "./gallery/C.jpg";
import { X } from "lucide-react";
import Footer from "../components/Footer";

export default function Recommendations() {
  const [selectedImage, setSelectedImage] = useState(null);

  const recommendations = [rec1, rec2, rec3];

  return (
    <>
      <div className="min-h-screen bg-custom-background dark:bg-custom-background-dark pt-28 sm:pt-32 pb-16 px-6 md:px-16">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">References</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            My <span className="gradient-text">Recommendations</span>
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recommendations.map((image, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden cursor-pointer hover-lift group"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Recommendation ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-8 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Recommendation preview"
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl animate-scale-in"
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
