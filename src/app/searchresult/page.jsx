"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, User, Mail, Phone, MapPin, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Your existing dummy data (you might want to move this to a separate file)
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

export default function searchResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState([])
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [loading, setLoading] = useState(true)

  // Get search parameters from URL
  const searchTerm = searchParams.get('q') || ''
  const searchType = searchParams.get('type') || 'name'
  const location = searchParams.get('location') || ''

  useEffect(() => {
    performSearch()
  }, [searchParams])

  const performSearch = () => {
    setLoading(true)
    
    if (!searchTerm.trim()) {
      setSearchResults([])
      setLoading(false)
      return
    }

    const results = initialPeopleData.filter(person => {
      let matchesSearch = false
      
      switch (searchType) {
        case "name":
          matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.aliases.some(alias => alias.toLowerCase().includes(searchTerm.toLowerCase()))
          break
        case "phone":
          matchesSearch = person.phone.includes(searchTerm.replace(/\D/g, ''))
          break
        case "email":
          matchesSearch = person.email.toLowerCase().includes(searchTerm.toLowerCase())
          break
        case "address":
          matchesSearch = person.address.toLowerCase().includes(searchTerm.toLowerCase())
          break
        default:
          matchesSearch = false
      }

      // Filter by location if provided (only for name searches)
      if (searchType === "name" && location.trim()) {
        matchesSearch = matchesSearch && person.address.toLowerCase().includes(location.toLowerCase())
      }

      return matchesSearch
    })

    setSearchResults(results)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Searching...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft size={20} />
              Back to Search
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
              <p className="text-gray-600 text-sm">
                Searched for "{searchTerm}" in {searchType}
                {location && ` • Location: ${location}`}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-gray-900">
              {searchResults.length} Results Found
            </span>
          </div>
        </div>
      </div>

      {/* Results Container */}
      <div className="flex flex-wrap gap-4">
        {searchResults.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <User size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg text-gray-500">No results found</p>
            <p className="text-sm text-gray-400 mb-4">
              Try adjusting your search terms or search in a different category
            </p>
            <Button
              onClick={() => router.push('/')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium"
            >
              Try New Search
            </Button>
          </div>
        ) : (
          searchResults.map((person) => (
            <SearchResultCard 
              key={person.id} 
              person={person} 
              onViewReport={setSelectedPerson}
            />
          ))
        )}
      </div>

      {/* Full Report Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Full Report</h2>
              <Button
                onClick={() => setSelectedPerson(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedPerson.name}</h3>
                <p className="text-gray-600">Age: {selectedPerson.age}</p>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-gray-400" />
                        <span className="text-gray-600">Email:</span>
                        <span className="text-gray-900">{selectedPerson.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gray-400" />
                        <span className="text-gray-600">Phone:</span>
                        <span className="text-gray-900">{selectedPerson.phone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="text-gray-400 mt-0.5" />
                        <span className="text-gray-600">Address:</span>
                        <span className="text-gray-900">{selectedPerson.address}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Report Information</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">First Reported:</span>
                        <span className="text-gray-900 ml-2">{selectedPerson.firstReported}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Reported:</span>
                        <span className="text-gray-900 ml-2">{selectedPerson.lastReported}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Known Aliases</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPerson.aliases.map((alias, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {alias}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Search Result Card Component
function SearchResultCard({ person, onViewReport }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-start items-start">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                {/* <p className="text-gray-600">Age: {person.age}</p> */}
              </div>
              <Button
                onClick={() => onViewReport(person)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Eye size={16} />
                View Full Report
              </Button>
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-1 gap-6 mb-4">
              <div className="space-y-3 flex justify-center items-center">
                <div>
              
                <p className="text-gray-600">Age: {person.age}</p>

                {/* <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-orange-50 rounded-full mt-1">
                    <MapPin size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Current Address</p>
                    <p className="text-gray-900 font-medium">{person.address}</p>
                  </div>
                </div> */}
              </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full">
                    <Mail size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="text-gray-900 font-medium">{person.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-50 rounded-full">
                    <Phone size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="text-gray-900 font-medium">{person.phone}</p>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Aliases */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Known Aliases</p>
              <div className="flex flex-wrap gap-2">
                {person.aliases.slice(0, 3).map((alias, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    {alias}
                  </span>
                ))}
                {person.aliases.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-sm rounded">
                    +{person.aliases.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Report Dates */}
            <div className="flex gap-6 text-xs text-gray-500 pt-3 border-t border-gray-100">
              <span>
                <span className="font-medium">First Reported:</span> {person.firstReported}
              </span>
              <span>
                <span className="font-medium">Last Reported:</span> {person.lastReported}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}