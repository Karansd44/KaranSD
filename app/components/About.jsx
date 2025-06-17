import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floating = {
    initial: { y: 0 },
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Glow effect for cards
  const cardGlow = {
    initial: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
    hover: {
      boxShadow: isDarkMode 
        ? "0 0 20px rgba(124, 58, 237, 0.6)" 
        : "0 0 20px rgba(59, 130, 246, 0.6)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-[10%] py-20 scroll-mt-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Enhanced floating decorative elements */}
      <motion.div
        className="absolute -left-20 top-1/4 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl -z-10"
        variants={floating}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl -z-10"
        variants={floating}
        initial="initial"
        animate="animate"
        transition={{ duration: 10, delay: 2 }}
      />
      <motion.div
        className="absolute left-1/2 bottom-1/3 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl -z-10"
        variants={floating}
        initial="initial"
        animate="animate"
        transition={{ duration: 12, delay: 1 }}
      />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400"
          >
            Introduction
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          >
            About Me
          </motion.h2>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 my-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Profile Image with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            className="relative w-64 sm:w-80 rounded-3xl max-w-none group"
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            <motion.div
              whileHover={{ 
                boxShadow: "0 20px 50px -10px rgba(59, 130, 246, 0.5)"
              }}
              className="overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl"
            >
              <Image
                src={assets.user_image}
                alt="user"
                width={320}
                height={320}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-2 rounded-full shadow-xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              viewport={{ once: false }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-inner">
                {infoList.length}+
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1 max-w-2xl"
            viewport={{ once: false }}
          >
            <motion.p
              className="mb-10 text-center lg:text-left font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Aspiring Full Stack Developer pursuing B.Tech in Computer Science at Cambridge Institute of Technology.
              Skilled in React.js, Tailwind CSS, MySQL, and MongoDB with hands-on project and internship experience.
              Passionate about building scalable applications and constantly improving through real-world challenges.
            </motion.p>

            {/* Enhanced info cards with glow effect */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              viewport={{ once: false }}
            >
              {infoList.map(({ icon, iconDark, title, description, counter }, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  initial="initial"
                  whileHover={{
                    y: -8,
                    boxShadow: isDarkMode 
                      ? "0 10px 25px -5px rgba(124, 58, 237, 0.4)" 
                      : "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                  }}
                  className="relative border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 dark:border-white/30"
                  custom={index}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: isDarkMode 
                      ? "linear-gradient(135deg, rgba(17, 24, 39, 0.3) 0%, rgba(31, 41, 55, 0.3) 100%)" 
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(243, 244, 246, 0.3) 100%)"
                  }}
                >
                  <motion.div
                    variants={cardGlow}
                    className="absolute inset-0 rounded-xl -z-10"
                  />
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <Image
                      src={isDarkMode ? iconDark : icon}
                      alt={title}
                      width={20}
                      height={20}
                      className="w-5"
                    />
                  </div>
                  <h3 className="my-3 font-semibold text-gray-700 dark:text-white text-lg text-center sm:text-left">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80 text-center sm:text-left">
                    {description}
                  </p>
                  {counter && (
                    <motion.div 
                      className={counter.className}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: counter.duration }}
                    >
                      {counter.target}{counter.suffix}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced tools section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-16"
              viewport={{ once: false }}
            >
              <motion.h4
                className="mb-8 text-gray-700 font-Ovo dark:text-white/80 text-xl sm:text-2xl flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <span className="h-px w-10 bg-gray-400 dark:bg-white/50"></span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                  Tools & Technologies
                </span>
                <span className="h-px flex-1 bg-gray-400 dark:bg-white/50"></span>
              </motion.h4>
              
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
                viewport={{ once: false }}
              >
                {toolsData.map((tool, index) => (
                  <motion.li
                    variants={item}
                    whileHover={{ 
                      scale: 1.15,
                      y: -8,
                      boxShadow: isDarkMode 
                        ? "0 10px 25px -5px rgba(124, 58, 237, 0.4)" 
                        : "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-xl cursor-pointer transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm dark:border-white/30 hover:shadow-lg"
                    key={index}
                    style={{
                      background: isDarkMode 
                        ? "linear-gradient(135deg, rgba(31, 41, 55, 0.5) 0%, rgba(17, 24, 39, 0.5) 100%)" 
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(243, 244, 246, 0.5) 100%)"
                    }}
                  >
                    <Image 
                      src={tool} 
                      alt="Tool" 
                      width={28} 
                      height={28} 
                      className="w-7 sm:w-8" 
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;