"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Chatbot from "./components/Chatbot/Chatbot";
import Timeline from "./components/Timeline";
import ProjectCaseStudies from "./components/ProjectCaseStudies";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode}/>
      <Timeline isDarkMode={isDarkMode}/>
      {/* <Services isDarkMode={isDarkMode} /> */}
      <Work isDarkMode={isDarkMode}/>
      <ProjectCaseStudies isDarkMode={isDarkMode}/>
      {/* <Blog isDarkMode={isDarkMode}/> */}
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
      {mounted && <Chatbot isDarkMode={isDarkMode} />}
    </>
  );
}
