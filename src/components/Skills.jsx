import { motion } from "framer-motion";

const Skills = () => {
  const coreSkills = [
    "Golang",
    "PostgreSQL",
    "Node.js",
    "Express.js",
    "REST APIs",
  ];

  const frontend = [
     "HTML",
    "CSS",
    "Bootstrap",
    "React.js",
    "JavaScript",
   
  ];

  const databases = [
    "MongoDB",
    "PostgreSQL",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Cursor AI",
    "VMware",
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A0F1F] px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-12">
          Skills
        </h2>

        {/* CORE */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#8B5CF6] mb-4"
        >
          Core Backend Skills
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {coreSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
              hover:border-[#8B5CF6] hover:text-white transition duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* FRONTEND */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#8B5CF6] mb-4"
        >
          Frontend
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {frontend.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
              hover:border-[#8B5CF6] hover:text-white transition duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* DATABASES */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#8B5CF6] mb-4"
        >
          Databases
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {databases.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
              hover:border-[#8B5CF6] hover:text-white transition duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* TOOLS */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#8B5CF6] mb-4"
        >
          Tools
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-[#111827] border border-[#1F2937] text-gray-300 rounded-full 
              hover:border-[#8B5CF6] hover:text-white transition duration-300"
            >
              {tool}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;