import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Doctror from "./pages/Doctor";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Doctror /> 
    </>
  )
}

export default App
