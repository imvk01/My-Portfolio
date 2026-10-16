import React from "react";
import { FaCode, FaServer, FaCloud, FaDatabase, FaRobot, FaVial } from "react-icons/fa";

const expertise = [
  { icon: <FaCode />, title: "Frontend", desc: "TypeScript, JavaScript (ES6+), React.js, Tailwind CSS, Material UI, Vite, Webpack; responsive and accessible UI" },
  { icon: <FaServer />, title: "Backend, APIs & Security", desc: "Node.js, Express.js, Python, Java, REST & GraphQL APIs, JWT, OAuth 2.0, RBAC, Stripe & PayPal payments" },
  { icon: <FaDatabase />, title: "Databases", desc: "PostgreSQL, MongoDB, MySQL, BigQuery, SQL; schema optimization and data modeling" },
  { icon: <FaCloud />, title: "Cloud & DevOps", desc: "AWS (EC2, S3), Docker, GitHub Actions CI/CD, Nginx, Linux, Git, production deployment" },
  { icon: <FaRobot />, title: "AI / LLM", desc: "RAG, Vertex AI, Google Gemini API, Claude API" },
  { icon: <FaVial />, title: "Testing & Practices", desc: "Jest, Postman, Vercel, Figma, Agile/Scrum, Code Reviews, System Design" },
];

export default function TechExpertise({ eyebrow = "Stack", title = "Technical Expertise" }) {
  return (
    <>
      <div className="text-center mb-12">
        <span className="text-sm font-mono text-accent tracking-widest uppercase">{eyebrow}</span>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">{title}</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
        {expertise.map((item) => (
          <div key={item.title} className="glass-card p-6 hover-lift group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent text-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
