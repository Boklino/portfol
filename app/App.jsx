"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom instead of next/link
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Linkedin, Github, ExternalLink } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // EmailJS configuration
  const SERVICE_ID = "service_lf3s3cx";
  const TEMPLATE_ID = "template_rif9cbv";
  const USER_ID = "EA7O3nm5B95-3f8SA";

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Update active section based on scroll position
      const sections = {
        home: 0,
        about: 600,
        projects: 1100,
        contact: 4000,
      };

      const currentSection = Object.entries(sections).reduce(
        (acc, [section, position]) => {
          return scrollPosition >= position ? section : acc;
        },
        "home"
      );

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        });
      }
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-800 bg-gray-300">
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "py-2 shadow-md" : "py-4"
          } dark:bg-gray-800/90 bg-gray-300/90`}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold italic dark:text-slate-300 text-gray-800 hover:text-teal-500 transition-colors">
              Bokl
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex items-center space-x-6">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={`text-sm font-mono font-semibold hover:text-teal-500 transition-colors ${
                      activeSection === "about"
                        ? "text-teal-500"
                        : "dark:text-gray-200 text-gray-900"
                    }`}
                  >
                    <span className="text-teal-500">01.</span> About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className={`text-sm font-mono font-semibold hover:text-teal-500 transition-colors ${
                      activeSection === "projects"
                        ? "text-teal-500"
                        : "dark:text-gray-300 text-gray-900"
                    }`}
                  >
                    <span className="text-teal-500">02.</span> Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`text-sm font-mono font-semibold hover:text-teal-500 transition-colors ${
                      activeSection === "contact"
                        ? "text-teal-500"
                        : "dark:text-gray-300 text-gray-900"
                    }`}
                  >
                    <span className="text-teal-500">03.</span> Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-1 rounded-full transition-transform hover:scale-125"
                    aria-label={
                      darkMode ? "Switch to light mode" : "Switch to dark mode"
                    }
                  >
                    {darkMode ? (
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </li>
                <li>
                  <Link
                    href="https://drive.google.com/file/d/1gOTd1_JtISAQgULCUnCfryDxCiWsVCaO/view?usp=share_link"
                    target="_blank"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-teal-500 px-4 py-2 text-sm font-medium transition-all hover:bg-teal-500 hover:text-white dark:text-slate-100 text-gray-800"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1 rounded-full"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 dark:text-white text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 dark:bg-gray-800 bg-gray-400 overflow-hidden">
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-8 h-8 dark:text-white text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-8 text-center">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-3xl font-mono font-semibold dark:text-gray-200 text-gray-900 hover:text-teal-500 transition-colors"
                  >
                    <span className="text-teal-500 text-3xl">01.</span> About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-3xl font-mono font-semibold dark:text-gray-300 text-gray-900 hover:text-teal-500 transition-colors"
                  >
                    <span className="text-teal-500 text-3xl">02.</span> Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-3xl font-mono font-semibold dark:text-gray-300 text-gray-900 hover:text-teal-500 transition-colors"
                  >
                    <span className="text-teal-500 text-3xl">03.</span> Contact
                  </button>
                </li>
                <li className="pt-8">
                  <Link
                    href="https://drive.google.com/file/d/1gOTd1_JtISAQgULCUnCfryDxCiWsVCaO/view?usp=share_link"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md border border-teal-500 px-10 py-2 text-xl font-medium transition-all hover:bg-teal-500 hover:text-white dark:text-slate-100 text-gray-800"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-24">
          {/* Hero Section */}
          <section id="hero" className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-500 mb-4">
                Hi, I'm Youssef Albokl.
              </h2>
              <h3 className="text-lg md:text-2xl lg:text-3xl dark:text-slate-300 text-gray-800 mb-4">
                A Full-stack developer.
              </h3>
              <p className="text-base md:text-lg max-w-xl mx-auto dark:text-slate-400 text-gray-700 mb-8">
                Impassioned Full-stack developer based in Cairo, Egypt with an
                emphasis on responsive design.
              </p>
              <div className="flex justify-center gap-8 text-4xl dark:text-slate-200 text-gray-700">
                <a
                  href="https://www.linkedin.com/in/youssefalbokl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-125"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Boklino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-125"
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-slate-300 text-gray-800 mb-8">
              About me
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg dark:text-slate-300 text-gray-800">
                I am a <span className="text-teal-600">Full-stack</span>{" "}
                developer with knowledge in many different front end and back
                end languages, responsive frameworks, databases, and best code
                practices. I specialize in{" "}
                <span className="text-teal-600">MERN</span> stack. My goal is to
                create responsive designs and keep myself updated with recent
                technologies in the field, I also believe that I have to keep
                learning new ideas everyday.
              </p>
              <p className="text-lg dark:text-slate-300 text-gray-800">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "JavaScript (ES6+)",
                  "React Native",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Tailwind",
                  "MongoDB",
                  "Sass",
                ].map((tech, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mt-1 text-teal-500 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="dark:text-slate-300 text-gray-800">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-slate-300 text-gray-800 mb-12">
              Personal Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-32">
              <div className="text-sm dark:text-slate-300 text-gray-800 mb-2">
                Featured Project
              </div>
              <h3 className="text-2xl text-teal-600 mb-6">
                <a
                  href="https://boktel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Boktel
                </a>
              </h3>

              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-7 md:order-2">
                  <a
                    href="https://boktel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-lg transition-transform hover:opacity-90"
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="Boktel project screenshot"
                      width={700}
                      height={400}
                      className="w-full h-auto"
                    />
                  </a>
                </div>
                <div className="md:col-span-5 md:order-1">
                  <div className="p-6 rounded-lg dark:bg-slate-800/80 bg-gray-200/80 shadow-lg h-full">
                    <p className="dark:text-gray-300 text-gray-800 mb-6">
                      Experience the essence of travel with Boktel, a dynamic
                      platform that combines the best of Airbnb and hotel
                      booking. Whether you're a wanderlust seeker or a property
                      owner looking to share your unique spaces, Boktel connects
                      you with a world of possibilities.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6 dark:text-gray-300 text-gray-800">
                      <span>React</span>
                      <span>Node.js</span>
                      <span>MongoDB</span>
                      <span>React Router</span>
                      <span>Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Boklino/boktel"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="hover:text-teal-500 transition-colors"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href="https://boktel.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="hover:text-teal-500 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="mb-32">
              <div className="text-sm dark:text-slate-300 text-gray-800 mb-2">
                Featured Project
              </div>
              <h3 className="text-2xl text-teal-600 mb-6">
                <a
                  href="https://fitness-buddy1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Fitness Buddy
                </a>
              </h3>

              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-7 md:order-2">
                  <a
                    href="https://fitness-buddy1.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-lg transition-transform hover:opacity-90"
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="Fitness Buddy project screenshot"
                      width={700}
                      height={400}
                      className="w-full h-auto"
                    />
                  </a>
                </div>
                <div className="md:col-span-5 md:order-1">
                  <div className="p-6 rounded-lg dark:bg-slate-800/80 bg-gray-200/80 shadow-lg h-full">
                    <p className="dark:text-gray-300 text-gray-800 mb-6">
                      Unleash your inner fitness enthusiast and achieve your
                      wellness goals with FitnessBuddy. This innovative platform
                      empowers you to craft your personalized workout routines
                      from a vast library of exercises, accompanied by
                      captivating GIFs and detailed explanations.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6 dark:text-gray-300 text-gray-800">
                      <span>React</span>
                      <span>React Router</span>
                      <span>Tailwind</span>
                      <span>Material UI</span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Boklino/gym-exercises"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="hover:text-teal-500 transition-colors"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href="https://fitness-buddy1.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="hover:text-teal-500 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="mb-16">
              <div className="text-sm dark:text-slate-300 text-gray-800 mb-2">
                Featured Project
              </div>
              <h3 className="text-2xl text-teal-600 mb-6">
                <a
                  href="https://api-countriess.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Countries Information
                </a>
              </h3>

              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-7 md:order-2">
                  <a
                    href="https://api-countriess.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-lg transition-transform hover:opacity-90"
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="Countries Information project screenshot"
                      width={700}
                      height={400}
                      className="w-full h-auto"
                    />
                  </a>
                </div>
                <div className="md:col-span-5 md:order-1">
                  <div className="p-6 rounded-lg dark:bg-slate-800/80 bg-gray-200/80 shadow-lg h-full">
                    <p className="dark:text-gray-300 text-gray-800 mb-6">
                      Embark on an immersive journey through the vast tapestry
                      of our world's countries with WikiCounties. This
                      comprehensive repository of information provides a
                      captivating exploration of cultures, histories, and
                      captivating facts about every nation on Earth.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6 dark:text-gray-300 text-gray-800">
                      <span>React</span>
                      <span>React Router</span>
                      <span>Tailwind</span>
                      <span>Material UI</span>
                      <span>Countries API</span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Boklino/countries-api"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="hover:text-teal-500 transition-colors"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href="https://api-countriess.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="hover:text-teal-500 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-16 md:py-24 dark:bg-gray-900 bg-gray-400 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold dark:text-slate-300 text-gray-800 mb-10">
                Contact me
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 dark:text-gray-200 text-gray-900"
                    >
                      Name:
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-gray-300 bg-gray-300 text-gray-800 dark:placeholder:text-gray-400 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 dark:text-gray-200 text-gray-900"
                    >
                      Email:
                    </label>
                    <input
                      id="email"
                      name="from_name"
                      type="email"
                      placeholder="name@email.com"
                      required
                      className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-gray-300 bg-gray-300 text-gray-800 dark:placeholder:text-gray-400 placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 dark:text-gray-200 text-gray-900"
                  >
                    Subject:
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-gray-300 bg-gray-300 text-gray-800 dark:placeholder:text-gray-400 placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 dark:text-gray-200 text-gray-900"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-gray-300 bg-gray-300 text-gray-800 dark:placeholder:text-gray-400 placeholder:text-gray-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-md font-medium transition-all hover:scale-105 dark:bg-gray-700 dark:text-gray-200 bg-gray-300 text-gray-800 hover:bg-teal-500 hover:text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center dark:bg-gray-800 bg-gray-300 dark:text-gray-400 text-gray-600">
          <div className="container mx-auto px-4">
            <p>
              © {new Date().getFullYear()} Youssef Albokl. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
