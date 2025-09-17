"use client"

import React from "react"
import { Check } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const comparisonData = [
  {
    feature: "Search Speed",
    deadbeatDetective: "Under 30 seconds",
    otherServices: "2-5 minutes"
  },
  {
    feature: "Pricing Model",
    deadbeatDetective: "Pay per report",
    otherServices: "Monthly subscription"
  },
  {
    feature: "Data Freshness",
    deadbeatDetective: "Updated daily",
    otherServices: "Updated monthly"
  },
  {
    feature: "Customer Support",
    deadbeatDetective: "24/7 Live chat",
    otherServices: "Email only"
  }
]

export default function TrustComparisonTable() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-sm text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why People Trust Deadbeat Detective
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-200">
              <TableHead className="font-semibold text-gray-900 py-4 px-6 text-left">
                Features
              </TableHead>
              <TableHead className="font-semibold text-blue-600 py-4 px-6 text-center bg-blue-50">
                Deadbeat Detective
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6 text-center">
                Other Services
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index} className="border-b border-gray-100 last:border-b-0">
                <TableCell className="font-medium text-gray-900 py-4 px-6">
                  {row.feature}
                </TableCell>
                <TableCell className="py-4 px-6 text-center bg-blue-50/50">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 font-medium">
                      {row.deadbeatDetective}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6 text-center text-gray-600">
                  {row.otherServices}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}