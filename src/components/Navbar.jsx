import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Certifications", link: "#courses" },
    { name: "Contact", link: "#contact" },
  ];

  return (
   <nav className="fixed w-full z-50 bg-[#111827] border-t  backdrop-blur-md border-b border-white/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <a href="#about" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-md object-cover"
          />

          <div className="hidden lg:block">
            <h1 className="text-white font-semibold">
              Alisha Saif
            </h1>

            <p className="text-xs text-gray-400">
              Backend Developer
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-gray-300 hover:text-[#8B5CF6] transition font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#8B5CF6] transition"
          >
            <FaLinkedin className="text-white" />
          </a>

          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center hover:bg-[#8B5CF6] transition"
          >
            <FaGithub className="text-white" />
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#111827] border-t border-[#1F2937]">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block text-center py-4 text-gray-300 hover:text-[#8B5CF6]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;