import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function Welcomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 md:py-40">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8 animate-bounce">
            <span className="text-6xl">📱</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Welcome to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-pulse">FEETALTHEPLUG</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Nigeria's #1 Premium iPhone Store
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            Authentic Devices • Best Prices • Nationwide Delivery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/home" 
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition transform shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="flex items-center justify-center gap-3">
                Explore Now
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>
            <Link 
              to="/shop" 
              className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-full font-bold text-xl border-2 border-white/20 hover:bg-white/20 hover:scale-110 transition transform shadow-2xl"
            >
              Shop iPhones
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="text-4xl font-black text-purple-400 mb-2">1K+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="text-4xl font-black text-pink-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Authentic</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">Fast Delivery</h3>
            <p className="text-gray-300">Same day delivery in Lagos. Nationwide delivery within 1-3 days.</p>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-yellow-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-gray-300">Only genuine unlocked iPhones. No clones, no fakes, guaranteed.</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-3">Best Prices</h3>
            <p className="text-gray-300">Competitive pricing with flexible payment options available.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Warranty Coverage</h3>
            <p className="text-gray-300">All devices come with warranty for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Get Your iPhone?</h2>
          <p className="text-xl text-white/90 mb-8">Contact us now and join thousands of satisfied customers!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/2349082080638" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 hover:scale-110 transition transform shadow-xl"
            >
              💬 WhatsApp: 09082080638
            </a>
            <a 
              href="tel:09082080638" 
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-110 transition transform shadow-xl"
            >
              📞 Call: 09082080638
            </a>
          </div>
          <p className="text-white/80 mt-6">📍 12, Oremeji Street, Ikeja (Computer Village), Lagos</p>
        </div>
      </section>
    </div>
  )
}

export default Welcomepage
