import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* My_Tutor Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">My_Tutor</h2>
          <p className="text-sm mb-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-facebook-f bg-white text-blue-500 p-2 rounded-full"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-linkedin bg-white text-blue-500 p-2 rounded-full"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-pinterest bg-white text-blue-500 p-2 rounded-full"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <i className="fab fa-twitter bg-white text-blue-500 p-2 rounded-full"></i>
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Explore</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Blog</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Campus Program</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Become a Mentor</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Contact us</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Hire From us</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Terms of use</a></li>
            <li><a href="#" className="text-sm hover:text-gray-200">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Info</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i>
              4517 Washington Ave. Manchester, Kentucky 39495
            </li>
            <li>
              <i className="fas fa-phone-alt mr-2"></i>
              +91-9024250272
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i>
              shubhammodi820@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        <p>Copyright 2024 My_Tutor | Designed By Shubham Modi.</p>
      </div>
    </footer>
  );
};

export default Footer;
