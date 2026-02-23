import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Project = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Recommendation = lazy(() => import('./pages/recommendation'))


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/recommendation" element={<Recommendation />} />
            
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

