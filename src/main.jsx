import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Doctor from "./pages/Doctor";
import DoctorDashboard from "./pages/DoctorDashboard";
import StaticDoctor from "./pages/Staticdoctor";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DoctorDashboard /> },
      { path: "/doctor", element: <Doctor /> },
      { path: "/staticdoctor", element: <StaticDoctor /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
