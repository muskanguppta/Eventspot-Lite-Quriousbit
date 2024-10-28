import React from 'react';
import EventCard from './EventCard';
import './EventList.css';

const events = [
  {
    id: 1,
    name: 'Summer Fest',
    date: '2024-10-29',
    location: 'New York City, NY',
    image: 'https://th.bing.com/th/id/OIP.DMIOUv6w0Pv7ThHpx5RM8gHaD4?rs=1&pid=ImgDetMain',
    description: 'Join us for the biggest summer festival with live music, food, and fun activities for all ages!',
  },
  {
    id: 2,
    name: 'Art & Wine Festival',
    date: '2024-11-05',
    location: 'San Francisco, CA',
    image: 'https://th.bing.com/th/id/OIP.G2YbrcPnkR9x_LQsG46FoQHaE2?w=550&h=360&rs=1&pid=ImgDetMain',
    description: 'Experience a unique blend of local art and wine from California’s top vineyards.',
  },
  {
    id: 3,
    name: 'Tech Conference 2024',
    date: '2024-12-01',
    location: 'Austin, TX',
    image: 'https://th.bing.com/th/id/OIP.Mho-1M3FOAv78teRrUczjwHaEK?rs=1&pid=ImgDetMain',
    description: 'The annual tech conference where industry leaders showcase new innovations.',
  },
  {
    id: 4,
    name: 'Fitness Expo 2024',
    date: '2024-12-10',
    location: 'Los Angeles, CA',
    image: 'https://th.bing.com/th/id/OIP.OJBTpmgpa042-s4F4W3s_wHaDt?rs=1&pid=ImgDetMain',
    description: 'Meet top fitness professionals, learn the latest workout trends, and try new fitness gear.',
  },
  {
    id: 5,
    name: 'Christmas Market',
    date: '2024-12-25',
    location: 'Chicago, IL',
    image: 'https://th.bing.com/th/id/OIP.-gtsoS-EPTLPRmkaMIoAWQHaE8?rs=1&pid=ImgDetMain',
    description: 'Celebrate the holiday season with local crafts, food, and entertainment at the Christmas Market.',
  },
];

const EventList = ({ onEventClick }) => {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => onEventClick(event)} />
        ))
      ) : (
        <p className="no-events">No events available.</p>
      )}
    </div>
  );
};

export default EventList;
