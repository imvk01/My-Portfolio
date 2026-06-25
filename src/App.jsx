import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { PropagateLoader } from "react-spinners";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Recommendation = lazy(() => import("./pages/recommendation"));

function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-custom-background dark:bg-custom-background-dark z-50 transition-colors duration-300">
        <div className="flex flex-col items-center gap-4">
          <PropagateLoader color="#8b5cf6" size={16} />
          <span className="text-sm text-gray-400 font-mono tracking-wider animate-pulse">loading</span>
        </div>
      </div>
    );
  }

  return <div className="animate-fade-in">{children}</div>;
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-custom-background dark:bg-custom-background-dark transition-colors duration-500 text-gray-900 dark:text-gray-100 noise-bg">
      <BrowserRouter>
        <ScrollToTop />
        <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
        <PageLoader>
          <Suspense
            fallback={
              <div className="fixed inset-0 flex justify-center items-center bg-custom-background dark:bg-custom-background-dark z-50">
                <PropagateLoader color="#8b5cf6" size={16} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact-me" element={<Contact />} />
              <Route path="/recommendation" element={<Recommendation />} />
            </Routes>
          </Suspense>
        </PageLoader>
      </BrowserRouter>
    </div>
  );
}
