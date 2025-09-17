"use client"

import React from "react"

export default function FindAnyone() {
    return (
        <section className="text-center mt-16 px-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Find <span className="text-blue-600">Anyone</span> Who Owes You{" "}

                {/* Mobile: all in one line */}
                <span className="md:hidden">
                    Money <span className="text-blue-600">Instantly.</span>
                </span>

                {/* Desktop: with line break + "in Less Than 60s" */}
                <span className="hidden md:inline">
                    <br />
                    Money in Less Than <span className="text-blue-600">60s.</span>
                </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                Instantly search public records, liens, and legal disputes with a click.{" "}
                <span className="font-semibold">Deadbeat Detective</span> brings transparency
                to your <span className="font-medium">fingertips</span> so you’re never left in the dark.
            </p>
        </section>
    )
}
