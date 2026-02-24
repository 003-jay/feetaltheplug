import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcomepage from './Welcomepage'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      {/* Add more routes here */}
    </Routes>
  )
}

export default App
