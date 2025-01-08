import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div
      className={`relative w-full h-screen bg-cover bg-no-repeat bg-center transition-opacity duration-1000 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: "url('/back.png')", // Replace with actual path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 3.5rem)",
        backgroundPosition: "center",
      }}
    >
      {/* Shadow overlay image */}
      <div
        className="absolute inset-0 mb-0"
        style={{
          backgroundImage: "url('/Vecto.png')", // Replace with actual path
        }}
      ></div>

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4">
        {/* Left Section */}
        <div className="flex flex-col text-white max-w-lg z-10 md:mr-40 mt-0 md:mt-0">
          <div className="text-xs md:text-sm uppercase tracking-wide bg-blue-400 text-white px-3 py-1 rounded inline-block shadow-md mb-4 w-full sm:w-80 text-center">
            Specialization over generalization
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            Advanced Data Science & AI Course
          </h1>
          <p className="text-sm md:text-lg mb-6 text-center md:text-left">
            Equip yourself with data science skills through live, interactive
            lectures guided by industry expert mentors.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-blue-500 px-6 py-3 rounded font-medium shadow-md hover:bg-blue-100 w-50 sm:w-60 h-12">
              📄 Download Brochure
            </button>
          </div>
        </div>

        {/* Contact Us Button for Mobile View */}
        <button
          onClick={toggleFormVisibility}
          className="block md:hidden bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 z-20 mt-4"
        >
          {formVisible ? "Close Form" : "Contact Us"}
        </button>

        {/* Right Section Form */}
        <div
          className={`${
            formVisible ? "block" : "hidden"
          } md:block ml-0 md:ml-80 bg-white rounded-lg shadow-lg p-6 max-w-md w-full md:w-80 z-20 mb-12`}
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
        </div>
      </div>

    {/* Image of the person */}
<div className="absolute bottom-0 left-28 transform translate-y-10 md:translate-y-0 md:translate-x-0 flex justify-center md:justify-start">
  <img
    src="/man.png" // Replace with the actual image path
    alt="Person with laptop"
    className="hidden md:block w-86 h-auto mb-28 ml-96 transform scale-x-[-1]"
  />
</div>

    </div>
  );
};

export default HeroSection;
