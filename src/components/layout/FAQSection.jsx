"use client"

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What kind of information will I get in a report?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
  },
  {
    question: "Is it legal to use this service?",
    answer: "Yes, it is legal to use this service as long as it complies with applicable privacy and data protection laws in your region."
  },
  {
    question: "Do I need to create an account?", 
    answer: "You don't need to create an account to run a search, but creating one allows you to save reports and access them anytime."
  },
  {
    question: "Will the person I search for know I'm looking?",
    answer: "No, all searches are 100% confidential. The person you search for will not be notified."
  },
  {
    question: "How much does a full report cost?",
    answer: "Pricing depends on the type of report you request. We offer both one-time report fees and subscription plans."
  },
  {
    question: "Is it legal to use this service?",
    answer: "Yes, it is legal to use this service as long as it complies with applicable privacy and data protection laws in your region."
  },
  {
    question: "Do I need to create an account?",
    answer: "You don't need to create an account to run a search, but creating one allows you to save reports and access them anytime."
  },
  {
    question: "Will the person I search for know I'm looking?", 
    answer: "No, all searches are 100% confidential. The person you search for will not be notified."
  },
  {
    question: "How much does a full report cost?",
    answer: "Pricing depends on the type of report you request. We offer both one-time report fees and subscription plans."
  }
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button
        onClick={onToggle}
        className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex justify-between items-center hover:bg-gray-50"
      >
        <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">{question}</span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          ) : (
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 md:px-6 pb-4 md:pb-5">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Split FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="bg-gray-50 py-16">
      <div className="w-[70%] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-blue-300 text-blue-700 rounded-full text-sm font-medium mb-4">
            FAQ's
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque facilisis.
            Nisl eu blandit nunc parturient adipiscing commodo.
          </p>
        </div>

        {/* Two Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="space-y-3 md:space-y-4">
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems[index]}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3 md:space-y-4">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index + leftColumnFaqs.length;
              return (
                <FAQItem
                  key={actualIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems[actualIndex]}
                  onToggle={() => toggleItem(actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}