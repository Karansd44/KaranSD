import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Work", href: "#work" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Background gradient decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 120,
          damping: 20
        }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${isScroll
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-800"
          : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="relative z-10 cursor-pointer"
        >
          <Image
            src={assets.logo}
            className="w-28 sm:w-32 dark:hidden"
            alt="Karan SD Logo"
            priority
          />
          <Image
            src={assets.logo_dark}
            className="w-28 sm:w-32 hidden dark:block"
            alt="Karan SD Logo"
            priority
          />
        </a>

        {/* Desktop Navigation Menu */}
        <motion.ul
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`hidden md:flex items-center gap-2 lg:gap-4 rounded-full px-6 lg:px-10 py-3 transition-all duration-500 ${isScroll
            ? "bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-md"
            : "bg-white/80 shadow-xl dark:bg-gray-800/80 dark:border dark:border-gray-700/50 backdrop-blur-xl"
            }`}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1 + 0.4,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="font-Ovo"
            >
              <motion.a
                href={item.href}
                whileHover={{
                  scale: 1.15,
                  y: -2,
                  color: isDarkMode ? "#60A5FA" : "#3B82F6"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-3 lg:px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700/50 dark:hover:to-gray-600/50 transition-all duration-200 inline-block relative text-gray-700 dark:text-white"
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setIsDarkMode((prev) => !prev)}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              boxShadow: isDarkMode
                ? "0 0 20px rgba(251, 191, 36, 0.5)"
                : "0 0 20px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 0 : 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Image
                  src={assets.moon_icon}
                  alt="Dark mode"
                  className="w-full h-full dark:hidden"
                />
                <Image
                  src={assets.sun_icon}
                  alt="Light mode"
                  className="w-full h-full hidden dark:block"
                />
              </div>
            </motion.div>
          </motion.button>

          {/* Contact Button - Desktop */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
              boxShadow: isDarkMode
                ? "0 15px 40px -5px rgba(96, 165, 250, 0.4)"
                : "0 15px 40px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-full font-Ovo hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 group relative overflow-hidden text-gray-900 dark:text-white"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Contact</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src={assets.arrow_icon}
                className="w-3 h-3 dark:hidden"
                alt="Arrow"
              />
              <Image
                src={assets.arrow_icon_dark}
                className="w-3 h-3 hidden dark:block"
                alt="Arrow"
              />
            </motion.div>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="block md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={openMenu}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6 h-6"
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-40"
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sidebar Menu */}
        <motion.div
          ref={sideMenuRef}
          initial={{ x: "100%" }}
          className="flex md:hidden flex-col fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-500 ease-in-out"
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-6 border-b dark:border-gray-800">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Menu
            </motion.span>
            <motion.button
              onClick={closeMenu}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="Close"
                className="w-5 h-5"
              />
            </motion.button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-2 p-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ x: 10 }}
                className="font-Ovo"
              >
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 group"
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    whileHover={{ scale: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {item.label}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Contact Button */}
          <div className="mt-auto p-6 border-t dark:border-gray-800">
            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white rounded-full font-medium shadow-lg relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Contact Me</span>
              <motion.svg
                className="w-4 h-4 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;