import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:scale-105 transition">
          <span className="animate-flip">FEETALTHEPLUG</span> <span className="text-purple-400 animate-pulse-glow">GADGET</span>
        </Link>
        <nav className="flex gap-4 md:gap-6">
          <Link to="/home" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/shop" className="text-gray-300 hover:text-white transition">Shop</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
