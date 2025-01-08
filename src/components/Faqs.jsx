import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How to enroll for a Course?",
      answer: "You can enroll for a course by visiting our website, selecting your desired course, and following the enrollment steps."
    },
    {
      question: "Can I get the recordings of my previous lectures?",
      answer: "Yes, all enrolled students have access to their course recordings."
    },
    {
      question: "Who would be the instructor for the enrolled course?",
      answer: "Each course is conducted by an expert instructor with years of experience in the respective field."
    },
    {
      question: "What kind of placement support will be given post completion of program?",
      answer: "We provide resume reviews, mock interviews, and connect you with industry partners for placement opportunities."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-center text-sm font-semibold text-blue-500 mb-2 uppercase">Ask Your Questions</h2>
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-100 focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <span className="text-blue-500">{open === index ? "-" : "+"}</span>
            </button>
            {open === index && (
              <div className="px-4 py-3 text-gray-600 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
