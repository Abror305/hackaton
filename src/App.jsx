import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Doctors from "./pages/Doctors";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Doctors /> 
    </>
  )
}

export default App
