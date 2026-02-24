import React from 'react'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 mb-2">
          Feetaltheplug
        </h2>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
