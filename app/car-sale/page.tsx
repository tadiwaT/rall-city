import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function CarSalePage() {
  // Real car data
  const cars = [
    {
      id: 1,
      name: "Nissan Note",
      year: 2015,
      price: 7800,
      image: "/images/nissan-note.jpeg",
      features: ["Fuel Efficient", "Compact Size", "Reliable", "Great Condition"],
      description: "Well maintained, perfect for city driving",
    },
    {
      id: 2,
      name: "Toyota Cross Corolla",
      year: 2023,
      price: 35000,
      image: "/images/toyota-cross.jpeg",
      features: ["1.8 Litre Hybrid", "Leather Seats", "Wireless Charging Pad", "Cruise Radar"],
      description: "Luxury hybrid crossover with advanced features",
    },
    {
      id: 3,
      name: "Toyota Esquire Hybrid",
      year: 2018,
      price: 18000,
      image: "/images/toyota-esquire.jpeg",
      features: ["Hybrid Engine", "Spacious Interior", "Fuel Efficient", "Family Vehicle"],
      description: "Elegant hybrid minivan with excellent fuel economy",
    },
    {
      id: 4,
      name: "Ford Ranger Wildtrak",
      year: 2023,
      price: 60000,
      image: "/images/ford-ranger.jpeg",
      features: ["Powerful Engine", "Off-road Capability", "Premium Interior", "Advanced Technology"],
      description: "Top-of-the-line pickup with exceptional performance",
    },
    {
      id: 5,
      name: "Isuzu D-Max",
      year: 2018,
      price: 28000,
      image: "/images/isuzu-dmax.jpeg",
      features: ["Automatic Transmission", "Durable Build", "Reliable Performance", "Workhorse Capability"],
      description: "Dependable pickup with automatic transmission",
    },
    {
      id: 6,
      name: "Toyota Land Cruiser LX V8",
      year: 2016,
      price: 40000,
      image: "/images/land-cruiser.jpeg",
      features: ["Manual Transmission", "V8 Engine", "Off-road Excellence", "Premium Interior"],
      description: "Legendary off-road capability with manual transmission",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 opacity-50">
          <Image src="/images/slider1.png" alt="Car Sale" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Available Vehicles</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Browse our collection of quality new and used cars for sale in Zimbabwe.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Find Your Perfect Car</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Any Make</option>
                  <option>Toyota</option>
                  <option>Nissan</option>
                  <option>Ford</option>
                  <option>Isuzu</option>
                  <option>Mercedes Benz</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Any Model</option>
                  <option>Note</option>
                  <option>Cross Corolla</option>
                  <option>Esquire</option>
                  <option>Ranger</option>
                  <option>D-Max</option>
                  <option>Land Cruiser</option>
                  <option>GLE</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Any Price</option>
                  <option>Under $10,000</option>
                  <option>$10,000 - $30,000</option>
                  <option>$30,000 - $50,000</option>
                  <option>$50,000 - $70,000</option>
                  <option>Over $70,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Any Year</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2018</option>
                  <option>2016</option>
                  <option>2015</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Search Cars
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listing */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Vehicle</h2>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-[300px] md:h-auto">
                <Image src="/images/ford-ranger.jpeg" alt="Ford Ranger Wildtrak" fill className="object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">Ford Ranger Wildtrak</h3>
                    <p className="text-gray-600 mt-1">2023 Model | Premium Condition</p>
                  </div>
                  <span className="text-2xl font-bold text-green-600">$60,000</span>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold mb-2">Vehicle Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Powerful engine with exceptional performance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Advanced off-road capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Premium interior with modern features</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>State-of-the-art infotainment and driver assistance systems</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Immaculate condition with full service history</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex-1 flex items-center justify-center">
                    Schedule Viewing
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-md transition duration-300 flex-1 flex items-center justify-center">
                    Request Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Inventory</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg">
                    {car.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">${car.price.toLocaleString()}</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {car.year} Model
                    </span>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="grid grid-cols-1 gap-y-1">
                      {car.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <ChevronRight className="h-3 w-3 mr-1 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                      View Details
                    </button>
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team and let us help you find the perfect vehicle that meets your needs and budget.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
            Contact Us <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  )
}
