import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./logo/NEURO1.png";

const Footer = () => {
  const handleCallNow = () => window.open(`tel:+918445817835`, "_blank");
  const handleChatWithUs = () => window.open(`mailto:neurorevive360@gmail.com`, "_blank");
  const handleFollowUs = () => window.open(`https://www.instagram.com/neurorevive360/`, "_blank");
  const handleWhatsApp = () => window.open(`https://api.whatsapp.com/send?phone=918859014562&text=Got%20your%20reference%20from%20your%20Website.%20I%20want%20to%20know%20more%20about%20your%20services.`, "_blank");
  const handleDeveloper = () => window.open(`https://api.whatsapp.com/send?phone=919354040507&text=Got%20your%20reference%20from%20NeuroRevive360.`, "_blank");

  return (
    <footer className="bg-gray-100 py-8 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        
        {/* Logo and Company Info */}
        <div className="flex-1 text-center md:text-left">
          <Link to="/">
            <img src={logo} alt="NeuroRevive 360 Logo" className="mx-auto md:mx-0 h-24 w-auto" />
          </Link>
          <p className="mt-4 text-base text-blue-900">
            ©️ {new Date().getFullYear()} NeuroRevive 360. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home","About","Location","Contact Us","Send Enquiry"].map((link, idx) => (
              <li key={idx}>
                <Link to={`/${link.toLowerCase().replace(/\s+/g,'-')}`} className="text-slate-700 hover:text-slate-900">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Expertise */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Our Expertise</h3>
          <ul className="space-y-2">
            {["Stroke","Autism","Parkinson's","Cerebral Palsy (CP)","Spinal Cord Injury (SCI)","Maysthineya Gravies"].map((service, idx) => (
              <li key={idx}>
                <Link to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-slate-700 hover:text-slate-900">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Get in touch</h3>
          <ul className="space-y-4">
            <li>
              <button onClick={handleCallNow} className="flex items-center justify-center md:justify-start text-blue-600">
                <Phone className="mr-2 h-5 w-5" /> +91 84458 17835
              </button>
            </li>
            <li>
              <button onClick={handleWhatsApp} className="flex items-center justify-center md:justify-start text-green-600">
                <MessageCircle className="mr-2 h-5 w-5" /> +91 88590 14562
              </button>
            </li>
            <li>
              <button onClick={handleFollowUs} className="flex items-center justify-center md:justify-start text-pink-600">
                <Instagram className="mr-2 h-5 w-5" /> neurorevive360
              </button>
            </li>
            <li>
              <button onClick={handleChatWithUs} className="flex items-center justify-center md:justify-start text-slate-700">
                <Mail className="mr-2 h-5 w-5" /> neurorevive360@gmail.com
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Developed by */}
      <div className="mt-8 text-center md:text-right text-blue-900">
        Developed by{" "}
        <button onClick={handleDeveloper} className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
          Vikash Verma
        </button>
      </div>
    </footer>
  );
};

export default Footer;
