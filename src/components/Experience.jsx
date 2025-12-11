import { motion } from "framer-motion";

const Experience = () => {
  const expData = [
    {
      role: "MERN Stack Developer",
      company: "Technic Mentor Software House",
      companyUrl: "https://technicmentors.com/",
      duration: "August 2025 - Present",
      desc: "Working on full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      certificate: null, 
    },
    {
      role: "Frontend Developer (Remote)",
      company: "Freelance / Upwork",
      companyUrl: "https://www.upwork.com/nx/find-work/best-matches",
      duration: "2025 - Presnt",
      desc: "Designed and developed responsive UI for small businesses and startup clients.",
      certificate: null,
    },
    {
      role: "Web Development (Intern Remote)",
      company: "Developer.hub",
      companyUrl: "https://developershubcorp.com/", 
      duration: " June 2025 - August 2025",
      desc: "Learned core frontend technologies and built multiple responsive landing pages.",
      certificate: "/developer.jpeg", 
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0A0F1F] px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-[#A855F7] pl-6 space-y-10">
          {expData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-6 rounded-xl shadow-xl border border-[#1F2937] hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="w-4 h-4 bg-[#A855F7] rounded-full absolute -left-[11px] mt-2.5"></div>

              <h3 className="text-xl font-semibold text-[#A855F7]">{exp.role}</h3>

            
              <a
                href={exp.companyUrl}
                target="_blank"
                className="text-gray-300 font-medium hover:text-[#8B5CF6] transition-all underline"
              >
                {exp.company}
              </a>

              <span className="block text-gray-500 text-sm">{exp.duration}</span>
              <p className="text-gray-400 mt-3">{exp.desc}</p>

            
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  className="inline-block mt-4 text-sm px-4 py-2 border border-[#8B5CF6] text-white rounded-lg hover:bg-[#8B5CF9] hover:text-white transition-all"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
