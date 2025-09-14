// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Profile from "./pages/Profile"; // Profile import qilindi
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
   
      <Routes>
       
        <Route path="/" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> {/* Profile route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
