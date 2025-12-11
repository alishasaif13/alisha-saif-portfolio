import { motion } from "framer-motion";

const Projects = () => {
const projectData = [
  {
    title: "Smart Healthcare System (FYP)",
    desc: "Developed a hospital management system with modules for pharmacy, appointments, patient reports, and admin management. Includes a responsive UI and database integration for smooth workflows.",
    img: "/fyp.png",
    link: "https://github.com/alishasaif13/portfolio/tree/main/fyp-smart-healthcare-system",
  },
  {
    title: "Ecommerce Full-Stack (Web Application)",
    desc: "Built a full-stack ecommerce web application with user authentication, product management, shopping cart, and payment integration. Designed a clean, responsive UI and connected it to a backend database for real-time operations.",
    img: "/fullstack.png",
    link: "https://ecommerce-fullstack-design-two.vercel.app/",
  },
  {
    title: "Amazon Clone (Frontend Web Project)",
    desc: "Developed a static frontend clone of Amazon with product listing, search functionality, and responsive design. Focused on modern UI/UX and clean HTML, CSS, and JavaScript implementation.",
    img: "/amazon.png",
    link: "https://github.com/alishasaif13",
  },
  {
    title: "Beauty Products E-Commerce UI",
    desc: "Designed a responsive e-commerce UI for beauty products featuring product cards, filtering, and interactive components. Applied modern design principles for a smooth user experience.",
    img:"/ui.png",
    link: "https://store-xz22.vercel.app/",
  },
  {
    title: "Almahdia Fashion App",
    desc: "Developed a modern and responsive fashion e-commerce website with stylish UI, smooth navigation, product listings, and user-friendly interactions for a complete shopping experience.",
    img:"/almahdia.png",
    link: "http://almahdia-fashion-app.vercel.app",
  },
  {
    title: "Full-Stack POS & Inventory Management System",
    desc: "Built a scalable POS and inventory system with modules for products, categories and purchases. Features include stock updates, invoice generation, search & pagination, and reusable components. Backend implemented with Node.js, Express, and MongoDB.",
    img: "/pos2.png",
    link: "https://github.com/alishasaif13/pos-inventory-system",
  },
  {
  title: "Kids Learning App",
  desc: "Designed an interactive learning app for young children with modules for alphabets, counting and mini-games. Built reusable card components, tracing features and visual activities to make learning simple and engaging. Developed with React, custom hooks and clean modular UI.",
  img: "/kidsapp.png",
  link: "https://kids-tracing-app.vercel.app/"
}

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
