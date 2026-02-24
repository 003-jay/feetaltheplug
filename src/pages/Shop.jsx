import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getProductImage = (name) => {
    // Map product names to image paths
    const imageMap = {
      'XS Max': 'https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIweHMlMjBtYXh8ZW58MHwxfDB8fHww',
      'XR': 'https://images.unsplash.com/photo-1576087317272-798fb5cb70b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIweHJ8ZW58MHwxfDB8fHww',
      '11': 'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHwxfDB8fHww',
      '11 Pro': 'https://images.unsplash.com/photo-1600262606369-acb8a2cf69fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTElMjBwcm98ZW58MHwxfDB8fHww',
      '11 Pro Max': 'https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTElMjBwcm8lMjBtYXh8ZW58MHwxfDB8fHww',
      '12': 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTJ8ZW58MHwxfDB8fHww',
      '12 Pro': 'https://images.unsplash.com/photo-1620555576588-a7dd6c04c55d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTIlMjBwcm98ZW58MHwxfDB8fHww',
      '12 Pro Max': 'https://images.unsplash.com/photo-1632972097677-f97e4e2a40d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTIlMjBwcm8lMjBtYXh8ZW58MHwxfDB8fHww',
      '13': 'https://images.unsplash.com/photo-1726574686436-5ef90358e032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTN8ZW58MHwxfDB8fHww',
      '14': 'https://images.unsplash.com/photo-1663314326607-483dbf45a98b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTR8ZW58MHwxfDB8fHww',
      '14 Plus': 'https://images.unsplash.com/photo-1663314326587-1c78fe2b7d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTR8ZW58MHwxfDB8fHww',
      '14 Pro': 'https://images.unsplash.com/photo-1677563277026-17a254ea02f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTQlMjBwcm98ZW58MHwxfDB8fHww',
      '14 Pro Max': 'https://images.unsplash.com/photo-1701680848891-89a6a4e9e31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHwxfDB8fHww',
      '15': 'https://images.unsplash.com/photo-1704380895316-caa2e4d68a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTV8ZW58MHwxfDB8fHww',
      '15 Plus': 'https://images.unsplash.com/photo-1704380900751-b094fb05c818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTV8ZW58MHwxfDB8fHww',
      '15 Pro': 'https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHwxfDB8fHww',
      '15 Pro Max': 'https://images.unsplash.com/photo-1709178295038-acbeec786fcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHwxfDB8fHww',
      '16e': 'https://images.unsplash.com/photo-1746366812501-53a73dc2e683?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTZlfGVufDB8MXwwfHx8MA%3D%3D',
      '16': 'https://images.unsplash.com/photo-1736102790521-dac1502db9ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTZ8ZW58MHwxfDB8fHww',
      '16 Plus': 'https://images.unsplash.com/photo-1749716491521-af90e3b6feb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE2fGVufDB8MXwwfHx8MA%3D%3D',
      '17 Air': 'https://images.unsplash.com/photo-1764160377368-8c398bf297ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZSUyMDE3fGVufDB8MXwwfHx8MA%3D%3D',
      '17 Pro': 'https://images.unsplash.com/photo-1763891378295-5d9bd5c48745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTd8ZW58MHwxfDB8fHww',
      '17 Pro Max': 'https://images.unsplash.com/photo-1758398013809-fc909955bd76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE3fGVufDB8MXwwfHx8MA%3D%3D',
    }
    return imageMap[name] || '/images/iphone-default.png'
  }

  const products = [
    { id: 1, name: 'XS Max', storage: '64GB', price: '280,000', category: 'xs', specs: 'Unlock' },
    { id: 2, name: 'XS Max', storage: '256GB', price: '295,000', category: 'xs', specs: 'Unlock' },
    { id: 3, name: 'XR', storage: '64GB', price: '250,000', category: 'xr', specs: '' },
    { id: 4, name: 'XR', storage: '128GB', price: '285,000', category: 'xr', specs: '' },
    { id: 5, name: '11', storage: '64GB', price: '309,000', category: '11', specs: '' },
    { id: 6, name: '11 Pro', storage: '64GB', price: '352,000', category: '11', specs: '' },
    { id: 7, name: '11 Pro Max', storage: '64GB', price: '382,000', category: '11', specs: '' },
    { id: 8, name: '11 Pro Max', storage: '256GB', price: '414,000', category: '11', specs: '' },
    { id: 9, name: '11 Pro Max', storage: '512GB', price: '492,000', category: '11', specs: '' },
    { id: 10, name: '12', storage: '64GB', price: '346,000', category: '12', specs: '' },
    { id: 11, name: '12', storage: '128GB', price: '410,000', category: '12', specs: '' },
    { id: 12, name: '12 Pro', storage: '128GB', price: '483,000', category: '12', specs: '' },
    { id: 13, name: '12 Pro', storage: '256GB', price: '520,000', category: '12', specs: '' },
    { id: 14, name: '12 Pro Max', storage: '128GB', price: '550,000', category: '12', specs: '' },
    { id: 15, name: '13', storage: '128GB', price: '482,000', category: '13', specs: '' },
    { id: 16, name: '13', storage: '256GB', price: '523,000', category: '13', specs: '' },
    { id: 17, name: '13', storage: '512GB', price: '595,000', category: '13', specs: '' },
    { id: 18, name: '14', storage: '128GB', price: '612,000', category: '14', specs: 'Phys+eSIM' },
    { id: 19, name: '14 Plus', storage: '128GB', price: '679,000', category: '14', specs: 'Phys+eSIM' },
    { id: 20, name: '14 Plus', storage: '256GB', price: '709,000', category: '14', specs: 'Phys+eSIM' },
    { id: 21, name: '14 Plus', storage: '512GB', price: '751,000', category: '14', specs: 'Phys+eSIM' },
    { id: 22, name: '14 Pro', storage: '128GB', price: '842,000', category: '14', specs: 'Phys+eSIM' },
    { id: 23, name: '14 Pro', storage: '128GB', price: '695,000', category: '14', specs: 'ESIMFU' },
    { id: 24, name: '14 Pro', storage: '256GB', price: '775,000', category: '14', specs: 'ESIMFU' },
    { id: 25, name: '14 Pro', storage: '256GB', price: '855,000', category: '14', specs: 'Phys+eSIM' },
    { id: 26, name: '14 Pro', storage: '512GB', price: '895,000', category: '14', specs: 'Phys+eSIM' },
    { id: 27, name: '14 Pro Max', storage: '128GB', price: '860,000', category: '14', specs: 'ESIMFU' },
    { id: 28, name: '14 Pro Max', storage: '128GB', price: '890,000', category: '14', specs: 'Phys+eSIM' },
    { id: 29, name: '15', storage: '128GB', price: '813,000', category: '15', specs: 'Phys+eSIM' },
    { id: 30, name: '15', storage: '256GB', price: '854,000', category: '15', specs: 'Phys+eSIM' },
    { id: 31, name: '15 Plus', storage: '128GB', price: '874,000', category: '15', specs: 'Phys+eSIM' },
    { id: 32, name: '15 Plus', storage: '256GB', price: '914,000', category: '15', specs: 'Phys+eSIM' },
    { id: 33, name: '15 Pro', storage: '128GB', price: '936,000', category: '15', specs: 'Phys+eSIM' },
    { id: 34, name: '15 Pro', storage: '256GB', price: '980,000', category: '15', specs: 'Phys+eSIM' },
    { id: 35, name: '15 Pro Max', storage: '256GB', price: '1,090,000', category: '15', specs: 'ESIMFU' },
    { id: 36, name: '15 Pro Max', storage: '256GB', price: '1,190,000', category: '15', specs: 'Phys+eSIM' },
    { id: 37, name: '16e', storage: '128GB', price: '750,000', category: '16', specs: 'Phys+eSIM' },
    { id: 38, name: '16e', storage: '256GB', price: '790,000', category: '16', specs: 'Phys+eSIM' },
    { id: 39, name: '16', storage: '128GB', price: '924,000', category: '16', specs: 'Phys+eSIM' },
    { id: 40, name: '16 Plus', storage: '128GB', price: '1,000,000', category: '16', specs: 'Phys+eSIM' },
    { id: 41, name: '16', storage: '128GB', price: '1,100,000', category: '16', specs: 'Brand New P-SIM' },
    { id: 42, name: '16 Plus', storage: '128GB', price: '1,800,000', category: '16', specs: 'Brand New P-SIM' },
    { id: 43, name: '17 Air', storage: '256GB', price: '1,430,000', category: '17', specs: 'ESIMFU' },
    { id: 44, name: '17 Pro', storage: '256GB', price: '1,900,000', category: '17', specs: 'Brand New P-SIM' },
    { id: 45, name: '17 Pro', storage: '512GB', price: '2,170,000', category: '17', specs: 'Brand New P-SIM' },
    { id: 46, name: '17 Pro Max', storage: '256GB', price: '2,000,000', category: '17', specs: 'Brand New eSIM Orange' },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Animated Welcome Banner */}
        <div className="mb-12 overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-2xl py-6 shadow-2xl">
          <div className="flex animate-smooth-scroll">
            <div className="flex-shrink-0 flex items-center gap-8 px-8">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">🛍️ WELCOME TO FEETALTHEPLUG</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">✨ PREMIUM iPHONES</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">💰 BEST PRICES IN NIGERIA</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">🚀 FAST DELIVERY</span>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center gap-8 px-8">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">🛍️ WELCOME TO FEETALTHEPLUG</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">✨ PREMIUM iPHONES</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">💰 BEST PRICES IN NIGERIA</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30">
                <span className="text-3xl md:text-4xl font-black text-white">🚀 FAST DELIVERY</span>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          iPhone Collection
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'xs', 'xr', '11', '12', '13', '14', '15', '16', '17'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat === 'all' ? 'All Models' : `iPhone ${cat.toUpperCase()}`}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative">
                <img 
                  src={getProductImage(product.name)} 
                  alt={`iPhone ${product.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">iPhone {product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.storage}</p>
                {product.specs && <p className="text-purple-300 text-xs mb-2">🇺🇸 {product.specs}</p>}
                <p className="text-2xl font-bold text-purple-400 mb-3">₦{product.price}</p>
                <a 
                  href={`https://wa.me/2349082080638?text=Hi, I'm interested in iPhone ${product.name} ${product.storage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">📞 Orders & Enquiries</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07025119321" className="text-purple-400 hover:text-purple-300">📲 07025119321</a>
            <a href="tel:09082080638" className="text-purple-400 hover:text-purple-300">📲 09082080638</a>
          </div>
          <p className="text-gray-400 mt-4">📍 12, Oremeji Street, Ikeja (Computer Village)</p>
          <p className="text-gray-400 mt-2">🚚 Nationwide Delivery Available</p>
        </div>
      </div>
    </div>
  )
}

export default Shop
