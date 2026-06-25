import React, { useEffect, useRef } from "react";
import profileImage from "./gallery/abc.png";
import dhLogo from "./gallery/delivery-hero.png";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaGraduationCap,
  FaLanguage,
} from "react-icons/fa";
import ueLogo from "./gallery/ue.png";
import lpuLogo from "./gallery/lpu.png";
import certificate from "./gallery/certificate.png";
import Footer from "../components/Footer";

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
  const projectsRef = useReveal();
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
            a Full Stack Developer currently working at{" "}
            <span className="font-semibold text-accent">Delivery Hero</span> as a Working Student
            while pursuing my M.Sc. in Software Engineering at the University of Europe for Applied Sciences, Berlin.
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
              <span className="gradient-text">Full Stack Developer</span>
            </h2>
            <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-5">MERN · TypeScript · Cloud</p>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I specialize in developing end-to-end web applications using
              React.js, Node.js, Express.js, and MongoDB. My focus is on writing
              clean, maintainable code and creating intuitive user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              At Delivery Hero, I work on production-grade systems, building scalable services
              and contributing to the frontend ecosystem used by millions of users globally.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I enjoy solving complex problems and transforming ideas into
              efficient, secure, and scalable digital solutions.
            </p>
          </div>
        </div>

        {/* ===== TECHNICAL EXPERTISE ===== */}
        <div ref={techRef} className="reveal max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-accent tracking-widest uppercase">Stack</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">Technical Expertise</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {[
              { icon: <FaCode />, title: "Frontend", desc: "React.js, TypeScript, Tailwind CSS, Next.js, Redux" },
              { icon: <FaServer />, title: "Backend", desc: "Node.js, Express.js, REST APIs, GraphQL, JWT" },
              { icon: <FaDatabase />, title: "Databases", desc: "MongoDB, PostgreSQL, Mongoose, schema design" },
              { icon: <FaCloud />, title: "Cloud & DevOps", desc: "AWS EC2, Docker, Nginx, PM2, CI/CD, Firebase" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 hover-lift group">
                <div className="text-accent text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div ref={expRef} className="reveal max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-accent tracking-widest uppercase">Career</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">Experience</h2>
          </div>

          <div className="space-y-5">
            {/* Delivery Hero */}
            <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Current</span>
                </div>
                <h3 className="text-xl font-semibold text-accent mb-1">
                  Working Student — Full Stack Developer
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Delivery Hero SE — Berlin, Germany
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Building and maintaining production-grade full stack features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Working with React, TypeScript, Node.js in a large-scale codebase
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Collaborating with cross-functional teams in an agile environment
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
            <div className="glass-card p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-accent mb-1">
                  Full Stack Developer Intern
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  UpGrad Campus — Jalandhar, India
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Developed Real Estate Marketplace using MERN stack
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Built scalable REST APIs and integrated payment gateways
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Conducted code reviews and maintained best practices
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
                  University of Europe for Applied Sciences — Berlin, Germany (Current)
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
                  Lovely Professional University, India · CGPA: 7.47
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

        {/* ===== KEY PROJECTS ===== */}
        <div ref={projectsRef} className="reveal max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-accent tracking-widest uppercase">Highlights</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">Key Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 stagger-children">
            {[
              { name: "Keycloak IAM Platform", desc: "Simplified IAM with authentication, user management, invitations, and configurable MFA." },
              { name: "CareerConnect", desc: "Full-stack job portal with PayPal subscriptions, wallet logic, secure APIs, and responsive frontend." },
              { name: "NeuroRevive 360", desc: "Physiotherapy clinic website with appointment scheduling and REST APIs." },
              { name: "Som Motor Records", desc: "Vehicle repair tracking with invoice generation and real-time data management." },
            ].map((proj, i) => (
              <div key={i} className="glass-card p-6 hover-lift">
                <h3 className="font-semibold text-accent mb-2">{proj.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{proj.desc}</p>
              </div>
            ))}
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
            <div className="flex flex-wrap justify-center gap-4">
              {["Hindi (Native)", "English (B2)", "Deutsch (B1)", "Punjabi"].map((lang, i) => (
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
        <div ref={ctaRef} className="reveal max-w-3xl mx-auto text-center">
          <div className="relative glass-card p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-400 to-pink-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              I'm open to working student roles, internships, and full-time opportunities across Germany and Europe.
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
