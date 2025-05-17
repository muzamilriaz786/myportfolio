import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { SiDevdotto, SiHashnode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/20 mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary-500/20 mix-blend-screen filter blur-3xl animate-float animation-delay-4000"></div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              About My Portfolio
            </h3>
            <p className="mb-4 leading-relaxed">
              This interactive portfolio showcases my work as a full-stack
              developer, featuring cutting-edge web technologies and modern
              design principles.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold">JS</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Currently available for</p>
                <p className="font-medium text-white">Freelance & Consulting</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#about"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FiArrowUp className="rotate-90 mr-2" /> About
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#skills"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FiArrowUp className="rotate-90 mr-2" /> Skills
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#projects"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FiArrowUp className="rotate-90 mr-2" /> Projects
                </motion.a>
              </li>
         
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="space-y-4">
              <p>Let's build something amazing together!</p>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/muzamilriaz786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://linkedin.com/in/muzammilriaz786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="mailto:your.email@example.com"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition-colors"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </motion.a>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  BLOG
                </h4>
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://dev.to/muzammilriaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Dev.to"
                  >
                    <SiDevdotto className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://hashnode.com/@MuzammilRiaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Hashnode"
                  >
                    <SiHashnode className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating shape decoration */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-primary-600/20 filter blur-xl opacity-70"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-secondary-600/20 filter blur-xl opacity-70"
      />
    </footer>
  );
};

export default Footer;
