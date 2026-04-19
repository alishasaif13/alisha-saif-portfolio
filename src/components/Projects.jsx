import { motion } from "framer-motion";

const Projects = () => {
const projectData = [
  {
    title: "Smart Healthcare System (FYP)",
    desc: "Developed a healthcare management system with authentication, role-based access, and modules for patients, pharmacy, and appointments.",
    img: "/fyp.png",
    link: "https://github.com/alishasaif13/portfolio/tree/main/fyp-smart-healthcare-system",
  },
  {
    title: "Ecommerce Full-Stack Application",
    desc: "Built a full-stack e-commerce application with authentication, product management, cart, and order processing.",
    img: "/fullstack.png",
    link: "https://ecommerce-fullstack-design-two.vercel.app/",
  },
  {
    title: "Amazon Clone (UI Project)",
    desc: "Created a responsive Amazon-style UI with product listings, search functionality, and clean layout design.",
    img: "/amazon.png",
    link: "https://github.com/alishasaif13",
  },
  {
    title: "Beauty Products E-Commerce UI",
    desc: "Designed a responsive e-commerce UI with product cards, filtering, and modern user interface components.",
    img: "/ui.png",
    link: "https://store-xz22.vercel.app/",
  },
  {
    title: "Almahdia Fashion UI App",
    desc: "Developed a responsive fashion e-commerce frontend with structured product listings and smooth navigation.",
    img: "/almahdia.png",
    link: "http://almahdia-fashion-app.vercel.app",
  },
  {
    title: "Full-Stack POS & Inventory Management System",
    desc: "Built an inventory system with product management, stock tracking, search, pagination, and invoice handling.",
    img: "/pos2.png",
    link: "https://github.com/alishasaif13/pos-inventory-system",
  },
  {
    title: "Kids Learning Hub UI App",
    desc: "Developed an interactive learning application with tracing, matching, and modular UI components for children.",
    img: "/kidsapp1.png",
    link: "https://kids-tracing-app.vercel.app/",
  },
  {
    title: "MathFlow Adaptive Learning Platform",
    desc: "Building an adaptive learning platform with role-based access, progress tracking, and rule-based difficulty adjustment.",
    img: "/mathflow.png",
    link: "https://github.com/alishasaif13/mathflow",
  },
];
  return (
  <section id="projects" className="py-20 bg-[#0A0F1F] px-6">
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
