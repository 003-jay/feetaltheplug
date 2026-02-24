import React from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-300">We're here to help! Reach out to us anytime</p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* WhatsApp Cards */}
            <a 
              href="https://wa.me/2349082080638" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 hover:scale-105 transition transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">💬</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">WhatsApp Orders</h3>
                  <p className="text-green-300">Order via WhatsApp</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-2">09082080638</p>
              <p className="text-gray-300">Click to order on WhatsApp</p>
            </a>

            {/* Phone Cards */}
            <a 
              href="tel:07025119321"
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:scale-105 transition transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📞</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Call Us</h3>
                  <p className="text-blue-300">Speak directly with us</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-2">07025119321</p>
              <p className="text-gray-300">Available during business hours</p>
            </a>

            <a 
              href="tel:09082080638"
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:scale-105 transition transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📞</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Call Us</h3>
                  <p className="text-blue-300">Alternative line</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-2">09082080638</p>
              <p className="text-gray-300">Available during business hours</p>
            </a>
          </div>

          {/* Location & Hours */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Visit Our Store</h3>
              <p className="text-xl text-gray-300 mb-4">
                12, Oremeji Street, Ikeja<br/>
                Computer Village, Lagos<br/>
                Nigeria
              </p>
              <a 
                href="https://maps.google.com/?q=12+Oremeji+Street+Ikeja+Lagos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white font-semibold">9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-semibold">10:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white font-semibold">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-xl text-white/90 mb-6">
              Our team is ready to assist you with any questions about our products or services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">🚚 Nationwide Delivery</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">💯 100% Authentic</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">🛡️ Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
