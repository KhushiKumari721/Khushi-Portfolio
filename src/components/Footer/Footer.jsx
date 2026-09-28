import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          Khushi Kumari
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">

          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/profile/khushii0721?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <SiGeeksforgeeks />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/K-H-U-S-H-I/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <SiLeetcode />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/khushi-kumari-189803326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/khushii_raj721?igsh=MXFoaHd4cW9xdTVwYQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          {/* YouTube - AnimCraft */}
          <a
            href="https://www.youtube.com/@KhushiiAnimCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>

          {/* YouTube - JustMyFrames */}
          <a
            href="https://www.youtube.com/@JustMyFramesByKhushi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>

        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Khushi Kumari. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;