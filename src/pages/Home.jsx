import React, { useEffect, useRef, useState } from "react";
import profileImage from "./gallery/profile.png";
import dhLogo from "./gallery/delivery-hero.png";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import demoVideo from "./gallery/coding.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/Footer";
import { Code2, Server, Database, Shield, CreditCard, Cloud } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleMail = () => {
    const email = "jaskaransingh@example.com";
    const subject = "Portfolio Contact";
    const body = "Hi Jass,\n\nI would like to get in touch with you.";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const skillsRef = useReveal();
  const projectsRef = useReveal();
  const videoRef = useReveal();
  const testimonialsRef = useReveal();
  const ctaRef = useReveal();

  const skills = [
    {
      title: "Frontend Development",
      description: "React.js, TypeScript, Tailwind CSS, responsive and accessible UI",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      title: "Backend Development",
      description: "Node.js, Express.js, REST & GraphQL APIs, microservices",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Database Design",
      description: "MongoDB, PostgreSQL, schema optimization, data modeling",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Authentication & Security",
      description: "JWT, OAuth 2.0, role-based access, secure API design",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Payment Integration",
      description: "Stripe, PayPal integration in production applications",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD pipelines, Nginx, production deployment",
      icon: <Cloud className="w-6 h-6" />,
    },
  ];

  const projects = [
    {
      name: "Keycloak IAM Platform",
      description: "Simplified IAM platform with authentication, user & org management, invitations, and configurable MFA settings.",
      tech: "React, TypeScript, Node.js, MongoDB, JWT",
      link: "https://keycloak-iam-platform.onrender.com",
    },
    {
      name: "CareerConnect",
      description: "Full-stack job portal with search, filters, resume uploads, referrals, and premium payment options.",
      tech: "React.js, Node.js, Express.js, MongoDB, Stripe, PayPal",
      link: "https://www.carrerconnect.com/",
    },
    {
      name: "NeuroRevive 360",
      description: "Health & wellness platform for neuroscience-based rehabilitation with appointments and user management.",
      tech: "React.js, Node.js, MongoDB, Firebase, Tailwind CSS",
      link: "https://neuro-revive360.vercel.app/",
    },
    {
      name: "Som Motor Records",
      description: "Real-time vehicle maintenance tracking system with authentication, notifications, and dashboards.",
      tech: "React.js, Node.js, Socket.io, MongoDB, Tailwind CSS",
      link: "https://som-moter.netlify.app/",
    },
  ];

  const testimonials = [
    {
      name: "Abhimanyu Sharma",
      role: "Internship Mentor",
      feedback: "Jass is a dedicated developer with excellent full-stack skills and a strong eye for clean architecture.",
    },
    {
      name: "Shamneesh",
      role: "Project Manager",
      feedback: "Delivered high-quality work on time, very professional and collaborative. A reliable team player.",
    },
  ];

  return (
    <PageWrapper>
      <div className="w-full min-h-screen">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <img src={dhLogo} alt="Delivery Hero" className="h-4 w-auto" />
                <span className="text-sm font-medium text-accent">Working Student @ Delivery Hero</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 leading-[1.1]">
                Hi, I'm{" "}
                <span className="gradient-text">Vikash Verma</span>
              </h1>

              <div className="h-10 mb-6">
                <span className="text-xl sm:text-2xl font-mono text-gray-500 dark:text-gray-400">
                  {typedText}
                  <span className="animate-pulse text-accent">|</span>
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Building modern, scalable web experiences with the MERN stack and beyond.
                Pursuing M.Sc. Software Engineering in Berlin while shipping production code
                at Delivery Hero.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/contact-me")}
                  className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  Let's Connect
                  <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-surface hover:bg-gray-200 dark:hover:bg-surface-light text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <FaUser className="text-sm" /> About Me
                </button>
                <button
                  onClick={handleMail}
                  className="flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 hover:border-accent dark:hover:border-accent text-gray-700 dark:text-gray-300 hover:text-accent px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <FaEnvelope className="text-sm" /> Mail Me
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent via-purple-400 to-pink-400 rounded-full blur-md opacity-40 animate-pulse-glow" />
                <img
                  src={profileImage}
                  alt="Vikash Verma"
                  className="relative w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 rounded-full object-cover shadow-2xl border-2 border-white/10"
                />
              </div>
              <div className="text-center mt-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Vikash Verma</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">Berlin, Germany</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section ref={skillsRef} className="reveal py-24 px-6 sm:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent tracking-widest uppercase">What I Do</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
                Skills & Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-lift group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURED PROJECTS ===== */}
        <section ref={projectsRef} className="reveal py-24 px-6 sm:px-10 lg:px-16 bg-gray-50/50 dark:bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent tracking-widest uppercase">Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
                Featured Projects
              </h2>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {projects.map((proj, idx) => (
                <SwiperSlide key={idx} className="!h-auto flex">
                  <div className="glass-card p-6 hover-lift w-full flex flex-col">
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {proj.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed min-h-[60px]">
                        {proj.description}
                      </p>
                      <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-4">
                        {proj.tech}
                      </p>
                    </div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent font-medium hover:gap-3 transition-all duration-300 mt-auto"
                    >
                      View Project <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-4">
              <button
                onClick={() => navigate("/projects")}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent font-medium transition-colors duration-300"
              >
                View all projects →
              </button>
            </div>
          </div>
        </section>

        {/* ===== VIDEO DEMO ===== */}
        <section ref={videoRef} className="reveal py-24 px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-mono text-accent tracking-widest uppercase">In Action</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
                How I look on Work
              </h2>
            </div>
            <div className="gradient-border">
              <video
                src={demoVideo}
                controls
                autoPlay
                loop
                muted
                className="w-full rounded-2xl shadow-2xl shadow-accent/5"
              />
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section ref={testimonialsRef} className="reveal py-24 px-6 sm:px-10 lg:px-16 bg-gray-50/50 dark:bg-surface/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent tracking-widest uppercase">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
                What People Say
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="glass-card p-8 hover-lift"
                >
                  <div className="text-3xl text-accent/30 mb-4 font-serif">"</div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-[15px]">
                    {t.feedback}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section ref={ctaRef} className="reveal py-24 px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative glass-card p-12 sm:p-16 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-400 to-pink-400" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Let's build something amazing together. I'm always open to new opportunities and interesting projects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => navigate("/contact-me")}
                  className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  Get in Touch <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleMail}
                  className="flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 hover:border-accent text-gray-700 dark:text-gray-300 hover:text-accent px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  <FaEnvelope className="text-sm" /> Send Email
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}
