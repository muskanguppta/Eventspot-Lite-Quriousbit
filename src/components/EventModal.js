// EventModal.js
import React from 'react';
import './EventModal.css';

const EventModal = ({ event, closeModal }) => {
  if (!event) return null;
  
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content animate__animated animate__fadeIn">
        <button className="close-button" onClick={closeModal}>X</button>
        <img src={event.image} alt={event.name} />
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventModal;
