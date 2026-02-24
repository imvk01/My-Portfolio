import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { PropagateLoader } from "react-spinners";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Recommendation = lazy(() => import("./pages/recommendation"));

// PageLoader component
function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader every time route changes
    setLoading(true);

    // small delay for animation effect
    const timer = setTimeout(() => setLoading(false), 600);

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
        <PropagateLoader color="#8b5cf6" size={20} />
      </div>
    );
  }

  return children;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <PageLoader>
          <Suspense
            fallback={
              <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
                <PropagateLoader color="#36d7b7" size={20} />
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