import { Check, ChevronRight } from "lucide-react"

export default function CarWashPage() {
  // Sample service packages
  const packages = [
    {
      id: 1,
      name: "Basic Wash",
      price: 7,
      description: "Quick exterior wash to keep your car clean",
      features: ["Exterior Wash", "Wheel Cleaning", "Tire Shine", "Hand Dry"],
    },
    {
      id: 2,
      name: "Premium Wash",
      price: 15,
      description: "Comprehensive wash with added protection",
      features: [
        "Everything in Basic Wash",
        "Buffing",
        "Wax Protection",
        "Undercarriage Wash",
        "Triple Foam Polish",
        "Window Cleaning",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Deluxe Detail",
      price: 40,
      description: "Complete interior and exterior cleaning",
      features: [
        "Everything in Premium Wash",
        "Full Vallet",
        "Interior Vacuum",
        "Dashboard & Console Cleaning",
        "Leather Conditioning",
        "Air Freshener",
        "Floor Mat Cleaning",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/carwash_slider.jpg" alt="Car Wash" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Professional Car Wash</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Keep your vehicle looking its best with our premium car wash services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Wash Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border ${pkg.popular ? "border-green-500" : "border-transparent"} relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl-lg font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">${pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://wa.me/263781216414"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button
                    className={`w-full ${pkg.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-800 hover:bg-gray-900"} text-white font-bold py-3 px-4 rounded-md transition duration-300`}
                  >
                    Choose Package
                  </button>
                  </a>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Washing Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Pre-Wash</h3>
              <p className="text-gray-600">Initial rinse to remove loose dirt and debris from the vehicle surface.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Foam Application</h3>
              <p className="text-gray-600">Special foam solution applied to break down dirt and grime.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Hand Wash</h3>
              <p className="text-gray-600">Careful hand washing with premium microfiber mitts for a thorough clean.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dry & Finish</h3>
              <p className="text-gray-600">Hand drying with premium towels and final detailing touches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I've tried many car washes in town, but this one is by far the best. The attention to detail is
                amazing, and my car always looks brand new!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Tadiwa Tawonameso</h4>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The premium wash package is worth every penny. They take their time and make sure every spot is clean.
                Highly recommend!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Renny K</h4>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>☆</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Great service and friendly staff. They were able to accommodate me without an appointment. Will
                definitely be back!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Car Shine?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us today or schedule an appointment for your car wash service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
                    href="https://wa.me/263781216414"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center justify-center">
                        Schedule Now <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  </a>
            
            <a
              href="https://maps.app.goo.gl/FAthMzwAQLayLbkW9"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center justify-center">
              View Location
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
