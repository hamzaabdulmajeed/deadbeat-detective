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
    <section className="w-full max-w-[90vw] mx-auto bg-gray-50" 
             style={{padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 2vw, 1.5rem)'}}>
      {/* Header */}
      <div className="text-center" style={{marginBottom: 'clamp(2rem, 3vw, 3rem)'}}>
        <div className="inline-block" style={{marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)'}}>
          <span className="text-blue-600 border border-blue-200 rounded-full bg-blue-50" 
                style={{
                  fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                  padding: 'clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)'
                }}>
            Who Uses This
          </span>
        </div>
        <h2 className="font-bold text-gray-900" 
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
              lineHeight: '1.2'
            }}>
          Who Is This Service For?
        </h2>
        <p className="text-gray-600 mx-auto leading-relaxed" 
           style={{
             fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)',
             maxWidth: 'clamp(20rem, 50vw, 32rem)'
           }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Service Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
           style={{gap: 'clamp(1rem, 2vw, 1.5rem)'}}>
        {serviceCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent style={{padding: 'clamp(1rem, 2vw, 1.5rem)'}}>
                <div className="flex items-start" style={{gap: 'clamp(0.75rem, 1.5vw, 1rem)'}}>
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 rounded-md flex items-center justify-center" 
                         style={{
                           width: 'clamp(2rem, 2.5vw, 2.5rem)',
                           height: 'clamp(2rem, 2.5vw, 2.5rem)'
                         }}>
                      <IconComponent className="text-white" 
                                   style={{
                                     width: 'clamp(1rem, 1.25vw, 1.25rem)',
                                     height: 'clamp(1rem, 1.25vw, 1.25rem)'
                                   }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900" 
                        style={{
                          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                          marginBottom: 'clamp(0.5rem, 0.75vw, 0.75rem)'
                        }}>
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" 
                       style={{fontSize: 'clamp(0.8rem, 1vw, 0.875rem)'}}>
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