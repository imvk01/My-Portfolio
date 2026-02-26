import React from "react";
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
import { FiMail } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
  const handleEmail = () => {
    const email = "vkvermavk96@gmail.com";
    const subject = "Portfolio_Vikash";
    const body = "Hi Vikash,\n\nI would like to get in touch with you.";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/imvk1/", "_blank");
  };

  const handleGithub = () => {
    window.open("https://github.com/imvk01", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+4915510834811", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/imvk._", "_blank");
  };

  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100012011164238",
      "_blank"
    );
  };

  const handleSnapchat = () => {
    window.open("https://www.snapchat.com/add/imvk.1", "_blank");
  };

  const handleWhatsApp = () => {
    const phone = "+919354040507";
    const message =
      "Hi Vikash, I got your reference from your portfolio website.";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="mt-24 px-6 lg:px-20 py-16 bg-gray-50 dark:bg-gray-900">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            I'm open to full-time roles, internships, and freelance
            opportunities. Feel free to reach out — I’d love to connect!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FiMail className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              vkvermavk96@gmail.com
            </p>
            <button
              onClick={handleEmail}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full flex items-center justify-center mx-auto"
            >
              Contact Me <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaPhoneAlt className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              +49 155 1083 4811
            </p>
            <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full" onClick={handleCall}>
              Call Now
            </button>
          </div>

          {/* LinkedIn */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaLinkedin className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              LinkedIn
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect professionally
            </p>
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-full" onClick={handleLinkedIn}>
              View Profile
            </button>
          </div>

          {/* GitHub */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaGithub className="text-4xl text-gray-900 dark:text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">See my projects</p>
            <button className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-6 py-2 rounded-full" onClick={handleGithub}>
              Explore Code
            </button>
          </div>

          {/* WhatsApp */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              WhatsApp
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">+91 93540 40507</p>
            <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full" onClick={handleWhatsApp}>
              Chat Now
            </button>
          </div>

          {/* Instagram */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaInstagram className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Instagram
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">@imvk._</p>
            <button className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-2 rounded-full" onClick={handleInstagram}>
              Follow Me
            </button>
          </div>

          {/* Facebook */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaFacebook className="text-4xl text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Facebook
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with me</p>
            <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full" onClick={handleFacebook}>
              Visit Profile
            </button>
          </div>

          {/* Snapchat */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700 hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaSnapchatGhost className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Snapchat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">@imvk.1</p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-white px-6 py-2 rounded-full" onClick={handleSnapchat}>
              Add Me
            </button>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 text-center text-gray-700 dark:text-gray-300 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          <span>Berlin, Germany</span>
        </div>
      </section>

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
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/imvk01"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;