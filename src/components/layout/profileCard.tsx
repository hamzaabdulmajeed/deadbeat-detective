"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from "lucide-react"

export default function DataReport() {
  return (
    <section className="w-full py-16 px-4">
      <div className="w-[70%] mx-auto space-y-8">
        {/* Top Section */}
        <div className="text-center space-y-4">
          <Button
            size="sm"
            className="mx-auto rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Data Report
          </Button>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            See What You'll Get
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-md rounded-2xl border-0">
          {/* Person Info */}
          <CardHeader className="text-center space-y-1 pt-8">
            <h3 className="text-xl font-semibold">John Michael Davin</h3>
            <p className="text-gray-700 font-medium">Age: 75 Years</p>
          </CardHeader>

          <CardContent className="px-4 md:px-8 pb-8 space-y-6">
            {/* Address / Email / Phone */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="break-all md:break-normal">1234 Oak Street, Austin, TX 78701</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="break-all md:break-normal">john.davis@email.com</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 text-xs md:text-sm">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>(512) 555-0123</span>
              </div>
            </div>

            {/* Bottom Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Family & Associates */}
              <div className="rounded-xl bg-gray-50 p-4 space-y-2">
                <h4 className="font-semibold text-blue-700">
                  Family & Associates
                </h4>
                <p className="text-sm text-gray-700">Sarah Davis (Spouse)</p>
                <p className="text-sm text-gray-700">Robert Davis (Father)</p>
                <p className="text-sm text-gray-700">8 more relatives found</p>
              </div>

              {/* Background Summary */}
              <div className="rounded-xl bg-gray-50 p-4 space-y-2">
                <h4 className="font-semibold text-blue-700">
                  Background Summary
                </h4>
                <p className="text-sm text-gray-700">Education: UT Austin</p>
                <p className="text-sm text-gray-700">Property: Homeowner</p>
                <p className="text-sm text-gray-700">Employment: Tech Industry</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}