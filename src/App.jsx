import React from "react";
import { Routes, Route } from "react-router-dom";

// Sahifalar
import DoctorPage from "./pages/Doctor";

import StaticDoctor from "./pages/Staticdoctor";
import DoctorDashboard from "./pages/DoctorDashboard";

// Komponent
import Sidebar from "./components/Header";

const App = () => {
  return (
<div>
      <Sidebar />
      <div className="flex min-h-screen">


      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<DoctorDashboard />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/staticdoctor" element={<StaticDoctor />} />
        </Routes>
      </main>
    </div>
</div>
  );
};

export default App;
