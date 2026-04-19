import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
  <nav className="fixed w-full z-50 bg-[#0F172A]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">

  {/* subtle top highlight */}
  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent"></div>

  <div className="py-3 px-6 flex justify-between items-center">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="text-gray-300 font-medium hover:text-[#8B5CF6] transition duration-300"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8B5CF6] transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8B5CF6] transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <ul className="md:hidden bg-[#0A0F1F]/95 backdrop-blur-md px-6 pb-4 space-y-2 text-center">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="block py-2 text-gray-300 hover:text-[#8B5CF6] transition"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;