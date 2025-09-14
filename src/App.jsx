import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import Notification from './components/Notification';
import DoctorProfile from './components/DoctorProfile';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointment-form" element={<AppointmentForm />} />
        <Route path="/appointment-list" element={<AppointmentList />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
};

export default App;