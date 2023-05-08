import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateTrip from "./pages/CreateTrip"
import Trip from "./pages/Trip"
import { Navigate } from 'react-router-dom'

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const protectedElement = (component:any) => {
    if (!isLoggedIn) return <Navigate to="/login" replace />;
    return component;
  };

	const loginRoute = (component:any) => {
		if (isLoggedIn) return <Navigate to="/" replace />;
		return component;
	};

  return(
    <Routes>
      <Route path="/" element={protectedElement(<Home />)} />
      <Route path="login" element={loginRoute(<Login />)} />
      <Route path="createTrip" element={protectedElement(<CreateTrip />)} />
      <Route path="trip/:tripId" element={protectedElement(<Trip />)} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes> 
  )
}

export default function WrappedApp(){
  return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<App />
		</React.Suspense>
	);
}