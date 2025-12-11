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
    <nav className="backdrop-blur-lg bg-[#0A0F1F]/70 border-b border-[#1F2937] text-gray-200 fixed w-full z-50 shadow-[0_0_10px_#A855F733]">
      <div className="py-4 px-6 flex justify-between items-center">
  
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-14 w-17  " />
          <span className="text-xl font-bold tracking-wide"></span>
        </a>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="font-medium hover:text-[#A855F7] transition-all duration-300 hover:tracking-wide hover:drop-shadow-[0_0_10px_#A855F7]"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://linkedin.com" target="_blank" className="hover:text-[#A855F7] hover:drop-shadow-[0_0_10px_#A855F7] text-xl transition-all">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" className="hover:text-[#A855F7] hover:drop-shadow-[0_0_10px_#A855F7] text-xl transition-all">
            <FaGithub />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0A0F1F]/90 backdrop-blur-lg px-6 pb-4 space-y-2 text-center">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="block py-2 hover:text-[#A855F7] hover:drop-shadow-[0_0_10px_#A855F7] transition-all duration-300"
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
