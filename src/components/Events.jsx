import React from 'react';
import { useLocation } from 'react-router-dom';

const Events = () => {
  const location = useLocation();
  const event = location.state;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="mt-4">{event.description}</p>
    </div>
  );
};

export default Events;
