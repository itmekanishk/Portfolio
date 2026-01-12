import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['about', 'skills', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/50" 
          : "bg-transparent"
      }`}
    >
      <div className="px-[7vw] md:px-[7vw] lg:px-[20vw]">
        <div className="flex justify-between items-center py-6">
          {/* Logo with animation */}
          <div className="group cursor-pointer">
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl flex items-center justify-center transition-transform duration-500">
                <span className="text-white font-black">K</span>
              </div>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Kanishk
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2 bg-black/30 backdrop-blur-sm px-2 py-2 rounded-full border border-zinc-800">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-zinc-800 text-white border border-zinc-700 shadow-lg shadow-black/50"
                      : "text-gray-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/itmekanishk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-gray-400 hover:text-white hover:border-white/50 transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/itmekanishk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-gray-400 hover:text-white hover:border-white/50 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl">
          <div className="px-[7vw] py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "text-gray-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/itmekanishk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-gray-400 hover:text-white hover:border-white/50 transition-all"
              >
                <FaGithub size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/itmekanishk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-gray-400 hover:text-white hover:border-white/50 transition-all"
              >
                <FaLinkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;