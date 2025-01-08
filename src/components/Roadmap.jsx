import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CurriculumSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { threshold: 0.2 });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const courseUnits = [
    "Unit 0 - Foundation Of Programming",
    "Unit 1 - Data Structures and Algorithms",
    "Unit 2 - System Design in Depth",
    "Unit 3 - Advance Data Structures & Algorithms",
    "Unit 4 - Electives & Specialization",
    "Unit 5 - Work on End-to-End Projects in Partnership With Startups",
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="bg-gray-50 py-12 relative"
    >
      {/* Header Section */}
      <div className="text-center mb-10">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-blue-500 font-semibold tracking-wide uppercase"
        >
          A Roadmap For Success
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl font-bold text-gray-800"
        >
          Our Comprehensive Curriculum, Designed for Professionals
        </motion.h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-12 px-4">
        {/* Left Section: Course Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Course Description
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <div className="space-y-4">
            {courseUnits.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-gray-800 font-medium hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {unit}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="p-4 text-gray-600 bg-gray-50"
                  >
                    This is a detailed description of {unit}.
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Download Brochure Button */}
          <div className="flex justify-center mt-8">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="px-8 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full lg:w-1/3 rounded-lg"
        >
          <div className="relative">
            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-b-lg p-6 relative z-10">
              <img
                src="/preview.png" // Replace with your actual image URL
                alt="Form Top Image"
                className="w-full rounded-t-lg"
              />

              <form className="space-y-4 pt-5">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
                <input
                  type="datetime-local"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
                >
                  Apply for Counselling
                </button>
              </form>
            </div>

            <div className="absolute left-0 right-0 h-1 bg-blue-500 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CurriculumSection;
