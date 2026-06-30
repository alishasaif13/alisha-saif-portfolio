import { motion } from "framer-motion";

const Courses = () => {
  const coursesData = [
    {
      title: "Advanced Web Application Development",
      provider: "NAVTTC - Prime Minister's Youth Skills Development Program",
      providerUrl: "https://navttc.gov.pk/",
      partner: "Training Partner: PAPTECH Pvt. Ltd. (Summer of Code B-II)",
      duration: "Sep 2025 – Dec 2025",
      grade: "Grade: A+",
      desc: "Completed hands-on training in full-stack web application development covering React.js, Node.js, Express.js, MongoDB, RESTful APIs, Git/GitHub, and modern web development practices.",
      certificate: "/navtac.jpeg",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-[#0F172A] px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Courses & Certifications
        </h2>

        <div className="relative border-l-4 border-[#8B5CF6] pl-6 space-y-10">
          {coursesData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-6 rounded-xl border border-[#1F2937] shadow-lg
              hover:shadow-[0_0_15px_#8B5CF6] hover:border-[#8B5CF6]
              transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="w-4 h-4 bg-[#8B5CF6] rounded-full absolute -left-[11px] mt-2.5"></div>

              <h3 className="text-lg md:text-xl font-semibold text-[#8B5CF6]">
                {course.title}
              </h3>

              <a
                href={course.providerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-medium hover:text-[#8B5CF6] transition underline"
              >
                {course.provider}
              </a>

              <p className="text-gray-500 text-sm mt-1">
                {course.partner}
              </p>

              <span className="block text-gray-500 text-sm mt-1">
                {course.duration}
              </span>

              <span className="block text-[#8B5CF6] text-sm mt-1 font-medium">
                {course.grade}
              </span>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {course.desc}
              </p>

              <a
                href={course.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm px-4 py-2 border border-[#8B5CF6] text-white rounded-lg hover:bg-[#8B5CF6] transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;