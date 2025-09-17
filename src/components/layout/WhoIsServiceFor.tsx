"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, Building, Search, Shield, User } from "lucide-react"

const serviceCategories = [
  {
    icon: Scale,
    title: "Family Law Attorneys",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: Users,
    title: "Single Parents",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: Building,
    title: "Collections Agencies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: Search,
    title: "Private Investigators",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: Shield,
    title: "Concerned Loved Ones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: User,
    title: "Single Parents",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

export default function WhoIsServiceFor() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-sm text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
            Who Uses This
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Who Is This Service For?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Service Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}