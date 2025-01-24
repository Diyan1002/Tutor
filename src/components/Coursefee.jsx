import React, { useState } from "react";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 overflow-hidden">
      {/* Course Details Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center p-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: false, amount: 0.2 }} // Animates every time it enters the viewport
        transition={{ duration: 0.6 }}
      >
        {/* Course Highlights Section */}
        <motion.div
          className="w-full md:w-1/2 p-12"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-bold mb-4 text-blue-500">
            Course Highlights
          </h2>
          <ul className="space-y-3">
            {[
              { icon: "/t1.png", text: "350+ Live sessions" },
              { icon: "/t2.png", text: "15+ Industry Projects" },
              { icon: "/t3.png", text: "Lifetime accessibility" },
              { icon: "/t4.png", text: "Live project experience" },
            ].map((item, index) => (
              <li className="flex items-center" key={index}>
                <img src={item.icon} alt="Icon" className="w-6 h-6 mr-2" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Course Fees Section */}
        <motion.div
          className="w-full md:w-1/2 p-3 bg-white rounded-lg shadow-lg"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-bold mb-4">Course Fees</h2>
          <p className="text-gray-600 mb-2">
            We are driven by the idea of program affordability. So, we give you
            several financial options to manage and budget the expenses of your
            course.
          </p>
          <p className="text-xl font-bold mb-4">Starting at ₹ 120,000 + GST</p>
          <p className="text-sm text-gray-500 mb-6">
            EMI starting from: ₹ 5,900/month
          </p>
          <motion.button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Next Cohort Details Section */}
      <motion.h2
        className="text-xl font-bold mb-6"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Next Cohort Details
      </motion.h2>

      <motion.div
        className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4">
          {/* Date Section */}
          <motion.div
            className="flex flex-col items-center mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-bold">19</span>
            <span className="text-sm uppercase text-gray-500">Mar</span>
          </motion.div>

          {/* Details Section */}
          <div className="flex-1 px-6 text-center md:text-left">
            <h3 className="text-lg font-semibold">Weekend Batch [Sat - Sun]</h3>
          </div>

          {/* Enroll Now Button */}
          <motion.button
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Enroll Now
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
          <div>
            <p className="font-medium">Batch</p>
            <p>Morning</p>
          </div>
          <div>
            <p className="font-medium">Time</p>
            <p>09:00 am-12:00 pm</p>
          </div>
          <div>
            <p className="font-medium">Seat</p>
            <p>Available</p>
          </div>
          <div>
            <p className="font-medium">Venue</p>
            <p>Virtual Hall</p>
          </div>
        </div>
      </motion.div>

      {/* Amazing Button to Show Form */}
      <motion.button
        onClick={toggleForm}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isFormOpen ? "Hide Form" : "Show Form"}
      </motion.button>

      {/* Right Section Form */}
      {isFormOpen && (
        <motion.div
          className="mt-6 bg-white rounded-lg shadow-lg p-6 max-w-md w-full md:w-80 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            We’re here to help!
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Please contact us in case of any query.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            />
            <select
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            >
              <option>Select Course</option>
              <option>Data Science</option>
              <option>AI</option>
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
            >
              Get in Touch
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default CourseDetails;