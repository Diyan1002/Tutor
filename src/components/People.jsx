import React, { useState } from "react";

const AlumniSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const alumni = [
    {
      image: "/image1.png", // Replace with the actual profile image URL
      name: "Shaumaya Qha",
      title: "Software Engineer",
      description:
        "Apart from regular live classes, I was assigned with a Mentor someone from Microsoft and he guided me very well throughout the course.",
      hike: "120% Hike",
      hikeColor: "bg-green-100 text-green-600",
      companies: [
        { logo: "/Frame1.png", alt: "J.P. Morgan" }, // Replace with actual logo URLs
      ],
    },
    {
      image: "/image2.png", // Replace with the actual profile image URL
      name: "Subhangi Duhan",
      title: "Software Researcher",
      description:
        "My focus and expectations was more into System Design and I have learned a lot of it, specially High Level design and that helped me to crack Microsoft.",
      hike: "80% Hike",
      hikeColor: "bg-green-100 text-green-600",
      companies: [
        { logo: "/Frame2.png", alt: "J.P. Morgan" },
      ],
    },
    {
      image: "/image3.png", // Replace with the actual profile image URL
      name: "Paras Yadav",
      title: "Software Tester",
      description:
        "Consistency is the key, that I have learned from my Mentor at My_Tutor. He usually motivates me to be consistent in class and solving problems.",
      hike: "80% Hike",
      hikeColor: "bg-green-100 text-green-600",
      companies: [
        { logo: "/Frame3.png", alt: "CommScope" },
      ],
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Header Section */}
      <div className="text-center mb-10 animate-fade-in">
        <h5 className="text-blue-500 font-semibold tracking-wide uppercase">
          Our Alumni Placed
        </h5>
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Our Alumni & Connect With Them
        </h2>
      </div>

      {/* Alumni Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 px-4">
        {alumni.map((alum, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80 text-left transform transition duration-500 hover:scale-105 animate-slide-up"
          >
            {/* Profile Image */}
            <div className="flex items-center mb-4">
              <img
                src={alum.image}
                alt={alum.name}
                className="w-12 h-12 rounded-full mr-4 cursor-pointer"
                onClick={() => handleImageClick(alum.image)}
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{alum.name}</h3>
                <p className="text-sm text-gray-500">{alum.title}</p>
              </div>
            </div>

            {/* Hike Badge */}
            <div
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${alum.hikeColor} mb-4`}
            >
              {alum.hike}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{alum.description}</p>

            {/* Company Logos */}
            <div className="flex items-center space-x-4 mb-4">
              {alum.companies.map((company, idx) => (
                <img
                  key={idx}
                  src={company.logo}
                  alt={company.alt}
                  className="w-34 h-auto"
                />
              ))}
            </div>

            {/* Read Full Review */}
            <a
              href="#"
              className="text-blue-500 font-medium text-sm flex items-center"
            >
              <img
                src="/li.png"
                alt="LinkedIn"
                className="w-4 h-4 mr-2"
              />
              Read full review
            </a>
          </div>
        ))}
      </div>

      {/* Connect Now Section */}
      <div className="text-center animate-fade-in">
        <button className="group px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition relative overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-blue-700 opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative">Connect Now</span>
          <span className="absolute top-1/2 right-32 transform -translate-y-1/2 group-hover:translate-x-32 transition-transform duration-500">
            →
          </span>
        </button>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full">
            <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" />
            <button
              onClick={closeImage}
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniSection;
