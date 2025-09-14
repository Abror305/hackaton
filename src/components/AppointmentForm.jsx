import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [issue, setIssue] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      patientName,
      appointmentDate,
      issue,
      comments,
    };
    onSubmit(appointmentData);
    resetForm();
  };

  const resetForm = () => {
    setPatientName('');
    setAppointmentDate('');
    setIssue('');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Appointment Date:</label>
        <input
          type="datetime-local"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Issue:</label>
        <input
          type="text"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;