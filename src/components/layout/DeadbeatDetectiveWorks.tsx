"use client"

import React from "react"
import Image from "next/image"
import rectangleimage from "../../public/Rectangle 35.png"
export default function DeadbeatDetectiveWorks() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Header Section with Title and Lorem Text */}
        <div className="grid grid-cols-2 gap-16 mb-12">
          {/* Left Side - Header */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              How Deadbeat Detective Works
            </h2>
          </div>
          
          {/* Right Side - Lorem Text */}
          <div className="pt-8">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Content Section with Steps and Image */}
        <div className="grid grid-cols-2 gap-16">
          {/* Left Side - Steps */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enter Their Info
                </h3>
                <p className="text-gray-600">
                  Just a name and location — or get more specific with email/phone.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Get Instant Results
                </h3>
                <p className="text-gray-600">
                  View the report instantly — no waiting, no subscriptions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Purchase Report
                </h3>
                <p className="text-gray-600">
                  Unlock all personal data available for your use.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Large Image */}
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            <Image 
            src={rectangleimage} 
            alt="Deadbeat Detective Logo" 
            // width={90} 
            // height={90}
            className="w-full h-full object cover"
          />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block mb-4">
            <span className="text-sm text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Deadbeat Detective Works
          </h2>
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enter Their Info
              </h3>
              <p className="text-gray-600 text-sm">
                Just a name and location — or get more specific with email/phone.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We Search 340+ Databases
              </h3>
              <p className="text-gray-600 text-sm">
                Public records, skip tracing data, court filings, and more.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get Instant Results
              </h3>
              <p className="text-gray-600 text-sm">
                View the report instantly — no waiting, no subscriptions.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={rectangleimage} 
            alt="Deadbeat Detective Logo" 
            // width={48} 
            // height={48}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </section>
  )
}