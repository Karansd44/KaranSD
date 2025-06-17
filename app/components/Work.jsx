import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  // Color variants for project titles
  const titleColors = [
    "text-blue-600 dark:text-blue-400",
    "text-purple-600 dark:text-purple-400",
    "text-emerald-600 dark:text-emerald-400",
    "text-amber-600 dark:text-amber-400"
  ];

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const cardHover = (index) => ({
    hover: {
      y: index === hoveredCard ? -8 : 0,
      scale: index === hoveredCard ? 1.02 : 1,
      boxShadow: index === hoveredCard 
        ? isDarkMode 
          ? "0 20px 40px -10px rgba(124, 58, 237, 0.25)"
          : "0 20px 40px -10px rgba(59, 130, 246, 0.25)"
        : "none",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  });

  const infoCard = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate distance from center
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    
    // Activate hover when cursor is moving toward the center
    if (distance < Math.max(rect.width, rect.height) / 2) {
      setHoveredCard(index);
    } else {
      setHoveredCard(null);
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

        {/* Projects grid - 4 columns */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {workData.map((project, index) => (
            <motion.a
              ref={el => cardRefs.current[index] = el}
              variants={item}
              whileHover="hover"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredCard(null)}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
              custom={index}
            >
              <motion.div
                variants={cardHover(index)}
                className="aspect-[4/3] bg-cover bg-center rounded-lg relative"
                style={{ 
                  backgroundImage: `url(${project.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Image overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 ${
                  index === hoveredCard ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Initial visible info */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 text-white transition-opacity duration-300 ${
                  index === hoveredCard ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h3 className={`font-bold text-md ${titleColors[index % titleColors.length]} drop-shadow-md`}>
                    {project.title}
                  </h3>
                  <p className="text-xs mt-1 text-white/80 drop-shadow-md">
                    {project.tech?.slice(0, 3).join(' • ')}
                  </p>
                </div>
                
                {/* Animated project info card */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-3"
                  initial="hidden"
                  animate={index === hoveredCard ? "visible" : "hidden"}
                  variants={infoCard}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-md p-3 shadow-lg">
                    <h3 className={`font-bold text-md ${titleColors[index % titleColors.length]}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tech?.slice(0, 4).map((tech, i) => (
                        <motion.span 
                          key={i}
                          initial={{ scale: 0 }}
                          animate={index === hoveredCard ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="text-[0.6rem] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400 flex items-center justify-center shadow-sm"
                    >
                      <Image 
                        src={isDarkMode ? assets.send_icon_dark : assets.send_icon} 
                        alt="Visit" 
                        width={12} 
                        height={12} 
                        className="w-3 h-3"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.a>
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