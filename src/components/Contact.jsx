import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0A0F1F] flex justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-400 mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:alishasaif132@gmail.com"
            className="p-4 bg-[#111827] border border-[#1F2937] text-[#A855F7] rounded-full 
                       hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] 
                       transition-all duration-300 hover:-translate-y-2"
          >
            <FaEnvelope size={24} />
          </a>

          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            className="p-4 bg-[#111827] border border-[#1F2937] text-[#A855F7] rounded-full 
                       hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] 
                       transition-all duration-300 hover:-translate-y-2"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            className="p-4 bg-[#111827] border border-[#1F2937] text-[#A855F7] rounded-full 
                       hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] 
                       transition-all duration-300 hover:-translate-y-2"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.instagram.com/alisha.saif45?igsh=bnVxaXJ5dXAxazNw"
            target="_blank"
            className="p-4 bg-[#111827] border border-[#1F2937] text-[#A855F7] rounded-full 
                       hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] 
                       transition-all duration-300 hover:-translate-y-2"
          >
            <FaInstagram size={24} />

          </a>
          
        </div>

        <p className="text-gray-400 mt-8">
          📩 <span className="text-[#A855F7] font-medium">alisha.saif456@gmail.com </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
