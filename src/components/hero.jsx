import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import profileImage from "../assets/images/1736217507441.jpeg";

const HeroSection = () => {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary-500 mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-accent-500 mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Left content */}
          <div className="md:w-1/2 space-y-8">
            <motion.div variants={slideUp}>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Muzammil Riaz
              </span>
              <br />
              Building digital experiences
              <br />
              that{" "}
              <span className="relative inline-block">
                matter
                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-400/30 dark:bg-primary-600/30 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg"
            >
              I craft high-performing and beautiful digital experiences focused
              on conversion, accessibility, and user experience.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-gray-700 font-medium rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary-500/20 flex items-center gap-2">
                View My Work <FiArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-2">
                Download CV
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right content - image/illustration */}
          <motion.div
            variants={slideUp}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {profileImage}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary-500/10 dark:bg-primary-400/10 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-secondary-500/10 dark:bg-secondary-400/10 -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
