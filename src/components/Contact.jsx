import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0A0F1F] px-6 flex justify-center">
      <div className="max-w-3xl w-full text-center">

        <h2 className="text-4xl font-bold text-white mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-10">
          Open to backend and full-stack opportunities. If you have a role or project, feel free to reach out.
        </p>

        {/* PRIMARY CTA */}
        <a
          href="mailto:alisha.saif456@gmail.com"
          className="inline-block px-6 py-3 bg-[#8B5CF6] text-white rounded-lg 
          shadow-md hover:shadow-[0_0_15px_#8B5CF6] transition duration-300"
        >
          Email Me
        </a>

        {/* SOCIALS */}
        <div className="flex justify-center gap-6 mt-10">

          <a
            href="mailto:alisha.saif456@gmail.com"
            className="p-4 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
            hover:border-[#8B5CF6] hover:text-white transition duration-300"
          >
            <FaEnvelope size={22} />
          </a>

          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
            hover:border-[#8B5CF6] hover:text-white transition duration-300"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
            hover:border-[#8B5CF6] hover:text-white transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>

        </div>

        {/* EMAIL TEXT */}
        <p className="text-gray-500 mt-8 text-sm">
          alisha.saif456@gmail.com
        </p>

      </div>
    </section>
  );
};

export default Contact;