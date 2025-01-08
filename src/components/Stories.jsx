import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gray-50">
      {/* Text Section */}
      <motion.div
        className="text-left max-w-md md:mr-8 ml-14 mb-40"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Thousands of stories of growth
        </h1>
        <p className="text-gray-600 text-lg">
          Find out how our Learners transformed their careers after learning
          with us.
        </p>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="bg-white shadow-lg p-6 rounded-lg max-w-lg relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src="/quo.png" // Replace with the actual image URL
          alt="Quotation Mark"
          className="absolute -top-6 left-4 w-12 h-12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <blockquote className="text-gray-700 text-base italic mb-4">
          "As a senior engineer I have specially reviewed the System Design
          content and live classes of MyTutor and I found it more on the
          implementation side instead of theoretical concepts which helps to
          work in real-time environment in the organization. I would recommend
          MyTutor course to get expertise in System Design."
        </blockquote>
        <div className="flex items-center">
          <motion.img
            src="/sto.png" // Replace with the actual image URL
            alt="Prem Kumar"
            className="w-12 h-12 rounded-full mr-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <div>
            <h4 className="font-semibold text-gray-800">Prem Kumar</h4>
            <div className="flex items-center">
              <span className="text-yellow-400">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            </div>
            <a
              href="#"
              className="text-blue-600 text-sm mt-1 flex items-center"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <path d="M22.23 0H1.77C.79 0 0 .78 0 1.77v20.46C0 23.22.78 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.77V1.77C24 .78 23.22 0 22.23 0zM7.07 20.39H3.54V9h3.54v11.39zm-1.77-12.98c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05zm15.32 12.98h-3.54v-5.83c0-1.39-.03-3.17-1.93-3.17-1.93 0-2.23 1.51-2.23 3.07v5.93H9.3V9h3.4v1.56h.05c.47-.89 1.63-1.83 3.36-1.83 3.6 0 4.27 2.37 4.27 5.44v6.22z" />
              </motion.svg>
              View Profile
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
