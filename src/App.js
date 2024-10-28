import logo from './logo.svg';
// App.js
import React, { useState } from 'react';
import StarryBackground from './components/StarryBackground'
import './App.css';
import { events } from './mockData';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    
    <div className="App">
      <StarryBackground />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EventList events={events} openModal={openModal} searchQuery={searchQuery} />
      <EventModal event={selectedEvent} closeModal={closeModal} />
      <Footer/>
    </div>
  );
}

export default App;
