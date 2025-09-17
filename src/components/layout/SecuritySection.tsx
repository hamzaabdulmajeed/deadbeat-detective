import { Badge } from "@/components/ui/badge"
import { Shield, Lock, CreditCard, FileText } from "lucide-react"
import Image from "next/image"
import lock from "../../public/image 5-3.png"
import offImage from "../../public/image 6.png"
import { off } from "process"

export default function SecuritySection() {
    return (
        <div className="bg-gray-50">
            <div className="md:flex md:items-center md:min-h-screen">
                {/* Images Section - Full width on mobile, half on desktop */}
                <div className="w-full md:w-1/2">
                    {/* Images Row - Always side by side, full screen width */}
                    <div className="grid grid-cols-2 h-auto md:h-full">
                        {/* Lock Image */}
                        <div className="mt-4 md:mt-8 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={lock}
                                alt="Deadbeat Detective Logo"
                                className="w-full h-40 md:h-68 object-cover"
                            />
                        </div>

                        {/* Office Image */}
                        <div className="mb-4 md:mb-8 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={offImage}
                                alt="Deadbeat Detective Logo"
                                className="w-full h-40 md:h-68 object-cover"
                            />
                        </div>
                    </div>
                </div>


                {/* Text Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12 bg-white md:bg-gray-50">
                    {/* Badge */}
                    <div className="mb-4">
                        <Badge variant="outline" className="text-blue-600 border-blue-600 bg-blue-50">
                            Security & Confidentiality
                        </Badge>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                        Private. Secure. Confidential.
                    </h2>

                    {/* Features List */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Shield className="w-3 h-3 text-blue-600" />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                All searches are 100% confidential — your activity is never shared.
                            </p>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FileText className="w-3 h-3 text-blue-600" />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                Fully encrypted reports
                            </p>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CreditCard className="w-3 h-3 text-blue-600" />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                Safe payment via trusted gateways (Stripe/PayPal)
                            </p>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Shield className="w-3 h-3 text-blue-600" />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                We comply with applicable data privacy and legal guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}