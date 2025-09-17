import React from 'react';
import { ArrowRight, Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function StartCollectingSection() {
  const features = [
    {
      icon: Phone,
      title: "Get the phone number"
    },
    {
      icon: MapPin,
      title: "Look up current address"
    },
    {
      icon: Mail,
      title: "Find verified emails"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Stop Waiting. Start Collecting
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque facilitis.
          Nisl eu blandit nunc parturient adipiscing commodo.
        </p>
        
        {/* Features List */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12 relative">
          {/* Top line */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-px bg-gray-300 hidden md:block"></div>
          
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3 bg-gray-50 px-2 relative z-10">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 text-lg whitespace-nowrap">
                  {feature.title}
                </span>
              </div>
            );
          })}
          
          {/* Bottom line */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-px bg-gray-300 hidden md:block"></div>
        </div>
        
        {/* CTA Button */}
        <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
          Start Your Search Now
          <ArrowRight className="w-5 h-5 ml-2 inline" />
        </div>
      </div>
    </section>
  );
}