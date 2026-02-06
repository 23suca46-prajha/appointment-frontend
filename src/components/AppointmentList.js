import React from 'react';
import AppointmentCard from './AppointmentCard';
import './AppointmentList.css';

function AppointmentList({ appointments, onDelete }) {
  if (appointments.length === 0) {
    return (
      <div className="empty-state">
        <p>No appointments booked yet.</p>
        <p>Start by creating a new appointment!</p>
      </div>
    );
  }

  return (
    <div className="appointment-list">
      {appointments.map(appointment => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default AppointmentList;
