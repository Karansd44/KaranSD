import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Color variants for project categories
  const categoryColors = {
    "Web Design": "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border-blue-500/30",
    "Mobile App": "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 border-purple-500/30",
    "Python Application": "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500/30",
    "Web Application": "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-500/30",
  };

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-4 sm:px-[8%] py-20 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        className="absolute -left-20 top-1/4 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl -z-10"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl -z-10"
        animate={{
          y: [-30, 30, -30],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <motion.h4
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.6,
              ease: "backOut"
            }}
            className="mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400"
          >
            My Portfolio
          </motion.h4>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8,
              ease: "backOut"
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          >
            My Latest Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.6,
              ease: "backOut"
            }}
            className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-gray-600 dark:text-gray-300 text-sm sm:text-base"
          >
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in full stack web development.
          </motion.p>
        </div>

        {/* Projects grid - 3 columns for better image visibility */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workData.map((project, index) => (
            <motion.div
              variants={item}
              key={index}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Card container with enhanced styling */}
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' 
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  {/* Image container with better aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
                    {/* Image with zoom effect */}
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ 
                        backgroundImage: `url(${project.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Gradient overlay for better text readability */}
                    <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                      hoveredCard === index 
                        ? 'from-black/80 via-black/40 to-transparent opacity-100' 
                        : 'from-black/50 via-transparent to-transparent opacity-60'
                    }`} />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                        categoryColors[project.description] || categoryColors["Web Design"]
                      }`}>
                        {project.description}
                      </span>
                    </div>

                    {/* External link icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0,
                        scale: hoveredCard === index ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-lg"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 text-blue-600 dark:text-blue-400" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Content section */}
                  <div className="p-6">
                    <motion.h3
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Description with better visibility */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description === "Web Design" && "A modern and responsive web design showcasing clean UI/UX principles."}
                      {project.description === "Mobile App" && "Full-featured mobile application with intuitive user interface."}
                      {project.description === "Python Application" && "Robust Python-based application with efficient functionality."}
                      {project.description === "Web Application" && "Advanced web application with modern technologies."}
                    </p>

                    {/* View project button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm"
                    >
                      <span>View Project</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Animated border on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                  />
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.1, 
            duration: 0.6,
            ease: "backOut"
          }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/Karansd44?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              background: isDarkMode 
                ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' 
                : 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: 'white'
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 font-medium text-sm"
          >
            View More Projects
            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                alt="Right arrow"
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;