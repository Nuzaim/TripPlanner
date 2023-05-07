import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import CreateTrip from "./CreateTrip"
import Trip from "./Trip"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="createTrip" element={<CreateTrip />} />
      <Route path="trip/:tripId" element={<Trip />} />
    </Routes> 
  )
}

export default App