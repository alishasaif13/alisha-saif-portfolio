

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-400 py-10 border-t border-white/10 mt-2">
      <div className="max-w-5xl mx-auto text-center">

        {/* divider line */}
        <div className="w-16 h-[2px] bg-[#8B5CF6] mx-auto mb-4 rounded-full"></div>

        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#A855F7] font-medium">Alisha Saif</span>.  
          Built with clean and scalable code.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
