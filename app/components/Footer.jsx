import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
  const [hoveredFooterItem, setHoveredFooterItem] = useState(null);
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          karansd442004@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 SD Karan. All rights reserved.</p>
        <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
          {[
            { label: "GitHub", href: "https://github.com/Karansd44" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/karan-s-d-69577434a/" },
            { label: "Insta", href: "https://www.instagram.com/karansd_4?igsh=NTJlemgwNHZ1bm03" }
          ].map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setHoveredFooterItem(item.label)}
              onMouseLeave={() => setHoveredFooterItem(null)}
              className="relative px-2 py-1"
            >
              <a
                target="_blank"
                href={item.href}
                className="relative z-10 block"
              >
                {item.label}
              </a>
              {hoveredFooterItem === item.label && (
                <motion.span
                  layoutId="footer-wave"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0 bg-gray-200 dark:bg-gray-700/50 rounded-lg -z-10"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
