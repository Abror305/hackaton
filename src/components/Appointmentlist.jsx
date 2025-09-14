import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Список записей на прием</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Пациент: {appointment.patientName}</p>
            <p>Время: {appointment.time}</p>
            <p>Проблема: {appointment.issue}</p>
            <p>Комментарии: {appointment.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;