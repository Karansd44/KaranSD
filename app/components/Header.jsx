import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image 
          src={assets.profile_img || "/default-profile.png"} 
          alt="Karan SD Profile" 
          width={128}
          height={128}
          className="rounded-full w-32 h-32 object-cover border-4 border-white dark:border-gray-800 shadow-lg"
          onError={(e) => {
            e.currentTarget.src = "/default-profile.png";
          }}
        />
      </motion.div>

      {/* Name with waving hand */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Karan SD
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {assets.hand_icon ? (
            <Image 
              src={assets.hand_icon} 
              alt="Waving hand" 
              width={24}
              height={24}
              className="w-6 h-6"
            />
          ) : (
            <span className="text-2xl">👋</span>
          )}
        </motion.div>
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
      >
        Full Stack Web Developer
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300"
      >
        I am a Full Stack Developer, currently pursuing my Engineering degree at Cambridge Institute of Technology.
      </motion.p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:border-gray-600 hover:bg-gray-900 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          Contact me
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {assets.right_arrow_white ? (
              <Image 
                src={assets.right_arrow_white} 
                alt="Arrow" 
                width={16}
                height={16}
                className="w-4 h-4"
              />
            ) : (
              <span className="text-white">→</span>
            )}
          </motion.div>
        </motion.a>

        {/* Enhanced Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.2,
            type: "spring",
            stiffness: 300,
            damping: 10
          }}
          href="/Karan.pdf"
          download
          className="px-10 py-3 rounded-full flex items-center gap-2 relative overflow-hidden group"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-100 dark:opacity-90 rounded-full" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full" />
          
          {/* Button content */}
          <span className="relative z-10 text-white font-medium">
            My Resume
          </span>
          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="relative z-10"
          >
            {assets.download_icon_white ? (
              <Image 
                src={assets.download_icon_white} 
                alt="Download" 
                width={16}
                height={16}
                className="w-4 h-4"
              />
            ) : (
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
            )}
          </motion.div>
          
          {/* Pulse animation */}
          <motion.span
            className="absolute inset-0 border-2 border-white rounded-full opacity-0 group-hover:opacity-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1.2, 
              opacity: [0, 0.3, 0],
              transition: { 
                repeat: Infinity, 
                duration: 2,
                ease: "easeOut"
              }
            }}
          />
        </motion.a>
      </div>
      
      {/* Enhanced Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-8 flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-sm mb-2 font-Ovo text-gray-600 dark:text-gray-400"
        >
          Connect with me on
        </motion.p>
        
        <div className="flex gap-4">
          {/* GitHub Link */}
          <motion.a
            href="https://github.com/Karansd44"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 15,
              duration: 0.5
            }}
            className="p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center shadow-md relative overflow-hidden group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            
            {/* GitHub icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            
            {/* Pulse animation */}
            <motion.span
              className="absolute inset-0 border-2 border-purple-500 rounded-full opacity-0 group-hover:opacity-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1.2, 
                opacity: [0, 0.5, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeOut"
                }
              }}
            />
          </motion.a>

          {/* LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/karan-s-d-69577434a/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 15,
              duration: 0.5,
              delay: 0.1
            }}
            className="p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center shadow-md relative overflow-hidden group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            
            {/* LinkedIn icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            
            {/* Pulse animation */}
            <motion.span
              className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1.2, 
                opacity: [0, 0.5, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeOut"
                }
              }}
            />
          </motion.a>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-2 text-xs text-gray-500 dark:text-gray-400 font-Ovo"
        >
          @Karansd44
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Header;