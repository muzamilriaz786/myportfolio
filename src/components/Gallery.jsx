import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiFilter,
  FiCode,
  FiGlobe,
} from "react-icons/fi";

// Import your project images (replace with your actual image paths)
import portfolioImg from "../assets/images/project portfolio.png";
import blogImg from "../assets/images/screencapture-blogeagle-qrtv-vercel-app-2025-06-24-16_53_02.png";
import youtubeImg from "../assets/images/screencapture-localhost-8020-2025-06-25-13_40_47.png";
import TipCalImg from "../assets/images/screencapture-codepen-io-muzammilriaz786-full-MYYRMOm-2025-06-25-14_47_45 (1).png";
import ecommerImg from "../assets/images/screencapture-localhost-5174-2025-06-25-20_11_57.png";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with dark mode and animations.",
      tags: ["react", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      image: portfolioImg,
      links: {
        code: "https://github.com/muzamilriaz786/myportfolio",
        live: "https://myportfolio-nine-rho-71.vercel.app/",
      },
    },
    {
      id: 2,
      title: "Eagle Blog Website",
      description:
        "A Blog website with differnet functionalities like login, register, add post, delete post, edit post,etc",
      tags: ["ejs", "Tailwind CSS", "particle.js", "html", "nodejs", "mongodb"],
      category: "fullstack",
      image: blogImg,
      links: {
        code: "https://github.com/zahrgul786/blogeagle",
        live: "https://blogeagle.vercel.app/login",
      },
    },
    {
      id: 3,
      title: "youtube Clone with studio",
      description:
        "A Youtube Clone with studio, having functionalities of the google account registration with user channel ",
      tags: ["ejs", "Tailwind CSS", "html", "nodejs", "mongodb", "expressjs"],
      category: "fullstack",
      image: youtubeImg,
      links: {
        code: "https://github.com/muzamilriaz786/Youtube-Clone",
        live: "#",
      },
    },
    {
      id: 4,
      title: "Tip Calculator",
      description: "Calculate your tip with ease ",
      tags: ["html", "Tailwind CSS", "javascript", "css"],
      category: "frontend",
      image: TipCalImg,
      links: {
        code: "https://codepen.io/muzammilriaz786/pen/MYYRMOm",
        live: "https://codepen.io/muzammilriaz786/pen/MYYRMOm",
      },
    },
    {
      id: 5,
      title: "Perfume Ecommerce Website",
      description:
        "the admin panel as well as client panel with all functionalities like payment integeration through stripe",
      tags: [
        "html",
        "Tailwind CSS",
        "javascript",
        "css",
        "react",
        "nodejs",
        "expressjs",
        "mongodb",
        "stripe",
      ],
      category: "fullstack",
      image: ecommerImg,
      links: {
        code: "https://github.com/muzamilriaz786/MERN-Stack-Ecommerce-Website",
        live: "#",
      },
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const filterItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works. Filter by category to see specific
            projects.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={filterItem}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                activeFilter === filter.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.id === "all" && <FiFilter className="mr-2" />}
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                className="relative group"
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                    >
                      <div className="flex gap-3">
                        {project.links.live && (
                          <motion.a
                            href={project.links.live}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiGlobe />
                          </motion.a>
                        )}
                        {project.links.code && (
                          <motion.a
                            href={project.links.code}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiCode />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          className="text-sm text-primary-600 dark:text-gray-100 hover:underline flex items-center"
                          whileHover={{ x: 3 }}
                        >
                          <FiExternalLink className="mr-1" /> Live Demo
                        </motion.a>
                      )}
                      {project.links.code && (
                        <motion.a
                          href={project.links.code}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
                          whileHover={{ x: 3 }}
                        >
                          <FiGithub className="mr-1" /> View Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category. Check back later!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
