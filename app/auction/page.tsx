import { Calendar, Clock, ChevronRight, Timer } from "lucide-react"

export default function AuctionPage() {
  // Sample auction data
  const upcomingAuctions = [
    {
      id: 1,
      title: "Luxury & Sports Car Auction",
      date: "June 15, 2025",
      time: "10:00 AM",
      location: "Main Showroom",
      description: "Featuring premium luxury and sports cars from top brands.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Classic Car Collection",
      date: "July 8, 2025",
      time: "11:00 AM",
      location: "Vintage Hall",
      description: "Rare classic cars from the 1950s to 1980s.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Fleet & Commercial Vehicles",
      date: "July 22, 2025",
      time: "9:00 AM",
      location: "Commercial Center",
      description: "Commercial vehicles, vans, and fleet cars at competitive prices.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  // Sample current auction items
  const currentAuctionItems = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      year: 2020,
      currentBid: 45000,
      endTime: "2h 15m",
      bids: 12,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      year: 2021,
      currentBid: 52000,
      endTime: "4h 30m",
      bids: 18,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      name: "Audi RS7 Sportback",
      year: 2022,
      currentBid: 68000,
      endTime: "1h 45m",
      bids: 24,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      name: "Porsche 911 Carrera",
      year: 2021,
      currentBid: 78000,
      endTime: "3h 10m",
      bids: 16,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      name: "Ford Mustang GT",
      year: 2022,
      currentBid: 38000,
      endTime: "5h 20m",
      bids: 9,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      name: "Chevrolet Corvette",
      year: 2020,
      currentBid: 49000,
      endTime: "2h 40m",
      bids: 14,
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img src="/placeholder.svg?height=600&width=1200" alt="Car Auction" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Car Auctions</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Participate in our regular car auctions to find great deals on quality vehicles in Zimbabwe.
          </p>
        </div>
      </section>

      {/* Live Auction Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Live Auctions</h2>
            <div className="flex items-center text-green-600">
              <Timer className="h-5 w-5 mr-2" />
              <span className="font-bold">Live Now</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentAuctionItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1">{item.year}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <div className="flex justify-between mb-4">
                    <div>
                      <span className="text-gray-600 text-sm">Current Bid:</span>
                      <span className="text-xl font-bold text-green-600 block">
                        ${item.currentBid.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-600 text-sm">Ends in:</span>
                      <span className="font-bold block">{item.endTime}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-6">
                    <span className="text-gray-600">{item.bids} bids</span>
                    <a href="#" className="text-green-600 font-medium">
                      Bid History
                    </a>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder={`$${(item.currentBid + 500).toLocaleString()}`}
                      className="flex-1 p-2 border border-gray-300 rounded-md"
                    />
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Auctions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Upcoming Auctions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingAuctions.map((auction) => (
              <div key={auction.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={auction.image || "/placeholder.svg"}
                    alt={auction.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{auction.title}</h3>
                  <p className="text-gray-600 mb-4">{auction.description}</p>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-gray-600">{auction.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-gray-600">{auction.time}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-600">{auction.location}</span>
                  </div>
                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
                    Register for Auction <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Auctions Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Register</h3>
              <p className="text-gray-600">
                Create an account and register for the auction you want to participate in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Preview</h3>
              <p className="text-gray-600">
                Inspect vehicles in person during the preview period or view detailed online listings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bid</h3>
              <p className="text-gray-600">Place bids online or in person during the live auction event.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Win & Pay</h3>
              <p className="text-gray-600">If you win, complete payment and take home your new vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How do I register for an auction?</h3>
              <p className="text-gray-600">
                You can register online through our website or in person at our auction facility. You'll need valid ID
                and a refundable deposit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can I inspect vehicles before bidding?</h3>
              <p className="text-gray-600">
                Yes, we offer preview periods before each auction where you can inspect vehicles in person. Detailed
                vehicle reports are also available online.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What fees are involved?</h3>
              <p className="text-gray-600">
                There's a buyer's premium of 5-10% added to the final bid price, plus any applicable taxes and
                registration fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How soon can I take the vehicle after winning?</h3>
              <p className="text-gray-600">
                Once payment is complete, you can take the vehicle immediately. We offer temporary transit permits if
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Bidding?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register for our upcoming auctions today and find your next vehicle at a great price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center justify-center">
              Register Now <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center justify-center">
              View Auction Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
