import React, { useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
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

function Contact() {
  const gridRef = useReveal();

  const handleEmail = () => {
    const email = "vkvermavk96@gmail.com";
    const subject = "Portfolio Contact — Vikash Verma";
    const body = "Hi Vikash,\n\nI would like to get in touch with you.";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const contacts = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      detail: "vkvermavk96@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      action: handleEmail,
      label: "Send Email",
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Phone",
      detail: "+49 155 1083 4811",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500",
      action: () => window.open("tel:+4915510834811", "_blank"),
      label: "Call Now",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      detail: "Connect professionally",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      action: () => window.open("https://www.linkedin.com/in/imvk1/", "_blank"),
      label: "View Profile",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      detail: "See my code",
      color: "text-gray-800 dark:text-white",
      bgColor: "bg-gray-800 dark:bg-white dark:text-gray-900",
      action: () => window.open("https://github.com/imvk01", "_blank"),
      label: "Explore Code",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      detail: "+91 93540 40507",
      color: "text-green-500",
      bgColor: "bg-green-500",
      action: () => {
        const phone = "+919354040507";
        const message = "Hi Jass, I got your reference from your portfolio website.";
        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, "_blank");
      },
      label: "Chat Now",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: "Instagram",
      detail: "@imvk._",
      color: "text-pink-500",
      bgColor: "bg-gradient-to-br from-pink-500 to-orange-400",
      action: () => window.open("https://www.instagram.com/imvk._", "_blank"),
      label: "Follow",
    },
    // {
    //   icon: <FaFacebook className="w-6 h-6" />,
    //   title: "Facebook",
    //   detail: "Connect with me",
    //   color: "text-blue-700",
    //   bgColor: "bg-blue-700",
    //   action: () => window.open("https://www.facebook.com/profile.php?id=100012011164238", "_blank"),
    //   label: "Visit",
    // },
    {
      icon: <FaSnapchatGhost className="w-6 h-6" />,
      title: "Snapchat",
      detail: "@imvk.1",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400 text-gray-900",
      action: () => window.open("https://www.snapchat.com/add/imvk.1", "_blank"),
      label: "Add Me",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-custom-background dark:bg-custom-background-dark pt-28 sm:pt-32 pb-16 px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            I'm open to full-time roles, working student positions, and interesting collaborations. Let's talk!
          </p>
        </div>

        {/* Contact Grid */}
        <div ref={gridRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto stagger-children">
          {contacts.map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className="glass-card p-6 hover-lift text-left group cursor-pointer transition-all duration-300"
            >
              <div className={`${item.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                {item.title}
                <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" size={14} />
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.detail}
              </p>
            </button>
          ))}
        </div>

        {/* Location */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
            <FaMapMarkerAlt className="text-accent text-sm" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Berlin, Germany</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
