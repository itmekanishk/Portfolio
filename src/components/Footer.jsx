import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-zinc-800">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-white">Kanishk Kumar</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-gray-300 text-sm sm:text-base my-1 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://twitter.com/itmekanishk" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/itmekanishk" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          © 2026 itmekanishk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;