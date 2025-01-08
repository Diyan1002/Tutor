import React, { useState } from "react";
import { motion } from "framer-motion";

const HandsOnProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Authentication",
      companies: [{ logo: "/sye.png", alt: "Symantec" }],
      description:
        "Create authentication technology to give access, correspond to those stored in a database of authorized users.",
      tools: [
        { logo: "/ico1.png", alt: "Tool 1" },
        { logo: "/ico2.png", alt: "Tool 2" },
        { logo: "/ico3.png", alt: "Tool 3" },
        { logo: "/ico4.png", alt: "Tool 4" },
      ],
    },
    {
      title: "Data Analysis",
      companies: [
        { logo: "/google-logo.png", alt: "Google" },
        { logo: "/amazon-logo.png", alt: "Amazon" },
      ],
      description:
        "Develop tools to analyze and visualize large datasets to improve business decision-making processes.",
      tools: [
        { logo: "/python-logo.png", alt: "Python" },
        { logo: "/excel-logo.png", alt: "Excel" },
        { logo: "/powerbi-logo.png", alt: "PowerBI" },
      ],
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeProject = projects[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-50 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/3 pl-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hands-on Projects
          </h2>
          <p className="text-gray-600">
            Find out how our Mentor transformed their careers by giving Hands-on
            Projects.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="bg-green-400 text-white w-28 h-16 px-4 py-2 rounded-lg text-center">
              <p className="text-xl font-bold">10+</p>
              <p className="text-sm">Projects</p>
            </div>
            <div className="bg-purple-400 text-white w-28 h-16 px-4 py-2 rounded-lg text-center">
              <p className="text-xl font-bold">06+</p>
              <p className="text-sm">Domains</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-2/3"
        >
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {activeProject.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              {activeProject.companies.map((company, index) => (
                <img
                  key={index}
                  src={company.logo}
                  alt={company.alt}
                  className="h-6"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">
              {activeProject.description}
            </p>
            <div className="flex items-center space-x-4">
              <p className="font-medium text-gray-700">Tools:</p>
              {activeProject.tools.map((tool, index) => (
                <img key={index} src={tool.logo} alt={tool.alt} className="h-6" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HandsOnProjects;
