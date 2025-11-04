import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ isDarkMode }) => {
  const timelineData = [
    {
      id: 1,
      year: "2022 - Present",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Cambridge Institute of Technology",
      type: "education",
      description: "Currently pursuing Bachelor of Technology in Computer Science with specialization in software development, data structures, algorithms, and modern web technologies.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems", "Computer Networks"],
      score: "Current CGPA: 8.75",
      icon: "🎓"
    },
    {
      id: 2,
      year: "2020 - 2022",
      title: "Higher Secondary Education (CBSE)",
      organization: "Lake Montfort School",
      type: "education",
      description: "Completed Pre-University Course with focus on Mathematics, Physics, Chemistry and computer science. Developed strong analytical and problem-solving skills.",
      skills: ["Mathematics", "Physics", "Chemistry","Computer Science", "Analytical Thinking", "Problem Solving"],
      score: "90.5%",
      icon: "🎓"
    },
    {
      id: 3,
      year: "2020",
      title: "Secondary School (10th Grade)",
      organization: "Narayana e-Techno School",
      type: "education",
      description: "Completed secondary education with excellent grades. Developed interest in mathematics and science subjects that led to choosing computer science.",
      skills: ["Mathematics", "Science", "English", "Academic Excellence", "Time Management"],
      score: "80%",
      icon: "🏫"
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-blue-600";
      case "certification":
        return "from-purple-500 to-purple-600";
      case "milestone":
        return "from-green-500 to-green-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="timeline"
      className="w-full px-4 sm:px-[8%] py-20 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute -right-20 top-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400"
          >
            My Journey
          </motion.h4>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-gray-600 dark:text-gray-300"
          >
            My educational journey and learning milestones that shaped my development as a software engineer.
          </motion.p>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative"
        >
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} transform md:-translate-x-2 z-10 shadow-lg`}
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
                    : 'bg-white border-gray-200 backdrop-blur-sm'
                }`}>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                        {item.organization}
                      </p>
                      {/* Score and Achievement */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Score:</span>
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">
                            {item.score}
                          </span>
                        </div>
                        {item.achievement && (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Achievement:</span>
                            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-medium">
                              🏆 {item.achievement}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;