import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleApplyNow = () => {
    navigate('/signup');
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.(com|org|net)$/.test(formData.email)) {
      newErrors.email = "Email must be a valid .com, .org, or .net address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[^A-Za-z0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one special character.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log("Form submitted successfully", formData);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       password: "",
  //       confirmPassword: "",
  //       phoneNumber: "",
  //       gender: "",
  //     });
  //     setIsModalOpen(false); // Close modal on successful submission
  //   } else {
  //     console.log("Validation failed");
  //   }
  // };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('https://todo-nu-plum-19.vercel.app/users/register', {
        name,
        email,
        password,     
      });     
      console.log('Success:', data);
      alert('Form submitted successfully!');
    }
    catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./tutor.png" // Replace with your logo image URL
            alt="Logo"
            className="w-30 h-10 pl-6"
          />
        </div>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 pr-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="#courses" className="text-gray-700 hover:text-blue-500">
            Courses
          </a>
          <a href="#events" className="text-gray-700 hover:text-blue-500">
            Events
          </a>
          <a href="#blogs" className="text-gray-700 hover:text-blue-500">
            Blogs
          </a>
          <button
            onClick={toggleModal}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Apply Now
          </button>
          <button
              onClick={handleApplyNow}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center pr-6">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              About Us
            </a>
            <a href="#courses" className="text-gray-700 hover:text-blue-500">
              Courses
            </a>
            <a href="#events" className="text-gray-700 hover:text-blue-500">
              Events
            </a>
            <a href="#blogs" className="text-gray-700 hover:text-blue-500">
              Blogs
            </a>
            <button
              onClick={toggleModal}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Apply Now
            </button>
            <button
              onClick={handleApplyNow}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
            
          </div>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Signup Form</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500">{errors.gender}</p>}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
