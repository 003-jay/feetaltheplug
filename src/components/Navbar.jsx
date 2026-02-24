import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/" className="text-sm sm:text-xl md:text-2xl font-bold text-white hover:scale-105 transition">
          <span className="text-white">FEETALTHEPLUG</span> <span className="text-purple-400">GADGET</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base">
          <Link to="/home" className="text-gray-300 hover:text-white transition px-2 py-1">Home</Link>
          <Link to="/shop" className="text-gray-300 hover:text-white transition px-2 py-1">Shop</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition px-2 py-1">Contact</Link>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black/95 border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition py-2">Home</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition py-2">Shop</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition py-2">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
