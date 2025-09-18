import { Badge } from "@/components/ui/badge"
import { Shield, Lock, CreditCard, FileText } from "lucide-react"
import Image from "next/image"
import lock from "../../public/image 5-3.png"
import offImage from "../../public/image 6.png"

export default function SecuritySection() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="w-[70%] mx-auto">
                {/* Mobile: Images first, then text */}
                <div className="flex flex-col md:flex-row md:items-center">
                    {/* Images Section */}
                    <div className="w-full md:w-1/2 order-1 md:order-1">
                        {/* Images Row - Always side by side */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Lock Image */}
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={lock}
                                    alt="Lock security image"
                                    className="w-full h-48 md:h-64 object-cover"
                                />
                            </div>

                            {/* Office Image */}
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={offImage}
                                    alt="Office security image"
                                    className="w-full h-48 md:h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="w-full md:w-1/2 order-2 md:order-2 mt-8 md:mt-0 md:pl-12">
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
        </div>
    )
}