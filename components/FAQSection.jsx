import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = ({faqs}) => {
  const [showAnswers, setShowAnswers] = useState([]);

  const toggleAnswer = (index) => {
    setShowAnswers((prev) => {
      const newShowAnswers = [...prev];
      newShowAnswers[index] = !newShowAnswers[index];
      return newShowAnswers;
    });
  };

  return (
    <div className="text-center mx-20 pb-16">
      <p className="text-3xl pt-[5vh] pb-[2.5vh] font-extrabold mb-5">FAQ&apos;s</p>
      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow cursor-pointer hover:bg-gray-100"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                {faq.question}
              </button>
              {showAnswers[index] ? (
                <FaChevronUp className="text-gray-400" />
              ) : (
                <FaChevronDown className="text-gray-400" />
              )}
            </div>
            {showAnswers[index] && (
              <p className="text-left text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
