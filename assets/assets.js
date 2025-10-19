import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
// Import chatbot icons from JavaScript file since we don't have the actual image files
import { chatbotIcon, chatbotIconDark } from "./chatbot-icon.js";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  chatbot_icon: chatbotIcon,
  chatbot_icon_dark: chatbotIconDark,
};
export const blogPosts = [
  {
    title: "Understanding React Hooks",
    description: "A deep dive into how React hooks simplify state management.",
  },
  {
    title: "Next.js Performance Optimization",
    description: "Best practices to optimize your Next.js applications.",
  },
  {
    title: "Framer Motion for Stunning UI",
    description: "How to create smooth animations with Framer Motion.",
  },
];

export const workData = [
  {
    title: "Portfolio Website",
    description: "Web Design",
    bgImage: "/work-1.png",
    link: "https://github.com/Karansd44/PORTFOLIO",
    style: { border: "2px solid #ddd", borderRadius: "5px" },
  },
  {
    title: "Uber Clone",
    description: "Mobile App",
    bgImage: "/work-2.png",
    link: "https://github.com/Karansd44/uber_clone",
    style: { border: "2px solid #ddd", borderRadius: "5px" },
  },
  {
    title: "Library Management",
    description: "Python Application",
    bgImage: "/work-3.png",
    link: "https://github.com/Karansd44/library-Management",
    style: { border: "2px solid #ddd", borderRadius: "5px" },
  },
  {
    title: "Valentine Website",
    description: "Web Design",
    bgImage: "/work-4.png",
    link: "https://karansd44.github.io/Will-you-Valentine-me/",
    style: { border: "2px solid #ddd", borderRadius: "5px" },
  },
  {
    title: "Login Interface",
    description: "Mobile App",
    bgImage: "/work-5.png",
    link: "https://github.com/Karansd44/LOGIN-PAGE",
    style: { border: "2px solid #ddd", borderRadius: "5px" },
  },
  {
    title: "Personal Portfolio",
    description: "Web Design",
    bgImage: "/work-6.png",
    style: { border: "9px solid #ddd", borderRadius: "5px" },
    link:"#top"
  },
  {
    title: "E-Commerce Platform",
    description: "Web Application",
    bgImage: "/work-7.png",
    style: { border: "9px solid #ddd", borderRadius: "5px" },
    link:"https://github.com/Karansd44/Ecommerce-webiste"
  },
  {
    title: "MedMind ASK",
    description: "Web Application",
    bgImage: "/work-8.png",
    style: { border: "9px solid #ddd", borderRadius: "5px" },
    link:"https://ai-powered-healthcare-medicare-ask.vercel.app/"
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: (
      <>
        <span className="font-bold text-blue-600 dark:text-blue-400"></span> HTML, CSS, JavaScript<br />
        <span className="font-bold text-purple-600 dark:text-purple-400"></span> Python,c ,Java<br />
        <span className="font-bold text-green-600 dark:text-green-400"></span> MySQL, MongoDB
      </>
    ),
    counter: null
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: (
      <>
        <span className="font-bold text-blue-600 dark:text-blue-400">Cambridge Institute of Technology</span><br />
        B.Tech in <span className="font-bold text-purple-600 dark:text-purple-400">Computer Science</span><br />
        <span className="font-bold text-green-600 dark:text-green-400">2022 - 2026</span> 
      </>
    ),
    counter: null
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description: (
      <>
        <span className="font-bold text-blue-600 dark:text-blue-400">EasyByte</span> - Full Stack Intern<br />
        and 
        Built <span className="font-bold text-purple-600 dark:text-purple-400">10+ projects</span>
      </>
    ),
  }
];

export const toolsData = [
  assets.vscode,
  assets.git,
  assets.mongodb,
];
