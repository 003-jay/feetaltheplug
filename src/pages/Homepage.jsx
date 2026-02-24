import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Homepage() {
  const testimonials = [
    { name: 'Chinedu Okafor', location: 'Lagos', comment: 'Got my iPhone 14 Pro Max from Feetaltheplug. Clean device, honest pricing, and fast delivery. Highly recommended!', rating: 5 },
    { name: 'Aisha Bello', location: 'Abuja', comment: 'Best phone dealer in Nigeria! No stories, just quality phones. My iPhone 15 is working perfectly.', rating: 5 },
    { name: 'Emeka Nwankwo', location: 'Port Harcourt', comment: 'I was skeptical at first but Feetaltheplug delivered beyond my expectations. Genuine iPhone 13 at great price!', rating: 5 },
    { name: 'Fatima Yusuf', location: 'Kano', comment: 'Smooth transaction from start to finish. Got my iPhone 12 Pro delivered to Kano in 2 days. Thank you!', rating: 5 },
    { name: 'Tunde Adeyemi', location: 'Ibadan', comment: 'Been buying from them for 2 years now. Always clean devices, no fake phones. Trust is everything!', rating: 5 },
    { name: 'Ngozi Okonkwo', location: 'Enugu', comment: 'My iPhone 15 Pro is amazing! Feetaltheplug is the real deal. No regrets at all.', rating: 5 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="text-purple-400 text-lg font-semibold">🇳🇬 Nigeria's Most Trusted iPhone Dealer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500">iPhone</span> Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Clean devices • Honest grading • Smooth transactions • Nationwide delivery
          </p>
          <p className="text-lg text-gray-400 mb-8">
            📍 12, Oremeji Street, Ikeja (Computer Village), Lagos
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-purple-400 mb-2">2000+</div>
              <div className="text-gray-400 text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-pink-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm md:text-base">Satisfaction Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
              <div className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-gray-400 text-sm md:text-base">Referrals</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition transform shadow-lg">
              Browse iPhones 📱
            </Link>
            <a href="https://wa.me/2347025119321" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg">
              WhatsApp Us 💬
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Why Feetaltheplug?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-white mb-2">100% Authentic</h3>
            <p className="text-gray-400">Only genuine unlocked iPhones. No clones, no fakes.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-400">Nationwide delivery within 1-3 days. Lagos same day!</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
            <p className="text-gray-400">Competitive pricing with flexible payment options.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">Warranty</h3>
            <p className="text-gray-400">All devices come with warranty coverage.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-4">What Our Customers Say</h2>
        <p className="text-gray-400 text-center mb-12">Real reviews from real Nigerians</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">📍 {testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Hot Deals 🔥</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition">
            <div className="h-64 bg-gradient-to-br from-purple-600 to-blue-600 relative">
              <img 
                src="https://images.unsplash.com/photo-1695822877321-15ef5412b82e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlQaG9uZSUyMDE1JTIwUHJvJTIwTWF4fGVufDB8fDB8fHww" 
                alt="iPhone 15 Pro Max"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">Hot!</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">iPhone 15 Pro Max</h3>
              <p className="text-gray-400 mb-4">256GB (Phys+eSIM)</p>
              <p className="text-3xl font-bold text-purple-400 mb-4">₦1,190,000</p>
              <Link to="/shop" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                View Details
              </Link>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition">
            <div className="h-64 bg-gradient-to-br from-pink-600 to-purple-600 relative">
              <img 
                src="https://images.unsplash.com/photo-1680687688158-e9165395ff00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D" 
                alt="iPhone 14 Pro Max"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Popular</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">iPhone 14 Pro Max</h3>
              <p className="text-gray-400 mb-4">128GB (Phys+eSIM)</p>
              <p className="text-3xl font-bold text-purple-400 mb-4">₦890,000</p>
              <Link to="/shop" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                View Details
              </Link>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition">
            <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 relative">
              <img 
                src="https://images.unsplash.com/photo-1726574686436-5ef90358e032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTN8ZW58MHwxfDB8fHww" 
                alt="iPhone 13"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">Best Value</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">iPhone 13</h3>
              <p className="text-gray-400 mb-4">128GB</p>
              <p className="text-3xl font-bold text-purple-400 mb-4">₦482,000</p>
              <Link to="/shop" className="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Get Your iPhone?</h2>
          <p className="text-xl text-white/90 mb-8">Join 5,000+ satisfied customers across Nigeria</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07025119321" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
              📞 Call: 07025119321
            </a>
            <a href="https://wa.me/2349082080638" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg">
              💬 WhatsApp: 09082080638
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="font-semibold text-white mb-2">FEETALTHEPLUG GADGET</p>
          <p>© 2024 Feetaltheplug Gadget. All rights reserved.</p>
          <p className="mt-2">📍 12, Oremeji Street, Ikeja (Computer Village), Lagos</p>
          <p className="mt-2">📞 07025119321 | 09082080638</p>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
