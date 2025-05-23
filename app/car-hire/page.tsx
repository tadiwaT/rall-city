import { Calendar, Clock, Users, ChevronRight, Check } from "lucide-react"

export default function CarHirePage() {
  // Sample car hire data
  const hireVehicles = [
    {
      id: 1,
      name: "Toyota Cross",
      price: 100,
      image: "/images/toyota-cross1.jpeg",
      passengers: 3,
      description: "Luxury Toyota for business travel and airport transfers.",
      features: ["Leather Interior", "Climate Control", "Bottled Water", "Wi-Fi"],
    },
    {
      id: 2,
      name: "Land Cruiser",
      price: 120,
      image: "/images/land-cruiser.jpeg",
      passengers: 6,
      description: "Spacious luxury Land Cruiser for group travel and special occasions.",
      features: [
        "Leather Interior",
        "Climate Control",
        "Bottled Water",
        "Wi-Fi",
        "Extra Luggage Space",
      ],
    },
    {
      id: 3,
      name: "Toyota Fortuner GD6",
      price: 150,
      image: "/images/toyota-gd6.jpg",
      passengers: 8,
      description: "Classic stretch limousine for weddings, proms, and special celebrations.",
      features: [
        "Luxury Interior",
        "Climate Control",
        "Complimentary Drinks",
        "Entertainment System",
        "Special Lighting",
      ],
    },
    {
      id: 4,
      name: "RAV 4",
      price: 60,
      image: "/images/RAV4.jpg",
      passengers: 12,
      description: "Comfortable van for group transportation and airport shuttles.",
      features: ["Comfortable Seating", "Climate Control", "Bottled Water", "Luggage Space"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/carental.jpg" alt="Car Hire" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Car Hire</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Premium car hire services for special events and business needs across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md -mt-16 relative z-20">
            <h2 className="text-2xl font-bold mb-4">Book Your Car Hire Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Select Service</option>
                  <option>Airport Transfer</option>
                  <option>Business Travel</option>
                  <option>Wedding Service</option>
                  <option>Special Event</option>
                  <option>Hourly Hire</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                <div className="relative">
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4 Passengers</option>
                    <option>5 Passengers</option>
                    <option>6+ Passengers</option>
                  </select>
                  <Users className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="https://wa.me/+263772318505"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Check Availability
              </button>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Car Hire Fleet</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hireVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 relative overflow-hidden">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{vehicle.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-bold text-green-600">${vehicle.price}</span>
                      <span className="text-gray-600 text-sm block">per day</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600">
                    <Users className="h-5 w-5 mr-1" />
                    <span>Up to {vehicle.passengers} Passengers</span>
                  </div>

                  <p className="text-gray-600 mb-4">{vehicle.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <Check className="h-3 w-3 mr-1 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                    <a
                    href="https://wa.me/+263781216414"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                      Book This Vehicle
                    </button>
                    </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Car Hire Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Airport Transfers</h3>
              <p className="text-gray-600 mb-4">
                Professional airport pickup and drop-off services with flight monitoring and waiting time included.
              </p>
              <a href="#" className="text-green-600 font-medium flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Travel</h3>
              <p className="text-gray-600 mb-4">
                Reliable transportation for business executives with premium vehicles.
              </p>
              <a href="#" className="text-green-600 font-medium flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Special Events</h3>
              <p className="text-gray-600 mb-4">
                Luxury transportation for weddings, proms, anniversaries, and other special occasions.
              </p>
              <a href="#" className="text-green-600 font-medium flex items-center">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Robert Anderson</h4>
                  <p className="text-gray-600 text-sm">Business Executive</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The car hire service was impeccable. The vehicle was immaculate. Perfect for my business meetings."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Jennifer & Mark</h4>
                  <p className="text-gray-600 text-sm">Wedding Clients</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We hired the limousine for our wedding day and it was absolutely perfect. The vehicle was beautiful and
                helped make our special day even more memorable."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Emily Thompson</h4>
                  <p className="text-gray-600 text-sm">Regular Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I use their airport transfer service regularly and have never been disappointed. Always on time, always
                professional, and the vehicles are top-notch."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Premium Car Hire Service</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your car hire today for a luxurious and stress-free travel experience.
          </p>
          <a
                    href="https://wa.me/+263781216414"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
                    Book Now <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
          </a>
          
        </div>
      </section>
    </div>
  )
}
