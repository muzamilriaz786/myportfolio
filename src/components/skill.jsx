import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiSmartphone,
  FiShield,
} from "react-icons/fi";

const SkillsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and performant user interfaces with React, Next.js, and modern CSS.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications and APIs with Node.js, Express, and various databases.",
      technologies: ["Node.js", "Express", "NestJS", "REST API", "GraphQL"],
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Database Management",
      description:
        "Designing and optimizing database schemas and queries for performance and scalability.",
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "Prisma", "Redis"],
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Full Stack Architecture",
      description:
        "Designing complete application architectures with proper separation of concerns.",
      technologies: [
        "Microservices",
        "Monorepos",
        "Docker",
        "CI/CD",
        "Testing",
      ],
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with React Native and native technologies.",
      technologies: ["React Native", "Expo", "iOS", "Android", "Flutter"],
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "DevOps & Security",
      description:
        "Implementing secure deployment pipelines and infrastructure as code practices.",
      technologies: ["AWS", "Azure", "GitHub Actions", "OAuth", "JWT"],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={slideUp} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300 mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I've worked with a wide range of technologies in the web
              development world. Here are the areas I'm most experienced in.
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional info */}
          <motion.div variants={slideUp} className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Currently learning: Web3 & Blockchain development
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
