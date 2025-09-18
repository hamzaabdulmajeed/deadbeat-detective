"use client"

import * as React from "react"
import Link from "next/link"
import logoImage from "../../public/logo.png"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="bg-white  mt-5 mx-10 ">
            <div className="bg-white flex items-center justify-between  px-6 py-4 rounded-lg shadow-sm">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src={logoImage}
                        alt="Deadbeat Detective Logo"
                        width={90}
                        height={90}
                        className="rounded"
                    />
                </Link>

                {/* Desktop Navigation Menu */}
                <NavigationMenu viewport={false} className=" hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(navigationMenuTriggerStyle(), "hover:text-blue-700")}
                            >
                                <a href="#how-it-works">How it Works</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(navigationMenuTriggerStyle(), "hover:text-blue-700")}
                            >
                                <a href="#why-us">Why Us</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(navigationMenuTriggerStyle(), "hover:text-blue-700")}
                            >
                                <a href="#use-cases">Use Cases</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(navigationMenuTriggerStyle(), "hover:text-blue-700")}
                            >
                                <a href="#faqs">FAQs</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                    <Link
                        href="/login"
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Log In
                    </Link>
                    <Link
                        href="/signup"
                        className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        {/* Mobile Navigation Links */}
                        <div className="space-y-3">
                            <a
                                href="#home"
                                className="block text-blue-600 font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </a>

                            {/* How It Works - Mobile */}
                            <a
                                href="#how-it-works"
                                className="block text-gray-800 font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                How It Works
                            </a>

                            {/* Why Us - Mobile */}
                            <a
                                href="#why-us"
                                className="block text-gray-800 font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Why Us
                            </a>

                            {/* Use Cases - Mobile */}
                            <a
                                href="#use-cases"
                                className="block text-gray-800 font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Use Cases
                            </a>

                            <a
                                href="#faqs"
                                className="block text-gray-800 font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                FAQs
                            </a>
                        </div>


                        {/* Mobile Auth Buttons */}
                        <div className="pt-4 border-t space-y-3">
                            <Link
                                href="/login"
                                className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="block w-full text-center px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}