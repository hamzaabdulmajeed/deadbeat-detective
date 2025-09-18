import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import pic1 from "../../public/pic1.png"
import pic2 from "../../public/pic2.png"
import pic3 from "../../public/pic3.png"

const testimonials = [
  {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut labore et dolore magna aliqua.",
    name: "Artemisia Udinese",
    role: "Marketing Specialist",
    avatar: pic1
  },
  {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut labore et dolore magna aliqua.",
    name: "Artemisia Udinese", 
    role: "Marketing Specialist",
    avatar: pic2
  },
  {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te incididunt ut labore et dolore magna aliqua.",
    name: "Artemisia Udinese",
    role: "Marketing Specialist", 
    avatar: pic3
  }
];

export default function TestimonialsSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="w-[70%] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-blue-300 text-blue-700 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiences Shared by Our Clients
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="mb-6">
                <div className="w-8 h-8 text-blue-500 text-3xl font-bold leading-none">„</div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                {testimonial.feedback}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <Image 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-4 w-12 h-12 flex-shrink-0"
                  style={{objectPosition: 'right center'}}
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}