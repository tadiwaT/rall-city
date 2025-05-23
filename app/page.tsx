import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function Home() {
  // Featured vehicles for homepage
  const featuredVehicles = [
    {
      id: 1,
      name: "Toyota Land Cruiser LX V8",
      year: 2016,
      price: 40000,
      image: "/images/land-cruiser.jpeg",
      category: "SUV",
    },
    {
      id: 2,
      name: "Ford Ranger Wildtrak",
      year: 2023,
      price: 60000,
      image: "/images/ford-ranger.jpg",
      category: "Pickup",
    },
    {
      id: 3,
      name: "Toyota Cross Corolla",
      year: 2023,
      price: 35000,
      image: "/images/toyota-cross.jpeg",
      category: "Hybrid SUV",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 opacity-70">
          <Image src="/images/slider1.png" alt="RallCity AutoTraders Banner" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">RallCity AutoTraders</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            A leading dealer in brand new and used cars in Zimbabwe. We strive to ensure that you get the best from your
            money!
          </p>
          <Link
            href="#services"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            Explore Our Services <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Featured Vehicles</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our selection of premium vehicles available for immediate purchase
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg">
                    {vehicle.year}
                  </div>
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white px-3 py-1 rounded-tr-lg">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">${vehicle.price.toLocaleString()}</span>
                  </div>
                  <Link
                    href="/car-sale"
                    className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center font-bold py-2 px-4 rounded-md transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/car-sale"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              View All Vehicles <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Sale */}
            <Link href="/car-sale" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image src="/images/toyota-cross.jpeg" alt="Car Sale" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    Car Sale
                  </h3>
                  <p className="text-gray-600">
                    Browse our extensive collection of quality new and used cars for sale.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-green-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Car Wash */}
            <Link href="/car-wash" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image src="/images/carwash_slider.jpg" alt="Car Wash" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    Car Wash
                  </h3>
                  <p className="text-gray-600">Professional cleaning services to keep your vehicle looking its best.</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-green-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Car Rental */}
            
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image src="/images/nissan-note.jpeg" alt="Car Rental" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    Car Rental
                  </h3>
                  <p className="text-gray-600">Rent vehicles for any occasion with our flexible rental options.</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-green-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            

            {/* Car Hire */}
            <Link href="/car-hire" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image src="/images/toyota-esquire.jpeg" alt="Car Hire" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    Car Hire
                  </h3>
                  <p className="text-gray-600">Premium chauffeur services for special events and business needs.</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-green-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Auction */}
            
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image src="/images/land-cruiser.jpeg" alt="Car Auction" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    Auction
                  </h3>
                  <p className="text-gray-600">Participate in our regular car auctions to find great deals.</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-green-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            

            {/* Contact Us */}
            <Link href="/contact" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image src="/images/isuzu-dmax.jpeg" alt="Contact Us" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">Contact Us</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    Contact Us
                  </h3>
                  <p className="text-gray-600">Get in touch with our team for inquiries and personalized service.</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-green-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              At RallCity AutoTraders, our mission is to provide top-notch vehicle sales and rental services,
              prioritizing customer satisfaction, quality, innovation, and integrity. We strive to build lasting
              relationships, drive industry excellence, and deliver exceptional experiences through our extensive range
              of vehicles, expert support, and commitment to sustainability.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
              >
                Learn More About Us <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Customers Say</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img
            src="/images/team-2.jpg" // Replace with the actual image path
            alt="John Smith"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">John Smith</h4>
            <p className="text-gray-600 text-sm">Car Buyer</p>
          </div>
        </div>
        <p className="text-gray-600">
          "The car buying process was smooth and transparent. I got a great deal on my new vehicle and the staff
          was incredibly helpful."
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img
            src="/images/TAD.jpg" // Replace with the actual image path
            alt="Miss Tawonameso"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">Miss Tawonameso</h4>
            <p className="text-gray-600 text-sm">Regular Customer</p>
          </div>
        </div>
        <p className="text-gray-600">
          "I've been using their car wash services for years. They always do an exceptional job and my car looks
          brand new every time."
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img
            src="/images/team-3.jpg" // Replace with the actual image path
            alt="Ronny Brown"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">Ronny Brown</h4>
            <p className="text-gray-600 text-sm">Business Client</p>
          </div>
        </div>
        <p className="text-gray-600">
          "Their car hire service is top-notch. Professional drivers, immaculate vehicles, and always on time.
          Perfect for our corporate events."
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
