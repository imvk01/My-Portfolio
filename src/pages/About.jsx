import React from "react";
import placeholderImage from "./gallery/me.png";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaGraduationCap,
  FaLanguage,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 py-16 px-6 sm:px-10 lg:px-20 lg:mt-[5%] md:mt-[10%] mt-[20%]">
        {/* ===== HEADER SECTION ===== */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            I’m{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Vikash Verma
            </span>
            , a Full Stack Developer currently pursuing my
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {" "}
              M.Sc. in Software Engineering in Germany
            </span>
            . I specialize in building scalable, secure, and production-ready
            web applications using the MERN stack and modern cloud technologies.
          </p>
        </div>

        {/* ===== PROFILE + INTRO ===== */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <img
              src={placeholderImage}
              alt="Vikash Verma"
              className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-indigo-100 dark:border-indigo-600"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-indigo-600 dark:text-indigo-400">
                Full Stack Developer
              </span>{" "}
              | MERN Specialist
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I specialize in developing end-to-end web applications using
              React.js, Node.js, Express.js, and MongoDB. My focus is on writing
              clean, maintainable code and creating intuitive user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I have hands-on experience in building scalable REST APIs,
              implementing JWT authentication, integrating Stripe & PayPal
              payments, and deploying applications using AWS EC2, Nginx, and
              PM2.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy solving complex problems and transforming ideas into
              efficient, secure, and scalable digital solutions.
            </p>
          </div>
        </div>

        {/* ===== TECHNICAL EXPERTISE ===== */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Expertise
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <FaCode className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Frontend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                React.js, Redux, Tailwind CSS, Responsive UI, React Native
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <FaServer className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Backend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Node.js, Express.js, REST APIs, JWT Authentication
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <FaDatabase className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Database Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                MongoDB, Mongoose, Schema Design, GridFS
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
              <FaCloud className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                Cloud & Deployment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AWS EC2, Nginx, PM2, Firebase, Production Deployment
              </p>
            </div>
          </div>
        </div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Full Stack Developer Intern
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              UpGrad Campus – Jalandhar, India
            </p>

            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>
                Developed Real Estate Marketplace using MERN stack (TVA Group).
              </li>
              <li>Built scalable REST APIs using Node.js & Express.</li>
              <li>Integrated third-party services and payment gateways.</li>
              <li>Conducted code reviews and maintained best practices.</li>
            </ul>
          </div>
        </div>

        {/* ===== EDUCATION SECTION ===== */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 flex justify-center items-center gap-3">
            <FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />
            Education
          </h2>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Master of Science (M.Sc.) in Software Engineering
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                University of Europe for Applied Sciences – Germany (Current)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Bachelor of Technology – Computer Science & Engineering
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lovely Professional University, India | CGPA: 7.47
              </p>
            </div>
          </div>
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Key Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:-translate-y-2">
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                CareerConnect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full-stack job assistance platform with PayPal subscription
                billing, wallet logic, secure backend APIs, and responsive React
                frontend.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:-translate-y-2">
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                NeuroRevive 360
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Physiotherapy clinic website with appointment scheduling and
                REST APIs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:-translate-y-2">
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                Som Motor Records
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Vehicle repair tracking system with invoice generation and data
                management.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:-translate-y-2">
              <h3 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                Movie Rating App (IMDb Clone)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Dynamic movie search platform using TMDb API, Redux, and React
                Router.
              </p>
            </div>
          </div>
        </div>

        {/* ===== LANGUAGES SECTION ===== */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 flex justify-center items-center gap-3">
            <FaLanguage className="text-indigo-600 dark:text-indigo-400" />
            Languages
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
              Hindi (Native) | English (Professional) | Punjabi | German (Basic)
            </p>
          </div>
        </div>

        {/* ===== CALL TO ACTION ===== */}
        <div className="max-w-4xl mx-auto text-center bg-indigo-600 dark:bg-indigo-700 text-white py-12 px-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
          <p className="mb-6">
            I’m open to internships, working student roles, and full-time
            opportunities across Germany and Europe.
          </p>
          <a
            href="/contact-me"
            className="bg-white text-indigo-600 dark:text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="py-6 px-4 sm:px-6 lg:px-12 bg-gray-200 dark:bg-gray-800 text-center">
        <p className="text-black dark:text-white font-semibold">
          © 2026 Vikash Verma. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2 text-indigo-600 dark:text-indigo-400">
          <a
            href="https://www.linkedin.com/in/imvk1/"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/imvk01"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}