"use client"

import React from "react"
import Image from "next/image"
import rectangleimage from "../../public/Rectangle 35.png"

export default function DeadbeatDetectiveWorks() {
  return (
    <section className="w-full max-w-[90vw] mx-auto" style={{padding: 'clamp(1rem, 2vw, 1.5rem) clamp(3rem, 4vw, 4rem)'}}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Header Section with Title and Lorem Text */}
        <div className="grid grid-cols-2 mb-12" style={{gap: 'clamp(2rem, 4vw, 4rem)'}}>
          {/* Left Side - Header */}
          <div>
            <div className="inline-block" style={{marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)'}}>
              <span className="text-blue-600 border border-blue-200 rounded-full bg-blue-50" 
                    style={{
                      fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                      padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)'
                    }}>
                How It Works
              </span>
            </div>
            <h2 className="font-bold text-gray-900" 
                style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', lineHeight: '1.2'}}>
              How Deadbeat Detective Works
            </h2>
          </div>
          
          {/* Right Side - Lorem Text */}
          <div style={{paddingTop: 'clamp(1rem, 2vw, 2rem)'}}>
            <p className="text-gray-600 leading-relaxed" 
               style={{fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Content Section with Steps and Image */}
        <div className="grid grid-cols-2" style={{gap: 'clamp(2rem, 4vw, 4rem)'}}>
          {/* Left Side - Steps */}
          <div style={{gap: 'clamp(1.5rem, 2.5vw, 2.5rem)'}} className="space-y-0 flex flex-col">
            <div className="flex items-start" style={{gap: 'clamp(0.75rem, 1vw, 1rem)'}}>
              <div className="flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center" 
                   style={{
                     width: 'clamp(1.5rem, 2vw, 2rem)',
                     height: 'clamp(1.5rem, 2vw, 2rem)'
                   }}>
                <span className="text-white font-semibold" 
                      style={{fontSize: 'clamp(0.75rem, 1vw, 0.875rem)'}}>1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900" 
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                      marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                    }}>
                  Enter Their Info
                </h3>
                <p className="text-gray-600" 
                   style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                  Just a name and location — or get more specific with email/phone.
                </p>
              </div>
            </div>

            <div className="flex items-start" style={{gap: 'clamp(0.75rem, 1vw, 1rem)'}}>
              <div className="flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center" 
                   style={{
                     width: 'clamp(1.5rem, 2vw, 2rem)',
                     height: 'clamp(1.5rem, 2vw, 2rem)'
                   }}>
                <span className="text-white font-semibold" 
                      style={{fontSize: 'clamp(0.75rem, 1vw, 0.875rem)'}}>2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900" 
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                      marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                    }}>
                  Get Instant Results
                </h3>
                <p className="text-gray-600" 
                   style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                  View the report instantly — no waiting, no subscriptions.
                </p>
              </div>
            </div>

            <div className="flex items-start" style={{gap: 'clamp(0.75rem, 1vw, 1rem)'}}>
              <div className="flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center" 
                   style={{
                     width: 'clamp(1.5rem, 2vw, 2rem)',
                     height: 'clamp(1.5rem, 2vw, 2rem)'
                   }}>
                <span className="text-white font-semibold" 
                      style={{fontSize: 'clamp(0.75rem, 1vw, 0.875rem)'}}>3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900" 
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                      marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                    }}>
                  Purchase Report
                </h3>
                <p className="text-gray-600" 
                   style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                  Unlock all personal data available for your use.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Large Image */}
          <div className="rounded-lg overflow-hidden shadow-lg" 
               style={{height: 'clamp(15rem, 20vw, 20rem)'}}>
            <Image 
              src={rectangleimage} 
              alt="Deadbeat Detective Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Header */}
        <div style={{marginBottom: 'clamp(1.5rem, 4vw, 2rem)'}}>
          <div className="inline-block" style={{marginBottom: 'clamp(0.75rem, 2vw, 1rem)'}}>
            <span className="text-blue-600 border border-blue-200 rounded-full bg-blue-50" 
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                    padding: 'clamp(0.25rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)'
                  }}>
              How It Works
            </span>
          </div>
          <h2 className="font-bold text-gray-900" 
              style={{
                fontSize: 'clamp(1.5rem, 6vw, 1.875rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                lineHeight: '1.2'
              }}>
            How Deadbeat Detective Works
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed" 
           style={{
             fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
             marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
           }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="space-y-0 flex flex-col" style={{gap: 'clamp(1.5rem, 4vw, 2rem)'}}>
          <div className="flex items-start" style={{gap: 'clamp(0.75rem, 2vw, 1rem)'}}>
            <div className="flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center" 
                 style={{
                   width: 'clamp(1.5rem, 4vw, 2rem)',
                   height: 'clamp(1.5rem, 4vw, 2rem)'
                 }}>
              <span className="text-white font-semibold" 
                    style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}>1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900" 
                  style={{
                    fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                    marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)'
                  }}>
                Enter Their Info
              </h3>
              <p className="text-gray-600" 
                 style={{fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'}}>
                Just a name and location — or get more specific with email/phone.
              </p>
            </div>
          </div>

          <div className="flex items-start" style={{gap: 'clamp(0.75rem, 2vw, 1rem)'}}>
            <div className="flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center" 
                 style={{
                   width: 'clamp(1.5rem, 4vw, 2rem)',
                   height: 'clamp(1.5rem, 4vw, 2rem)'
                 }}>
              <span className="text-white font-semibold" 
                    style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}>2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900" 
                  style={{
                    fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                    marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)'
                  }}>
                We Search 340+ Databases
              </h3>
              <p className="text-gray-600" 
                 style={{fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'}}>
                Public records, skip tracing data, court filings, and more.
              </p>
            </div>
          </div>

          <div className="flex items-start" style={{gap: 'clamp(0.75rem, 2vw, 1rem)'}}>
            <div className="flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center" 
                 style={{
                   width: 'clamp(1.5rem, 4vw, 2rem)',
                   height: 'clamp(1.5rem, 4vw, 2rem)'
                 }}>
              <span className="text-white font-semibold" 
                    style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'}}>3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900" 
                  style={{
                    fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                    marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)'
                  }}>
                Get Instant Results
              </h3>
              <p className="text-gray-600" 
                 style={{fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'}}>
                View the report instantly — no waiting, no subscriptions.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="rounded-lg overflow-hidden shadow-lg" 
             style={{
               marginTop: 'clamp(1.5rem, 4vw, 2rem)',
               height: 'clamp(10rem, 25vw, 12rem)'
             }}>
          <Image 
            src={rectangleimage} 
            alt="Deadbeat Detective Logo" 
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </section>
  )
}