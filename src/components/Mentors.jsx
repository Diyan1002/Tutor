import React from "react";
import { motion } from "framer-motion";

const MentorCard = ({ image, name, designation, company, companyLogo }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-4 text-center"
      whileHover={{ scale: 1.05 }} // Slight scaling on hover
      whileInView={{ opacity: 1, y: 0 }} // Animate on scroll
      initial={{ opacity: 0, y: 50 }} // Initial state
      viewport={{ once: false, amount: 0.2 }} // Animate every time it enters the viewport
      transition={{ duration: 0.6 }} // Smooth animation duration
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{designation}</p>
      <div className="flex items-center justify-center space-x-2 text-blue-500 mb-4">
        <img src={companyLogo} alt={`${company} logo`} className="w-20 h-5" />
        <span>{company}</span>
      </div>
      <motion.button
        className="text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }} // Enlarge slightly on hover
        whileTap={{ scale: 0.95 }} // Shrink slightly on click
      >
        View Profile
      </motion.button>
    </motion.div>
  );
};

const DiscoverMentors = () => {
  const mentors = [
    {
      image: "/mentor1.png", // Replace with actual image path
      name: "Sachin Sharma",
      designation: "Managing Director",
      company: "Microsoft",
      companyLogo: "/microSoft.png", // Replace with actual logo path
    },
    {
      image: "/mentor2.png", // Replace with actual image path
      name: "Santosh Kumar Mishra",
      designation: "Managing Director",
      company: "Microsoft",
      companyLogo: "/microSoft.png", // Replace with actual logo path
    },
    {
      image: "/mentor3.png", // Replace with actual image path
      name: "Prem Kumar",
      designation: "Mentorship",
      company: "Microsoft",
      companyLogo: "/microSoft.png", // Replace with actual logo path
    },
  ];

  return (
    <motion.div
      className="bg-gray-50 py-12 px-4 text-center"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Fade in animation
      transition={{ duration: 0.8 }} // Smooth transition
    >
      <motion.h2
        className="text-blue-500 text-sm uppercase font-bold mb-2"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Discover Our Mentors
      </motion.h2>
      <motion.h3
        className="text-2xl font-bold mb-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We have Industry Experts as Mentors who guide you with Career Planning &
        Interview Preparation
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            image={mentor.image}
            name={mentor.name}
            designation={mentor.designation}
            company={mentor.company}
            companyLogo={mentor.companyLogo}
          />
        ))}
      </motion.div>
      <motion.button
        className="mt-8 bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        More Mentor Details
      </motion.button>
    </motion.div>
  );
};

export default DiscoverMentors;
