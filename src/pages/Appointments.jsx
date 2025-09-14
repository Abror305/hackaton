import React, { useEffect, useState } from 'react';
import AppointmentList from '../components/AppointmentList';
import { getAppointments } from '../services/api.js';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const data = await fetchAppointments();
      setAppointments(data);
    };

    getAppointments();
  }, []);

  return (
    <div>
      <h1>Предстоящие записи</h1>
      <AppointmentList appointments={appointments} />
    </div>
  );
};

export default Appointments;