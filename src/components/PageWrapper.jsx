import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-custom-background dark:bg-custom-background-dark text-black dark:text-white transition-colors duration-300 p-6">
      {children}
    </div>
  );
}