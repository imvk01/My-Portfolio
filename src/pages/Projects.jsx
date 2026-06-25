import React, { useState, useEffect, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import { X } from "lucide-react";
import Footer from "../components/Footer";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useReveal();

  const projects = [
    {
      name: "Keycloak IAM Platform",
      description:
        "Simplified Keycloak-inspired IAM platform with authentication, user and organization management, invitations, and configurable auth/MFA settings.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "JWT"],
      live: "https://keycloak-iam-platform.onrender.com",
      github: "https://github.com/imvk01/Keycloak-IAM-Platform",
      privateRepo: false,
    },
    {
      name: "CareerConnect",
      description:
        "Full-stack job portal with resume uploads, referral system, premium payment plans, and secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "PayPal Autopay", "Tailwind"],
      live: "https://www.carrerconnect.com/",
      github: null,
      privateRepo: true,
    },
    {
      name: "NeuroRevive 360",
      description:
        "Health & rehabilitation platform with appointment booking, user dashboard, and secure backend.",
      tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind"],
      live: "https://neuro-revive360.vercel.app",
      github: null,
      privateRepo: true,
    },
    {
      name: "Som Motor Records",
      description:
        "Real-time vehicle maintenance tracking system with authentication and notification system.",
      note: "Backend not deployed due to client privacy",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      live: "https://som-moter.netlify.app/",
      github: null,
      privateRepo: true,
    },
    {
      name: "TVA Group",
      description:
        "Internal team collaboration platform with real-time updates and task management.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      live: "https://tva-group.onrender.com",
      github: "https://github.com/imvk01/Real-Estate-Marketplace-MERN",
      privateRepo: false,
    },
    {
      name: "IMDb Movies Rating",
      description:
        "Uses TMDb API to provide popular, top-rated, and upcoming movies with ratings and production details.",
      tech: ["React", "Express", "MongoDB", "TMDb API"],
      live: "https://imdb-vikashverma.netlify.app/",
      github: "https://github.com/imvk01/movie-rating-imdb-clone",
      privateRepo: false,
    },
    {
      name: "Amazon Clone",
      description: "Amazon clone built for learning the fundamentals of full-stack web development.",
      tech: ["React", "Express", "Node", "MongoDB"],
      live: "https://amazon-vikashverma.netlify.app/",
      github: "https://github.com/imvk01/Amazon-vikash",
      privateRepo: false,
    },
    {
      name: "Tinder Clone",
      description: "Tinder clone built for learning the fundamentals of full-stack web development.",
      tech: ["React", "Express", "Node", "MongoDB"],
      live: "https://tinder-vikashverma.netlify.app/",
      github: "https://github.com/imvk01/Tinder-clone",
      privateRepo: false,
    },
    {
      name: "Scribbler Posts",
      description: "Blog-style project built using vanilla HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://scribbler-posts.netlify.app/",
      github: "https://github.com/imvk01/Scribbler-Project",
      privateRepo: false,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-custom-background dark:bg-custom-background-dark pt-28 sm:pt-32 pb-16 px-6 lg:px-16">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">Portfolio</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            A collection of projects exploring full-stack development, real-world problem solving, and production deployments.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto stagger-children">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-7 hover-lift flex flex-col relative overflow-hidden group"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                {project.name}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 leading-relaxed flex-grow relative z-10">
                {project.description}
              </p>

              {project.note && (
                <p className="text-xs text-amber-500 dark:text-amber-400 mb-3 relative z-10">{project.note}</p>
              )}

              <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-accent/10 text-accent text-[11px] font-mono px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 relative z-10 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-accent/20"
                >
                  Live <FaExternalLinkAlt size={11} />
                </a>

                {project.privateRepo ? (
                  <button
                    onClick={() => setSelectedProject(project.name)}
                    className="flex items-center gap-1.5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <FaLock size={11} /> Private
                  </button>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    GitHub <FaGithub size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-card p-8 max-w-md w-full text-center animate-scale-in relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-surface transition-colors"
              >
                <X size={18} className="text-gray-400" />
              </button>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FaLock className="text-accent text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Private Repository
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                The repository for <strong className="text-gray-900 dark:text-white">{selectedProject}</strong> is
                private due to client confidentiality. Access can be provided upon request.
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
