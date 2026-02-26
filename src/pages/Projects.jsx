import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
  FaLinkedin,
} from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "CareerConnect",
      description:
        "Full-stack job portal with resume uploads, referral system, premium payment plans, and secure authentication.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "PayPal Autopay",
        "Tailwind",
      ],
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
      note: "Due to Privacy of Client, the Backend is not Deployed",
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
        "A site that uses TMDb API to provide popular, top-rated, and upcoming movies with their ratings and production industry details.",
      tech: ["React", "Express", "MongoDB", "TMDb API"],
      live: "https://imdb-vikashverma.netlify.app/",
      github: "https://github.com/imvk01/movie-rating-imdb-clone",
      privateRepo: false,
    },
    {
      name: "Amazon Clone",
      description:
        "Amazon clone for learning the basic skills of Web Development.",
      tech: ["React", "Express", "Node", "MongoDB"],
      live: "https://amazon-vikashverma.netlify.app/",
      github: "https://github.com/imvk01/Amazon-vikash",
      privateRepo: false,
    },
    {
      name: "Tinder Clone",
      description:
        "Tinder clone for learning the basic skills of Web Development.",
      tech: ["React", "Express", "Node", "MongoDB"],
      live: "https://tinder-vikashverma.netlify.app/",
      github: "https://github.com/imvk01/Tinder-clone",
      privateRepo: false,
    },
    {
      name: "Scribbler-Posts",
      description: "Blog style project built using HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://scribbler-posts.netlify.app/",
      github: "https://github.com/imvk01/Scribbler-Project",
      privateRepo: false,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 lg:px-16 lg:mt-[5%] md:mt-[8%] mt-[15%]">
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A collection of projects built as a passionate Computer Science
            student, exploring full-stack development and real-world problem
            solving.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-500 hover:-translate-y-3 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-700 opacity-30 rounded-full blur-3xl"></div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {project.name}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {project.description}
              </p>

              {project.note && (
                <p className="text-sm text-red-400 mb-5">{project.note}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-400 transition shadow-md"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>

                {/* GitHub or Private */}
                {project.privateRepo ? (
                  <button
                    onClick={() => setSelectedProject(project.name)}
                    className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <FaLock /> Private Repo
                  </button>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    GitHub <FaGithub />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Private Repository
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The repository for <strong>{selectedProject}</strong> is private
                due to client confidentiality. Access can be provided upon
                request.
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="py-6 px-4 sm:px-6 lg:px-12 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-black dark:text-white font-semibold">
          © 2026 Vikash Verma. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2 text-indigo-600 dark:text-indigo-400">
          <a
            href="https://www.linkedin.com/in/imvk1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/imvk01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 dark:hover:text-indigo-300 text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}