import { motion } from "framer-motion";

const Projects = () => {
const projectData = [
  {
    title: "Smart Healthcare System (FYP)",
    desc: "Developed a hospital management system with modules for pharmacy, appointments, patient reports, and admin management. Integrated database operations with a responsive UI to support smooth and efficient workflows.",
    img: "/fyp.png",
    link: "https://github.com/alishasaif13/portfolio/tree/main/fyp-smart-healthcare-system",
  },
  {
    title: "Ecommerce Full-Stack Application",
    desc: "Built a full-stack ecommerce web application with user authentication, product management, shopping cart, and payment integration. Connected a responsive frontend with a backend database for real-time operations.",
    img: "/fullstack.png",
    link: "https://ecommerce-fullstack-design-two.vercel.app/",
  },
  {
    title: "Amazon Clone (UI Project)",
    desc: "Developed a frontend clone of Amazon featuring product listings, search functionality, and responsive layouts. Focused on clean UI implementation using HTML, CSS, and JavaScript.",
    img: "/amazon.png",
    link: "https://github.com/alishasaif13",
  },
  {
    title: "Beauty Products E-Commerce UI",
    desc: "Designed a responsive e-commerce UI for beauty products with product cards, filtering options, and interactive components. Emphasized modern design principles for a smooth user experience.",
    img: "/ui.png",
    link: "https://store-xz22.vercel.app/",
  },
  {
    title: "Almahdia Fashion UI App",
    desc: "Developed a modern and responsive fashion e-commerce website with structured product listings, smooth navigation, and user-friendly UI interactions.",
    img: "/almahdia.png",
    link: "http://almahdia-fashion-app.vercel.app",
  },
  {
    title: "Full-Stack POS & Inventory Management System",
    desc: "Built a scalable POS and inventory management system with modules for products, categories, and purchases. Implemented stock updates, invoice generation, search, pagination, and reusable components using Node.js, Express, and MongoDB.",
    img: "/pos2.png",
    link: "https://github.com/alishasaif13/pos-inventory-system",
  },
  {
    title: "Kids Learning Hub UI App",
    desc: "Designed an interactive learning app for children with a structured flow starting from learning, tracing, and matching modules, followed by counting, English alphabets, and Haroof-e-Tahaji. Built using React with reusable components and a clean modular UI.",
    img: "/kidsapp1.png",
    link: "https://kids-tracing-app.vercel.app/",
  },
  {
    title: "MathFlow Adaptive Learning Platform",
    desc: "Developing an adaptive learning platform that personalizes math practice based on student performance. Includes role-based authentication, admin-managed content, rule-based difficulty adjustment, progress tracking, and analytics using the MERN stack.",
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-5 rounded-xl shadow-xl border border-[#1F2937] hover:shadow-[0_0_20px_#A855F7] hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-[#A855F7] mt-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                className="block mt-4 text-[#A855F7] font-medium hover:underline"
              >
                🔗 View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
