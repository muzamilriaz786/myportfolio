import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { SiLeetcode, SiCodepen } from "react-icons/si";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
    { name: "Tools", items: ["Git", "Figma", "VS Code", "Postman"] },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={slideUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300 mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I build exceptional and accessible digital experiences for the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={slideUp}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative bottom-18 w-200 h-150 md:w-100 md:h-100 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  <img src="../assets/images/1736217507441.jpeg" alt="" />
                </span>
              </div>
           
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={fadeIn} className="space-y-6">
            <motion.div variants={slideUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-primary-600 dark:text-primary-400">
                Muzammil Riaz
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a full-stack developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With over 5 years of experience, I've worked with startups and
                established companies to bring their ideas to life.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me hiking, reading sci-fi
                novels, or experimenting with new cooking recipes.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={slideUp} className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                My Skills
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <h5 className="font-medium text-gray-700 dark:text-gray-400 mb-2">
                      {skill.name}
                    </h5>
                    <ul className="space-y-1">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors flex items-center">
                <FiDownload className="mr-2" />
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={slideUp} className="flex gap-4 pt-4">
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
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="CodePen"
              >
                <SiCodepen className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
