import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Doctor from "./pages/Doctor.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
