import React, { useEffect, useRef, useState } from "react";

const WhyJoinProgram = () => {
  const cards = [
    {
      image: "/time.png", // Replace with actual image URL
      title: "Real Work Experience",
      description:
        "Work with companies directly on software development projects to master your skills and build a strong project portfolio to get your dream job.",
    },
    {
      image: "/time.png", // Replace with actual image URL
      title: "Guaranteed Job Referral",
      description:
        "Our program seeks to eliminate financial risk in the upskilling journey with our guaranteed Job referrals option.",
    },
    {
      image: "/time.png", // Replace with actual image URL
      title: "Crack FAANG Interview",
      description:
        "Interact and learn from mentors working in top product-based companies to crack interviews for your dream role.",
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.9 }
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
    <div ref={sectionRef} className="bg-gray-100 py-12">
      {/* Section Header */}
      <div className="text-center mt-20 p-10">
        <h5 className="text-blue-500 font-semibold tracking-wide uppercase">
          Related Courses
        </h5>
        <h2 className="text-3xl font-bold text-gray-800">
          Why Join this Program?
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-80 transform transition-all duration-1000 ease-in-out ${
              visible
                ? index === 0
                  ? "translate-x-0"
                  : index === 1
                  ? "translate-y-0"
                  : "translate-x-0"
                : index === 0
                ? "-translate-x-10 opacity-0"
                : index === 1
                ? "translate-y-10 opacity-0"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-8 h-8" // Adjust size as needed
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinProgram;
