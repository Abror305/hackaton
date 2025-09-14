import React from 'react';
import AppointmentList from '../components/AppointmentList';
import DoctorProfile from '../components/DoctorProfile';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DoctorProfile />
      <AppointmentList />
    </div>
  );
}

export default Dashboard;