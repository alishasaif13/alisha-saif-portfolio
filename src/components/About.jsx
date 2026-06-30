import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6  bg-[#0A0F1F] border-t border-[#1F2937] pt-26"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <motion.div
          className="text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-[#8B5CF6]">Alisha Saif</span>
          </motion.h1>

          <motion.h2
            className="mt-4 text-xl md:text-2xl font-medium text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
        
            Backend Developer | Golang | PostgreSQL | MERN Stack
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-400 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
          I build scalable backend systems and full-stack web applications using Golang, PostgreSQL, and the MERN stack. Experienced in developing RESTful APIs, JWT authentication, RBAC, and multi-tenant architectures for healthcare and facility management systems.
          
          </motion.p>

          <motion.p
            className="mt-3 text-gray-400 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Currently working as a Golang Developer, building production-level backend services, optimizing PostgreSQL databases, and collaborating on enterprise healthcare solutions.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
              <a
              href="https://drive.google.com/file/d/1laJLArbZw-Ebhvv_M2VWnUw831XY1Jbr/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#8B5CF6] text-[#8B5CF6] rounded-lg hover:bg-[#8B5CF6] hover:text-white transition duration-300"
            >
              View CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-[#8B5CF6] text-white rounded-lg shadow-lg hover:shadow-[0_0_15px_#8B5CF6] transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-[#8B5CF6] text-[#8B5CF6] rounded-lg hover:bg-[#8B5CF6] hover:text-white transition duration-300"
            >
              Contact Me
            </a>

          
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative">
            <img
              src="/alisha.jpeg"
              alt="Alisha Saif"
             className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#8B5CF6] shadow-[0_0_25px_#8B5CF6] transition duration-500 hover:scale-105"
            />
           <div className="absolute inset-0 -z-10 rounded-full bg-[#8B5CF6] blur-3xl opacity-20"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;