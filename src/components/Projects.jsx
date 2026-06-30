import { motion } from "framer-motion";

const Projects = () => {
const projectData = [
  {
    title: "Facility Management System (FMS)",
    desc: "Developed a multi-tenant hospital facility management backend with secure JWT authentication, RBAC, RESTful APIs, and modules for asset, inventory, housekeeping, vendor, and bed management.",
    tech: "Golang • Gin • GORM • PostgreSQL • JWT • Git",
    img: "/FMS.png",
    link: "https://github.com/alishasaif13", // update repo
  },
  {
    title: "Smart Healthcare System (Final Year Project)",
    desc: "Built a full-stack healthcare management system with appointment scheduling, patient records, authentication, and role-based access control.",
    tech: "React.js • Node.js • Express.js • MongoDB",
    img: "/fyp.png",
    link: "https://github.com/alishasaif13/portfolio/tree/main/fyp-smart-healthcare-system",
  },
  {
    title: "Full-Stack POS & Inventory Management System",
    desc: "Contributed to a POS & Inventory Management System by implementing product management, stock tracking, search, pagination, and billing-related modules as part of a collaborative development team.",
    tech: "MongoDB • Express.js • React.js • Node.js",
    img: "/pos2.png",
    link: "https://github.com/alishasaif13/pos-inventory-system",
  },
  {
    title: "E-Commerce Full-Stack Application",
    desc: "Developed a complete e-commerce platform with authentication, product management, shopping cart, and order processing.",
    tech: "React.js • Node.js • Express.js • MongoDB",
    img: "/fullstack.png",
    link: "https://ecommerce-fullstack-design-two.vercel.app/",
  },
  {
    title: "Kids Learning & Tracing App",
    desc: "Created an interactive educational application with tracing, matching activities, and engaging learning modules for children.",
    tech: "React.js • HTML5 Canvas • CSS3",
    img: "/kidsapp1.png",
    link: "https://kids-tracing-app.vercel.app/",
  },
  {
    title: "Beauty Products E-Commerce UI",
    desc: "Designed a responsive e-commerce interface with modern product listings, filtering, and reusable UI components.",
    tech: "React.js • Tailwind CSS",
    img: "/ui.png",
    link: "https://store-xz22.vercel.app/",
  },
  {
    title: "Almahdia Fashion UI",
    desc: "Built a responsive fashion e-commerce frontend with modern layouts, reusable components, and smooth navigation.",
    tech: "React.js • Bootstrap • CSS3",
    img: "/almahdia.png",
    link: "http://almahdia-fashion-app.vercel.app",
  },
];
  return (
  <section id="projects" className="py-20 bg-[#0F172A] px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-5 rounded-xl border border-[#1F2937] shadow-lg 
              hover:shadow-[0_0_15px_#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold text-[#8B5CF6] mt-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <p className="text-xs text-gray-500 mt-2">
                {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#8B5CF6] text-sm hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
