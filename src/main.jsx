// src/main.jsx yoki index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Doctor from "./pages/Doctor";
import DoctorDashboard from "./pages/DoctorDashboard";
import StaticDoctor from "./pages/Staticdoctor";

// Routerni yaratish
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Navbar + umumiy layout
    children: [
      { path: "/", element: <DoctorDashboard /> },
      { path: "/doctor", element: <Doctor /> },
      { path: "/staticdoctor", element: <StaticDoctor /> },
    ],
  },
]);

// Root render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
