import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <img src={event.image} alt={event.name} />
      <div className="event-details">
        <h3>{event.name}</h3>
        <p>{event.date}</p>
        <p><span>{event.location}</span></p>
        <a href="#" className="button">View Details</a>
      </div>
    </div>
  );
};

export default EventCard;
