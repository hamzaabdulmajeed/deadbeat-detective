"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState("Name")

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="w-full">
        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {["Name", "Phone", "Email", "Address"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <input
                type="text"
                placeholder={activeTab}
                className="flex-1 px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="City/State or ZIP"
                className="flex-1 px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-medium transition-colors whitespace-nowrap">
                Search Now
              </button>
            </div>
            
            {/* Advanced Search */}
            <div className="text-right">
              <button className="text-blue-600 hover:text-blue-800 text-sm hover:underline">
                Advanced Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}