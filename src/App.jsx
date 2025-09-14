import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Doctror from "./pages/Doctor";
import DoctorDashboard from './pages/DoctorDashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Doctror /> 
    <DoctorDashboard />
    </>
  )
}

export default App
