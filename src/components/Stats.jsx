import React, { useState, useEffect, useRef } from "react";

const StatisticsSection = () => {
  const stats = [
    {
      image: "/trend.png", // Replace with the actual image URL
      title: "126%",
      description: "170% Average Salary hike",
      textColor: "text-green-500",
    },
    {
      image: "/brief.png", // Replace with the actual image URL
      title: "100+",
      description: "Job Placements",
      textColor: "text-yellow-500",
    },
    {
      image: "/online.png", // Replace with the actual image URL
      title: "Live",
      description: "Interactive Sessions",
      textColor: "text-red-500",
    },
  ];

  const [visible, setVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref to the section container

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex justify-center items-center bg-gray-100 pt-7"
    >
      <div className="flex flex-col md:flex-row justify-around items-center bg-white shadow-lg rounded-lg p-6 w-9/12 md:w-9/12 h-auto md:h-50">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center space-x-4 text-center md:text-left group mb-4 md:mb-0 
            transform transition-all duration-1000 ease-in-out 
            ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Animated Image with Circle Background */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 transform transition-transform duration-300 group-hover:scale-110 mb-2 md:mb-0">
              <img
                src={stat.image}
                alt="Stat Icon"
                className="w-8 h-8 opacity-90 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"
              />
            </div>

            {/* Text Section */}
            <div>
              {/* Title */}
              <div className={`text-2xl font-bold ${stat.textColor}`}>
                {stat.title}
              </div>

              {/* Description */}
              <p className="text-gray-600">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
