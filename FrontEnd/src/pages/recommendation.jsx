import React, { useState } from "react";
import rec1 from "./gallery/A.jpg";
import rec2 from "./gallery/B.jpg";
import rec3 from "./gallery/C.jpg";

export default function Recommendations() {
  const [selectedImage, setSelectedImage] = useState(null);

  const recommendations = [rec1, rec2, rec3];

  return (
    <div className="min-h-screen pt-32 px-6 md:px-16 bg-gray-50 lg:mt-5 mt-4">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        My <span className="text-indigo-600">Recommendations</span>
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
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
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
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
  );
}