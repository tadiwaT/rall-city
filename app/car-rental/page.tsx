import { Calendar, Clock, Users, ChevronRight, Check } from "lucide-react"

export default function CarRentalPage() {
  // Sample car rental data
  const rentalCars = [
    {
      id: 1,
      name: "Economy Sedan",
      price: 45,
      image: "/placeholder.svg?height=300&width=500",
      passengers: 5,
      luggage: 2,
      transmission: "Automatic",
      features: ["Air Conditioning", "Bluetooth", "USB Port", "Backup Camera"],
    },
    {
      id: 2,
      name: "Compact SUV",
      price: 65,
      image: "/placeholder.svg?height=300&width=500",
      passengers: 5,
      luggage: 3,
      transmission: "Automatic",
      features: ["Air Conditioning", "Bluetooth", "USB Port", "Backup Camera", "Cruise Control"],
    },
    {
      id: 3,
      name: "Luxury Sedan",
      price: 95,
      image: "/placeholder.svg?height=300&width=500",
      passengers: 5,
      luggage: 3,
      transmission: "Automatic",
      features: ["Leather Seats", "Navigation", "Premium Sound", "Heated Seats", "Sunroof"],
    },
    {
      id: 4,
      name: "Full-Size SUV",
      price: 110,
      image: "/placeholder.svg?height=300&width=500",
      passengers: 7,
      luggage: 4,
      transmission: "Automatic",
      features: ["Third Row Seating", "Navigation", "Bluetooth", "Backup Camera", "Cruise Control"],
    },
    {
      id: 5,
      name: "Convertible",
      price: 120,
      image: "/placeholder.svg?height=300&width=500",
      passengers: 2,
      luggage: 1,
      transmission: "Automatic",
      features: ["Convertible Top", "Leather Seats", "Premium Sound", "Navigation", "Bluetooth"],
    },
    {
      id: 6,
      name: "Minivan",
      price: 85,
      image: "/placeholder.svg?height=300&width=500",
      passengers: 7,
      luggage: 5,
      transmission: "Automatic",
      features: ["Sliding Doors", "Third Row Seating", "Bluetooth", "Backup Camera", "Cruise Control"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img src="/placeholder.svg?height=600&width=1200" alt="Car Rental" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Car Rental</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Rent vehicles for any occasion with our flexible rental options throughout Zimbabwe.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md -mt-16 relative z-20">
            <h2 className="text-2xl font-bold mb-4">Book Your Rental Car</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Location</option>
                  <option>Downtown Office</option>
                  <option>Airport Terminal</option>
                  <option>North Branch</option>
                  <option>South Branch</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
                <div className="relative">
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Time</label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                <div className="relative">
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Return Time</label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Search Available Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cars */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Rental Fleet</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold text-green-600">${car.price}</span>
                      <span className="text-gray-600 text-sm block">per day</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-1" />
                      <span>{car.passengers} Passengers</span>
                    </div>
                    <div>
                      <span>{car.luggage} Luggage</span>
                    </div>
                    <div>
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {car.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <Check className="h-3 w-3 mr-1 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Car</h3>
              <p className="text-gray-600">Browse our fleet and select the perfect vehicle for your needs.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p className="text-gray-600">Complete the booking form with your details and preferences.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Pick Up Car</h3>
              <p className="text-gray-600">Collect your vehicle from our convenient location.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Return Car</h3>
              <p className="text-gray-600">Simply return the vehicle to the agreed location when you're done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What documents do I need to rent a car?</h3>
              <p className="text-gray-600">
                You'll need a valid driver's license, a credit card in your name, and proof of insurance. International
                renters may need additional documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Is there a security deposit?</h3>
              <p className="text-gray-600">
                Yes, we require a security deposit that will be refunded upon the safe return of the vehicle in its
                original condition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can I modify or cancel my reservation?</h3>
              <p className="text-gray-600">
                Yes, you can modify or cancel your reservation up to 24 hours before the scheduled pick-up time without
                any penalty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Is insurance included in the rental price?</h3>
              <p className="text-gray-600">
                Basic insurance is included, but we offer additional coverage options for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your rental car today and enjoy the freedom to explore at your own pace.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
            Book Now <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  )
}
