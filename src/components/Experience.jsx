import { motion } from "framer-motion";

const Experience = () => {
  const expData = [
    {
      role: "Golang Developer",
      company: "Bytes Software House, Gujranwala",
      companyUrl: "#",
      duration: "Mar 2026 – Present",
      desc: "Developing backend systems using Golang and PostgreSQL, building RESTful APIs, handling database design, and optimizing performance for production-level applications.",
      certificate: null,
    },
    {
      role: "Web Developer",
      company: "Technic Mentors, Gujranwala",
      companyUrl: "https://technicmentors.com/",
      duration: "Aug 2025 – Jan 2026",
      desc: "Worked on full-stack web applications using MERN stack, implemented REST APIs, and contributed to feature development and performance improvements.",
      certificate: "/technic.jpeg", // ← apna actual file name yahan set karo
    },
    {
      role: "MERN Stack Development Intern",
      company: "DevelopersHub Corporation (Remote)",
      companyUrl: "https://developershubcorp.com/",
      duration: "Jun 2025 – Aug 2025",
      desc: "Built responsive web applications and learned core frontend and backend concepts including React, APIs, and database integration.",
      certificate: "/developer.jpeg",
    },
    {
      role: "Frontend Developer (Freelance)",
      company: "Upwork / Freelance",
      companyUrl: "https://www.upwork.com/",
      duration: "2025 – Present",
      desc: "Developed responsive UI for clients, focusing on clean design, usability, and performance optimization.",
      certificate: null,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0A0F1F] px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-[#8B5CF6] pl-6 space-y-10">
          {expData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-6 rounded-xl border border-[#1F2937] shadow-lg 
              hover:shadow-[0_0_15px_#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* DOT */}
              <div className="w-4 h-4 bg-[#8B5CF6] rounded-full absolute -left-[11px] mt-2.5"></div>

              <h3 className="text-lg md:text-xl font-semibold text-[#8B5CF6]">
                {exp.role}
              </h3>

              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-medium hover:text-[#8B5CF6] transition underline"
              >
                {exp.company}
              </a>

              <span className="block text-gray-500 text-sm mt-1">
                {exp.duration}
              </span>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {exp.desc}
              </p>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm px-4 py-2 border border-[#8B5CF6] text-white rounded-lg hover:bg-[#8B5CF6] transition"
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