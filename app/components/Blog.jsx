import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { blogPosts } from "@/assets/assets"; // Assuming blog data is stored here

const Blog = () => {
  return (
    <motion.div
      id="Blog"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Thoughts
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Blog
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-20"
      >
        {blogPosts.map(({ title, description }, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="mt-4 text-xl font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-white/80 mt-2">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
