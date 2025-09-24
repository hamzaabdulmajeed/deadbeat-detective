"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Phone, Mail, MapPin } from "lucide-react"
import search from "@/app/searchresult/page"
import {Input} from "../ui/input"
import { Button } from "../ui/button"
// Your existing dummy data
const initialPeopleData = [
  {
    id: 1,
    name: "Steve Russo",
    age: 67,
    email: "john.doe@email.com",
    phone: "+2535456569",
    address: "Fairfield, CA 94533-3631",
    aliases: ["Stephen L Russo", "Stephen L. Russo", "Stephen Lusso", "Stephen Louis Russo", "Stephen L Russo", "Stephen Louis Russo Jr", "Stephen L Russo Jr"],
    firstReported: "05/05/2019",
    lastReported: "07/01/2025"
  },
  {
    id: 2,
    name: "John Smith",
    age: 45,
    email: "j.smith@company.com",
    phone: "+1234567890",
    address: "San Francisco, CA 94102",
    aliases: ["Jonathan Smith", "John A Smith", "J. Smith"],
    firstReported: "03/15/2020",
    lastReported: "08/20/2025"
  },
  {
    id: 3,
    name: "Emily Johnson",
    age: 32,
    email: "emily.johnson@email.com",
    phone: "+9876543210",
    address: "Los Angeles, CA 90210",
    aliases: ["Emily J Johnson", "E. Johnson", "Emmy Johnson"],
    firstReported: "01/10/2021",
    lastReported: "09/05/2025"
  },
  {
    id: 4,
    name: "Michael Brown",
    age: 58,
    email: "m.brown@business.net",
    phone: "+5551234567",
    address: "Sacramento, CA 95814",
    aliases: ["Mike Brown", "Michael J Brown", "M. Brown"],
    firstReported: "12/03/2019",
    lastReported: "08/28/2025"
  },
  {
    id: 5,
    name: "Sarah Davis",
    age: 29,
    email: "sarah.davis@startup.io",
    phone: "+7778889999",
    address: "Oakland, CA 94607",
    aliases: ["Sarah M Davis", "S. Davis", "Sara Davis"],
    firstReported: "06/22/2022",
    lastReported: "09/12/2025"
  },
  {
    id: 6,
    name: "Robert Wilson",
    age: 73,
    email: "bob.wilson@retired.com",
    phone: "+4445556666",
    address: "Palo Alto, CA 94301",
    aliases: ["Bob Wilson", "Robert J Wilson", "Rob Wilson"],
    firstReported: "08/14/2018",
    lastReported: "07/18/2025"
  },
  {
    id: 7,
    name: "Lisa Anderson",
    age: 41,
    email: "lisa.anderson@consulting.biz",
    phone: "+3334445555",
    address: "San Jose, CA 95113",
    aliases: ["Lisa A Anderson", "L. Anderson", "Elisabeth Anderson"],
    firstReported: "04/07/2021",
    lastReported: "09/01/2025"
  },
  {
    id: 8,
    name: "David Martinez",
    age: 36,
    email: "david.martinez@tech.com",
    phone: "+2223334444",
    address: "Fresno, CA 93721",
    aliases: ["Dave Martinez", "David M Martinez", "D. Martinez"],
    firstReported: "11/25/2020",
    lastReported: "08/15/2025"
  },
  {
    id: 9,
    name: "Jennifer Lee",
    age: 28,
    email: "jennifer.lee@design.co",
    phone: "+1112223333",
    address: "Berkeley, CA 94720",
    aliases: ["Jen Lee", "Jennifer L Lee", "J. Lee"],
    firstReported: "02/18/2023",
    lastReported: "09/10/2025"
  },
  {
    id: 10,
    name: "Christopher Taylor",
    age: 52,
    email: "chris.taylor@finance.com",
    phone: "+8889990000",
    address: "Riverside, CA 92501",
    aliases: ["Chris Taylor", "Christopher J Taylor", "C. Taylor"],
    firstReported: "07/12/2019",
    lastReported: "08/05/2025"
  }
]

export default function SearchPage() {
  const router = useRouter()
  const [peopleData] = useState(initialPeopleData)
  const [activeTab, setActiveTab] = useState("Name")
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const generateSuggestions = (term) => {
    if (!term.trim()) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const filteredSuggestions = peopleData.filter(person => {
      switch (activeTab) {
        case "Name":
          return person.name.toLowerCase().includes(term.toLowerCase()) ||
                 person.aliases.some(alias => alias.toLowerCase().includes(term.toLowerCase()))
        case "Phone":
          return person.phone.includes(term.replace(/\D/g, ''))
        case "Email":
          return person.email.toLowerCase().includes(term.toLowerCase())
        case "Address":
          return person.address.toLowerCase().includes(term.toLowerCase())
        default:
          return false
      }
    }).slice(0, 5)

    setSuggestions(filteredSuggestions)
    setShowSuggestions(filteredSuggestions.length > 0)
  }

  const handleSearchTermChange = (e) => {
    const value = e.target.value 
    setSearchTerm(value)
    generateSuggestions(value)
  }
  const performSearch = () => {
    console.log("value", searchTerm)
  const queryValue = String(searchTerm || "").trim()
//   const queryLocation = String(location || "").trim()
  if (!queryValue) return

  const params = new URLSearchParams({
    q: queryValue,
    type: activeTab.toLowerCase(),
    ...(activeTab === "Name")
  })
console.log("queryvalue", queryValue)

  router.push(`/searchresult?${params.toString()}`)
}


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch()
    }
  }
   
  return (
    <div className="w-full max-w-6xl mx-auto p-4">

      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 relative">
        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {["Name", "Phone", "Email", "Address"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setSearchTerm("")
                setLocationTerm("")
                setShowSuggestions(false)
              }}
              className={`flex-1 font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
              style={{
                padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.5rem)',
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Form */}
        <div style={{padding: 'clamp(1.5rem, 3vw, 2.5rem)'}}>
          <div className="flex flex-col md:flex-row mb-4" style={{gap: 'clamp(0.5rem, 1vw, 1rem)'}}>
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder={`Enter ${activeTab}`}
                value={searchTerm}
                onChange={handleSearchTermChange}
                onKeyPress={handleKeyPress}
                onFocus={() => generateSuggestions(searchTerm)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                style={{
                  padding: 'clamp(0.6rem, 1.2vw, 1rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                }}
              />
            </div>
            
            {/* Location input only shows for Name tab */}
            {activeTab === "Name" && (
              <Input
                type="text"
                placeholder="City/State or ZIP"
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                style={{
                  padding: 'clamp(0.6rem, 1.2vw, 1rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
                }}
              />
            )}
            
            <Button 
              onClick={performSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded font-medium transition-colors whitespace-nowrap flex items-center gap-2"
              style={{
                padding: 'clamp(0.6rem, 1.2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)'
              }}
            >
              <Search size={16} />
              Search Now
            </Button>
          </div>
          
          {/* Advanced Search */}
          <div className="text-right">
            <button 
              className="text-blue-600 hover:text-blue-800 hover:underline"
              style={{fontSize: 'clamp(0.75rem, 1vw, 0.9rem)'}}
            >
              Advanced Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}