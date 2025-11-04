import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCaseStudies = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "MedMind ASK",
      subtitle: "AI-Powered Healthcare Platform",
      category: "Healthcare • Web Application",
      description: "A comprehensive healthcare platform that leverages AI to provide medical assistance and patient management solutions.",
      challenge: "Healthcare providers needed a unified platform to manage patient data, provide AI-assisted diagnostics, and streamline medical workflows while ensuring data security and compliance.",
      solution: "Developed a full-stack web application with AI integration, secure patient data management, and intuitive user interfaces for both healthcare providers and patients.",
      results: [
        "40% reduction in patient data processing time",
        "AI-assisted diagnostics with 95% accuracy",
        "HIPAA-compliant data security implementation",
        "Real-time patient monitoring dashboard"
      ],
      technologies: [
        "React.js", "Node.js", "AI/ML APIs", "MongoDB", 
        "Socket.io", "JWT Authentication"
      ],
      features: [
        "AI-powered medical assistance",
        "Patient management system", 
        "Real-time notifications",
        "Secure data encryption",
        "Multi-role access control",
        "Medical record digitization"
      ],
      image: "/work-8.png",
      liveUrl: "https://ai-powered-healthcare-medicare-ask.vercel.app/",
      githubUrl: "https://github.com/Karansd44/AI-Powered-Healthcare-Medicare-ASK-",
      timeline: "1 months",
      role: "Full Stack Developer & AI Integration"
    },
    {
      id: 2,
      title: "E-Commerce Platform", 
      subtitle: "Modern Online Shopping Experience",
      category: "E-Commerce • Full Stack",
      description: "A feature-rich e-commerce platform with advanced shopping cart functionality, payment integration, and inventory management.",
      challenge: "Small businesses needed a cost-effective, scalable e-commerce solution with modern features like real-time inventory, multiple payment options, and mobile responsiveness.",
      solution: "Built a comprehensive e-commerce platform with React frontend, Node.js backend, integrated payment gateways, and automated inventory management.",
      results: [
        "99.9% uptime with cloud deployment",
        "50% increase in conversion rates", 
        "Real-time inventory synchronization",
        "Mobile-first responsive design"
      ],
      technologies: [
        "React.js", "Redux", "Node.js", "Express.js",
        "PostgreSQL", "Stripe API"
      ],
      features: [
        "Advanced product filtering",
        "Shopping cart & wishlist",
        "Multiple payment gateways", 
        "Order tracking system",
        "Admin dashboard",
        "Inventory management"
      ],
      image: "/work-7.png",
      liveUrl: "https://github.com/Karansd44/Ecommerce-webiste",
      githubUrl: "https://github.com/Karansd44/Ecommerce-webiste",
      timeline: "1 months",
      role: "Full Stack Developer"
    },
    {
      id: 3,
      title: "Uber Clone Application",
      subtitle: "Ride-Sharing Mobile Platform", 
      category: "Mobile App • Real-time",
      description: "A comprehensive ride-sharing application with real-time tracking, payment integration, and driver-passenger matching system.",
      challenge: "Create a scalable ride-sharing platform that handles real-time location tracking, efficient driver-passenger matching, and secure payment processing.",
      solution: "Developed a mobile-first application with real-time GPS tracking, automated matching algorithms, and integrated payment systems with live updates.",
      results: [
        "Real-time GPS tracking accuracy",
        "Automated driver-passenger matching",
        "Secure payment processing",
        "Live ride status updates"
      ],
      technologies: [
        "React Native", "Node.js", "Socket.io", "MongoDB",
        "Google Maps API", "Payment APIs", "Redis"
      ],
      features: [
        "Real-time location tracking",
        "Driver-passenger matching",
        "In-app payments",
        "Ride history", 
        "Rating & review system",
        "Push notifications"
      ],
      image: "/work-2.png",
      liveUrl: "https://github.com/Karansd44/Uber_Clone",
      githubUrl: "https://github.com/Karansd44/Uber_Clone",
      timeline: "1 months", 
      role: "Mobile App Developer"
    }
  ];

  return (
    <div
      id="case-studies"
      className="w-full px-4 sm:px-[8%] py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400">
            Featured Projects
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
            Project Case Studies
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-gray-600 dark:text-gray-300">
            Deep dive into my most impactful projects, exploring the challenges faced, solutions implemented, and results achieved.
          </p>
        </div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedProject === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Project Image & Info */}
          <div>
            <div className="relative">
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl mb-6 bg-gray-200 dark:bg-gray-700">
                <img
                  src={caseStudies[selectedProject].image}
                  alt={caseStudies[selectedProject].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTI1QzE4My40IDEyNSAxNzAgMTM4LjQgMTcwIDE1NUMxNzAgMTcxLjYgMTgzLjQgMTg1IDIwMCAxODVDMjE2LjYgMTg1IDIzMCAxNzEuNiAyMzAgMTU1QzIzMCAxMzguNCAyMTYuNiAxMjUgMjAwIDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Quick Info */}
              <div className={`p-6 rounded-2xl shadow-lg border ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Timeline</p>
                    <p className="font-medium">{caseStudies[selectedProject].timeline}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">Role</p>
                    <p className="font-medium">{caseStudies[selectedProject].role}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <a
                    href={caseStudies[selectedProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={caseStudies[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                {caseStudies[selectedProject].category}
              </span>
              <h3 className="text-3xl font-bold mt-3 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {caseStudies[selectedProject].title}
              </h3>
              <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                {caseStudies[selectedProject].subtitle}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudies[selectedProject].description}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h4 className="text-lg font-bold mb-3 text-red-600 dark:text-red-400">Challenge</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudies[selectedProject].challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Solution</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudies[selectedProject].solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-bold mb-3 text-green-600 dark:text-green-400">Results</h4>
              <ul className="space-y-2">
                {caseStudies[selectedProject].results.map((result, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-600 dark:text-gray-400">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-bold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudies[selectedProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-bold mb-3">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {caseStudies[selectedProject].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudies;