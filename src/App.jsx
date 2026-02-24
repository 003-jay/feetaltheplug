import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Welcomepage from './Welcomepage'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  if (loading) return <LoadingScreen />

  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      {/* Add more routes here */}
    </Routes>
  )
}

export default App
