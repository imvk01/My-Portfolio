import React, { useEffect } from "react";

export default function PageWrapper({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .stagger-children").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-custom-background dark:bg-custom-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {children}
    </div>
  );
}
