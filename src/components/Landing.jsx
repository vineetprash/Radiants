import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader } from './ui/Card';

const events = [
  {
    id: 1,
    title: 'Event 1',
    description: 'Description for Event 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Event 2',
    description: 'Description for Event 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Event 3',
    description: 'Description for Event 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Event 4',
    description: 'Description for Event 4',
    image: 'https://via.placeholder.com/150',
  },
];

const Landing = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center p-4 bg-gray-100">
        <h1 className="font-inter text-3xl font-bold text-[#383838] mb-4">Events in PCCoE</h1>
        <Input
          type="text"
          placeholder="Search"
          className="font-inter rounded-2xl border-2 border-gray-300 p-2 w-64 mb-6"
        />
      </main>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {events.map((event) => (
          <Card key={event.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={event.image}
              alt={event.title}
              className="rounded-t-xl w-full h-40 object-cover"
            />
            <CardHeader className="font-bold text-lg">{event.title}</CardHeader>
            <CardContent className="text-gray-700">{event.description}</CardContent>
            <CardDescription className="flex justify-center">
              <div className='px-3 py-3'>
                <Button className="font-inter text-lg font-semibold shadow text-black">
                  <Link to={`/event/${event.id}`} className="text-black">
                    Explore More
                  </Link>
                </Button>
              </div>
            </CardDescription>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Landing;
