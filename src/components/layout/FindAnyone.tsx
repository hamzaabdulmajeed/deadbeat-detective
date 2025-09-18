"use client"
import React from "react"

export default function FindAnyone() {
    return (
        <div className="w-full mt-8 flex items-center justify-center  bg-gray-50">
            <div className="w-full max-w-[70vw] text-center space-y-6">
                {/* Heading */}
                <div className="space-y-2">
                    <h1 className="font-bold text-gray-900 leading-tight" style={{fontSize: 'clamp(2rem, 5vw, 6rem)'}}>
                        Find Anyone Who Owes You{" "}
                        <span className="md:hidden">
                    Money <span className="text-blue-600">Instantly.</span>
                </span>

                {/* Desktop: with line break + "in Less Than 60s" */}
                <span className="hidden md:inline">
                    <br />
                    Money in Less Than <span className="text-blue-600">60s.</span>
                </span>
                    </h1>
                    
                    {/* Desktop additional text */}
                    {/* <div className="hidden md:block">
                        <p className="text-gray-700 font-medium" style={{fontSize: 'clamp(1rem, 2.5vw, 2rem)'}}>
                            in less than 60 seconds.
                        </p>
                    </div> */}
                </div>

                {/* Description */}
                <div className="mx-auto">
                    <p className="text-gray-600 leading-relaxed" style={{fontSize: 'clamp(0.9rem, 2vw, 1.5rem)'}}>
                        Instantly search public records, liens, and legal disputes with a click.{" "}
                        <span className="font-semibold text-gray-800">Deadbeat Detective</span> brings transparency
                        to your fingertips so you're never left in the dark.
                    </p>
                </div>
            </div>
        </div>
    )
}