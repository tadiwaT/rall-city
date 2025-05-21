import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/rall_city_auto_logo.png"
                alt="RallCity AutoTraders Logo"
                width={180}
                height={60}
                className="invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for brand new and used cars in Zimbabwe since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/car-sale" className="text-gray-400 hover:text-white transition duration-300">
                  Car Sale
                </Link>
              </li>
              <li>
                <Link href="/car-wash" className="text-gray-400 hover:text-white transition duration-300">
                  Car Wash
                </Link>
              </li>
              <li>
                <Link href="/car-rental" className="text-gray-400 hover:text-white transition duration-300">
                  Car Rental
                </Link>
              </li>
              <li>
                <Link href="/car-hire" className="text-gray-400 hover:text-white transition duration-300">
                  Car Hire
                </Link>
              </li>
              <li>
                <Link href="/auction" className="text-gray-400 hover:text-white transition duration-300">
                  Auction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">Gate #5 Cnr Enterprise & Cumberland Rd, Eastlea, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">info@rallcityauto.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RallCity AutoTraders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
