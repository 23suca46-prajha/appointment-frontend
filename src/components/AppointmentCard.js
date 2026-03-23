import React from 'react';
import './AppointmentCard.css';

function AppointmentCard({ appointment, onDelete }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      onDelete(appointment.id);
    }
  };

  return (
    <div className="appointment-card">
      <div className="card-header">
        <h3>{appointment.doctorName}</h3>
        <span className="appointment-id">ID: {appointment.id}</span>
      </div>

      <div className="card-content">
        <div className="info-row">
          <span className="info-label">Patient:</span>
          <span className="info-value">{appointment.patientName}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">{appointment.patientEmail}</span>
        </div>

        {appointment.patientPhone && (
          <div className="info-row">
            <span className="info-label">Phone:</span>
            <span className="info-value">{appointment.patientPhone}</span>
          </div>
        )}

        <div className="info-row">
          <span className="info-label">Date:</span>
          <span className="info-value">{formatDate(appointment.appointmentDate)}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Time:</span>
          <span className="info-value">{appointment.appointmentTime}</span>
        </div>

        {appointment.reason && (
          <div className="info-row">
            <span className="info-label">Reason:</span>
            <span className="info-value">{appointment.reason}</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default AppointmentCard;