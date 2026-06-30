import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20  bg-[#0A0F1F] border-t border-[#1F2937] px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I'm currently open to backend and full-stack development opportunities.
          If you have a job opportunity, freelance project, or collaboration,
          I'd love to hear from you.
        </p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alisha.saif456@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F172A] border border-[#1F2937] rounded-xl p-6 hover:border-[#8B5CF6] hover:shadow-[0_0_20px_#8B5CF6] transition"
          >
            <FaEnvelope className="text-[#8B5CF6] text-3xl mx-auto" />

            <h3 className="text-white mt-4 font-semibold">
              Email
            </h3>

            <p className="text-gray-400 text-sm mt-2 break-all">
              alisha.saif456@gmail.com
            </p>
          </a>

          <div className="bg-[#0F172A] border border-[#1F2937] rounded-xl p-6">
            <FaMapMarkerAlt className="text-[#8B5CF6] text-3xl mx-auto" />

            <h3 className="text-white mt-4 font-semibold">
              Location
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Gujranwala, Pakistan
            </p>
          </div>

          <div className="bg-[#0F172A] border border-[#1F2937] rounded-xl p-6">
            <h3 className="text-[#8B5CF6] text-3xl font-bold">
              ✓
            </h3>

            <h3 className="text-white mt-4 font-semibold">
              Availability
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Open to Opportunities
            </p>
          </div>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-5 mt-12">

          <a
            href="https://github.com/alishasaif13"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center hover:bg-[#8B5CF6] transition"
          >
            <FaGithub className="text-white text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/alisha-saif-604057287"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center hover:bg-[#8B5CF6] transition"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;