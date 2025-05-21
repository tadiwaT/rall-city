"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/rall_city_auto_logo.png"
                alt="RallCity AutoTraders Logo"
                width={180}
                height={60}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-green-600 transition duration-300">
              Home
            </Link>
            <Link href="/car-sale" className="text-gray-800 hover:text-green-600 transition duration-300">
              Car Sale
            </Link>
            <Link href="/car-wash" className="text-gray-800 hover:text-green-600 transition duration-300">
              Car Wash
            </Link>
            <Link href="/car-rental" className="text-gray-800 hover:text-green-600 transition duration-300">
              Car Rental
            </Link>
            <Link href="/car-hire" className="text-gray-800 hover:text-green-600 transition duration-300">
              Car Hire
            </Link>
            <Link href="/auction" className="text-gray-800 hover:text-green-600 transition duration-300">
              Auction
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/car-sale"
                className="text-gray-800 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Sale
              </Link>
              <Link
                href="/car-wash"
                className="text-gray-800 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Wash
              </Link>
              <Link
                href="/car-rental"
                className="text-gray-800 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Rental
              </Link>
              <Link
                href="/car-hire"
                className="text-gray-800 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Car Hire
              </Link>
              <Link
                href="/auction"
                className="text-gray-800 hover:text-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Auction
              </Link>
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
