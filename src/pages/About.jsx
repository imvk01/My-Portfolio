import React, { useEffect, useRef } from "react";
import profileImage from "./gallery/abc.png";
import dhLogo from "./gallery/delivery-hero.png";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import ueLogo from "./gallery/ue.png";
import lpuLogo from "./gallery/lpu.png";
import certificate from "./gallery/certificate.png";
import Footer from "../components/Footer";
import TechExpertise from "../components/TechExpertise";
import { ChatBubbles, Rocket } from "../components/Illustrations";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const introRef = useReveal();
  const techRef = useReveal();
  const expRef = useReveal();
  const eduRef = useReveal();
  const langRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      <div className="min-h-screen w-full bg-custom-background dark:bg-custom-background-dark pt-28 sm:pt-32 pb-16 px-6 sm:px-10 lg:px-20">
        {/* ===== HEADER ===== */}
        <div className="max-w-6xl mx-auto text-center mb-20 animate-fade-up">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">About</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
            Get to know <span className="gradient-text">me</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm <span className="font-semibold text-gray-900 dark:text-white">Vikash Verma</span>,
            a Full-Stack Software Engineer working at{" "}
            <span className="font-semibold text-accent">Delivery Hero SE</span> as a Werkstudent
            while finishing my M.Sc. in Software Engineering at the University of Europe for Applied Sciences, Berlin.
          </p>
        </div>

        {/* ===== PROFILE + INTRO ===== */}
        <div ref={introRef} className="reveal max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-pink-400/30 rounded-full blur-lg" />
              <img
                src={profileImage}
                alt="Vikash Verma"
                className="relative h-64 object-cover rounded-full shadow-xl border border-white/40"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              <span className="gradient-text">Full-Stack Software Engineer</span>
            </h2>
            <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-5">TypeScript · React · Node.js · AWS · AI/LLM</p>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              At Delivery Hero, I build AI-driven internal tools with LLMs and RAG, used by 200+
              stakeholders across brands like foodpanda, talabat, Glovo and PedidosYa.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I also shipped CareerConnect, a subscription-based MERN + TypeScript SaaS platform,
              end to end: JWT/RBAC, PayPal billing, CI/CD to AWS and 99.9% uptime.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My M.Sc. finishes in February 2027, and I'm looking for a full-time Software Engineer
              role in Germany from then.
            </p>
          </div>
        </div>

        {/* ===== TECHNICAL EXPERTISE ===== */}
        <div ref={techRef} className="reveal max-w-6xl mx-auto mb-24">
          <TechExpertise />
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div ref={expRef} className="reveal max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-accent tracking-widest uppercase">Career</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">Experience</h2>
          </div>

          <div className="space-y-5">
            {/* Delivery Hero */}
            <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover-lift">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Current</span>
                </div>
                <h3 className="text-xl font-semibold text-accent mb-1">
                  Full-Stack Software Engineer (Werkstudent)
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Delivery Hero SE — Berlin, Germany · June 2026 – Present
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Co-built DH CapEx Bot (Python, Vertex AI, Gemini, RAG), used by 200+ global stakeholders; cut request drafting time by ~69% and saved 4,000+ hours annually
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Rebuilt the Tech Strategy & Operations Command Center in React and TypeScript with RBAC, halving documentation search time for 20+ engineers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Built the GTC dashboard (React, TypeScript, Looker Studio, BigQuery) with interactive visualizations and automated data-correction workflows; authored and reviewed 25+ PRs
                  </li>
                </ul>
              </div>
              <img
                src={dhLogo}
                alt="Delivery Hero"
                className="w-auto h-auto sm:w-72 sm:h-44 object-contain bg-white p-3 rounded-xl shadow-md"
              />
            </div>

            {/* Previous Experience */}
            <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover-lift">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-accent mb-1">
                  Full-Stack Developer Intern
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  UpgradCampus — India · January 2024 – May 2024
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Built a multi-tenant real-estate platform on the MERN stack with 10+ core features and RBAC
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Cut unnecessary component re-renders by 40% using React.memo, Context API and code-splitting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Designed and documented 15+ secure REST endpoints in Node.js/Express with JWT auth and validation middleware
                  </li>
                </ul>
              </div>
              <img
                src={certificate}
                alt="Certificate"
                className="w-auto h-auto sm:w-72 sm:h-44 object-contain bg-white p-3 rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>

        {/* ===== EDUCATION ===== */}
        <div ref={eduRef} className="reveal max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-accent tracking-widest uppercase">Education</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3 flex justify-center items-center gap-3">
              <FaGraduationCap className="text-accent" />
              Academic Background
            </h2>
          </div>

          <div className="space-y-5">
            <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover-lift">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-1">
                  M.Sc. in Software Engineering
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  University of Europe for Applied Sciences — Berlin, Germany · Expected February 2027
                </p>
              </div>
              <img
                src={ueLogo}
                alt="UE"
                className="w-36 h-14 object-contain bg-white p-2 rounded-xl shadow-sm"
              />
            </div>

            <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover-lift">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-1">
                  B.Tech — Computer Science & Engineering
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Lovely Professional University, India · 2020 – 2024 · GPA: 7.47/10
                </p>
              </div>
              <img
                src={lpuLogo}
                alt="LPU"
                className="w-36 h-14 object-contain bg-white p-2 rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ===== LANGUAGES ===== */}
        <div ref={langRef} className="reveal max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex justify-center items-center gap-3">
              <FaLanguage className="text-accent" />
              Languages
            </h2>
          </div>
          <div className="glass-card p-8 text-center">
            <ChatBubbles className="w-64 max-w-full mx-auto mb-6" />
            <div className="flex flex-wrap justify-center gap-4">
              {["English (Professional, IELTS B2)", "German (B1)", "Hindi (Native)"].map((lang, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div ref={ctaRef} className="reveal max-w-3xl lg:max-w-6xl mx-auto text-center">
          <div className="relative glass-card p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-400 to-pink-400" />
            <Rocket className="w-32 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xl mx-auto">
              I'm looking for a full-time Software Engineer role in Germany from February 2027. Open to Werkstudent roles until then.
            </p>
            <a
              href="/contact-me"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
