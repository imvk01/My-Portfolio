import React from "react";
import placeholderImage from "./gallery/me.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaLinkedin, FaGithub, FaUser } from "react-icons/fa";
import demoVideo from "./gallery/coding.mp4"; // <-- your video file

export default function Home() {
  const navigate = useNavigate();

  const handleChatWithUs = () => {
    const email = "vkvermavk96@gmail.com";
    const subject = "Portfolio_Vikash";
    const body = "Hi Vikash,\n\nI would like to get in touch with you.";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const advantages = [
    {
      title: "Responsive Design",
      description: "Mobile-first, fully responsive UI using Tailwind CSS",
      icon: "📱",
    },
    {
      title: "Scalable Backend",
      description: "REST APIs built with Node.js & Express",
      icon: "⚙️",
    },
    {
      title: "Database Management",
      description: "Efficient MongoDB schema design & optimization",
      icon: "🗄️",
    },
    {
      title: "Secure Authentication",
      description: "JWT-based authentication & protected routes",
      icon: "🔐",
    },
    {
      title: "Payment Integration",
      description: "Stripe & PayPal integration in MERN apps",
      icon: "💳",
    },
    {
      title: "Cloud Deployment",
      description: "AWS EC2, Nginx & PM2 deployment experience",
      icon: "☁️",
    },
  ];

  const projects = [
    {
      name: "CareerConnect",
      description:
        "A full-stack job portal with search, filters, resume uploads, referrals, and premium payment options.",
      tech: "React.js, Node.js, Express.js, MongoDB, Stripe, PayPal, Tailwind CSS",
      link: "#",
    },
    {
      name: "NeuroRevive 360",
      description:
        "Health & wellness platform for neuroscience-based rehabilitation with appointments and user management.",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Firebase",
      link: "#",
    },
    {
      name: "Som Motor Records",
      description:
        "Real-time vehicle maintenance tracking system with authentication, notifications, and dashboards.",
      tech: "React.js, Node.js, Socket.io, MongoDB, Tailwind CSS",
      link: "#",
    },
    {
      name: "TVA Group",
      description:
        "Internal management platform with team collaboration, task tracking, and real-time notifications.",
      tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Socket.io",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "Abhimanyu",
      role: "Internship Mentor",
      feedback:
        "Vikash is a dedicated developer with excellent MERN stack skills.",
    },
    {
      name: "Shamneesh",
      role: "Project Manager",
      feedback:
        "Delivered high-quality work on time, very professional and collaborative.",
    },
  ];

  return (
    <div className="w-full min-h-screen mt-[30%] lg:mt-24">
      <div className="bg-gray-100 rounded-b-[20%]">
        {/* ===== HERO SECTION ===== */}
        <div className="bg-gradient-to-t from-blue-400 to-blue-50 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 max-w-8xl mx-auto gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h6 className="font-semibold text-indigo-600 text-sm sm:text-base uppercase tracking-wide">
              | Welcome to My Portfolio
            </h6>
            <h2 className="text-gray-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl mt-3 mb-4 leading-snug">
              Building Modern & Scalable <br className="hidden sm:block" /> Web
              & Mobile Experiences
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              I'm a passionate{" "}
              <span className="text-indigo-600 font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in MERN stack (MongoDB, Express.js, React.js,
              Node.js), React Native, Logo Desiging and use of AI Tools. I
              create high-performance, responsive applications with clean UI/UX,
              secure backend APIs, authentication, payment integrations, and
              cloud deployment.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              My work focuses on turning complex problems into intuitive digital
              solutions. Whether it's building scalable web apps, integrating
              APIs, or creating mobile-first designs, I aim for clean,
              maintainable, and efficient code.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              <span className="text-indigo-600 font-medium">
                Skills & Technologies I work with:
              </span>{" "}
              React.js, Redux, Node.js, Express.js, MongoDB, React Native,
              Tailwind CSS, Firebase, Stripe, PayPal, AWS, Git & GitHub.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <button
                onClick={() => navigate("/contact-me")}
                className="bg-indigo-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-indigo-500 shadow-md transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                <FaArrowRight className="mr-2" /> Contact Me
              </button>
              <button
                onClick={() => navigate("/about")}
                className="bg-orange-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-orange-400 shadow-md transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                <FaUser className="mr-2" /> About Me
              </button>
              <button
                onClick={handleChatWithUs}
                className="bg-green-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-green-500 shadow-md transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                <FaEnvelope className="mr-2" /> Mail Me
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12 flex flex-col items-center justify-center">
            <img
              src={placeholderImage}
              alt="Vikash Verma"
              className="w-48 sm:w-52 md:w-64 lg:w-72 h-auto rounded-full shadow-2xl"
            />
            <span className="mt-4 text-xl sm:text-xl lg:text-3xl font-semibold text-gray-700 font-serif">
              VIKASH VERMA
            </span>
            <span className="text-sm sm:text-base text-gray-500 mt-1 font-light">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* ===== SKILLS SECTION ===== */}
        <div className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-100  mx-auto rounded-b-[12%] border-b-4 lg:rounded-b-[20%] border-indigo-600">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-center text-gray-900">
              My <span className="text-indigo-600">Skills</span> & Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-blue-200 opacity-20 pointer-events-none"></div>
                  <span className="text-4xl flex items-center justify-center border-2 border-indigo-600 rounded-full h-16 w-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURED PROJECTS ===== */}
      <div className="py-5 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-center text-gray-900 mt-5">
          Featured <span className="text-indigo-600">Projects</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2"
            >
              <h4 className="text-xl font-semibold mb-2">{proj.name}</h4>
              <p className="text-gray-600 mb-2">{proj.description}</p>
              <p className="text-gray-500 text-sm mb-4">{proj.tech}</p>
              <a
                href={proj.link}
                className="text-indigo-600 font-semibold hover:underline flex items-center"
              >
                View Project <FaArrowRight className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ===== VIDEO DEMO / INTRO ===== */}
      <div className="py-16 px-6 sm:px-10 lg:px-16 max-w-8xl mx-auto">
        <div className="flex justify-center">
          <video
            src={demoVideo}
            controls
            autoPlay
            loop
            muted
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 rounded-2xl shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="bg-gray-100 rounded-t-[20%]">
        <div className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-100 rounded-t-[20%] border-t-4 border-indigo-600">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-center text-gray-900">
              What People Say
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transform transition hover:-translate-y-2"
                >
                  <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CALL TO ACTION ===== */}

        <div className="py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-t-[20%] border-t-4 border-white text-center text-white shadow-xl">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to Collaborate?
          </h3>
          <p className="mb-6 text-white/90">
            Let’s build something amazing together. Get in touch!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/contact-me")}
              className="bg-indigo-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-indigo-500 shadow-md transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
            >
              <FaArrowRight className="mr-2" /> Contact Me
            </button>
            <button
                onClick={() => navigate("/about")}
                className="bg-orange-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-orange-400 shadow-md transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
              >
                <FaUser className="mr-2" /> About Me
              </button>
            <button
              onClick={handleChatWithUs}
              className="bg-green-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-green-500 shadow-md transition transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Mail Me
            </button>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="py-6 px-4 sm:px-6 lg:px-12 bg-gray-200 text-white text-center">
        <p className="text-black font-semibold">
          © 2026 Vikash Verma. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/imvk1/"
            className="hover:text-indigo-500 text-indigo-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/imvk01"
            className="hover:text-indigo-500 text-indigo-600"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
