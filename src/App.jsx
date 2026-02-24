import { Routes, Route } from 'react-router-dom'
import Welcomepage from './Welcomepage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      {/* Add more routes here */}
    </Routes>
  )
}

export default App
