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
    // Opens WhatsApp chat with pre-filled message
    const phone = "+919354040507"; // Replace with your number with country code
    const message =
      "Hi Vikash, I got your reference from your portfolio website.";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="mt-24 px-6 lg:px-20 py-16 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm open to full-time roles, internships, and freelance
            opportunities. Feel free to reach out — I’d love to connect!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FiMail className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">vkvermavk96@gmail.com</p>
            <button
              onClick={handleEmail}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full flex items-center justify-center mx-auto"
            >
              Contact Me <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaPhoneAlt className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">+49 155 1083 4811</p>
            <button
              onClick={handleCall}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full"
            >
              Call Now
            </button>
          </div>

          {/* LinkedIn */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center  hover:-translate-y-2">
            <FaLinkedin className="text-4xl text-blue-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">Connect professionally</p>
            <button
              onClick={handleLinkedIn}
              className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              View Profile
            </button>
          </div>

          {/* GitHub */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaGithub className="text-4xl text-gray-900 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600 mb-4">See my projects</p>
            <button
              onClick={handleGithub}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full"
            >
              Explore Code
            </button>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">+91 93540 40507</p>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full"
            >
              Chat Now
            </button>
          </div>

          {/* Instagram */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaInstagram className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-gray-600 mb-4">@imvk._</p>
            <button
              onClick={handleInstagram}
              className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-2 rounded-full"
            >
              Follow Me
            </button>
          </div>

          {/* Facebook */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaFacebook className="text-4xl text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
            <p className="text-gray-600 mb-4">Connect with me</p>
            <button
              onClick={handleFacebook}
              className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
            >
              Visit Profile
            </button>
          </div>

          {/* Snapchat */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center hover:-translate-y-2">
            <FaSnapchatGhost className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Snapchat</h3>
            <p className="text-gray-600 mb-4">@imvk.1</p>
            <button
              onClick={handleSnapchat}
              className="bg-yellow-400 hover:bg-yellow-300 text-white px-6 py-2 rounded-full"
            >
              Add Me
            </button>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-red-500" />
            <span>Berlin, Germany</span>
          </div>
        </div>
      </section>

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
    </>
  );
}

export default Contact;
