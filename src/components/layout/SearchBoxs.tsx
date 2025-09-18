"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState("Name")

  return (
    <div className="w-full max-w-[70vw] mx-auto" style={{marginTop: 'clamp(1rem, 3vw, 2rem)'}}>
      <div className="w-full">
        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {["Name", "Phone", "Email", "Address"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
                style={{
                  padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.5rem)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div style={{padding: 'clamp(1.5rem, 3vw, 2.5rem)'}}>
            <div className="flex flex-col md:flex-row mb-4" style={{gap: 'clamp(0.5rem, 1vw, 1rem)'}}>
              <input
                type="text"
                placeholder={activeTab}
                className="flex-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                style={{
                  padding: 'clamp(0.6rem, 1.2vw, 1rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                }}
              />
              <input
                type="text"
                placeholder="City/State or ZIP"
                className="flex-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                style={{
                  padding: 'clamp(0.6rem, 1.2vw, 1rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                }}
              />
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white rounded font-medium transition-colors whitespace-nowrap"
                style={{
                  padding: 'clamp(0.6rem, 1.2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                }}
              >
                Search Now
              </button>
            </div>
            
            {/* Advanced Search */}
            <div className="text-right">
              <button 
                className="text-blue-600 hover:text-blue-800 hover:underline"
                style={{fontSize: 'clamp(0.75rem, 1vw, 0.9rem)'}}
              >
                Advanced Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}