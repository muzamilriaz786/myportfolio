import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/hero";
import Skill from "../components/skill";
import Gallery from "../components/Gallery";
import About from "../components/about";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Typically doesn't need animation as it's first */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="min-h-screen py-20 bg-white dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Skill />
      </motion.section>

      {/* Gallery/Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen py-20 bg-gray-550 dark:bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Gallery />
      </motion.section>
      {/* About Section */}
      <motion.section
        id="projects"
        className="min-h-screen py-20 bg-gray-550 dark:bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>
    </div>
  );
}

export default Home;
