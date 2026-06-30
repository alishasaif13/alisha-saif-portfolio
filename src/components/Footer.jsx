import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Alisha Saif. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 mt-2">
          Built with React, Tailwind CSS & Framer Motion.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
