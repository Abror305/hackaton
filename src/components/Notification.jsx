import React from 'react';

const Notification = ({ patientName, appointmentTime, issue, comments }) => {
  return (
    <div className="notification">
      <h3>New Appointment Scheduled</h3>
      <p><strong>Patient:</strong> {patientName}</p>
      <p><strong>Time:</strong> {appointmentTime}</p>
      <p><strong>Issue:</strong> {issue}</p>
      <p><strong>Comments:</strong> {comments}</p>
    </div>
  );
};

export default Notification;