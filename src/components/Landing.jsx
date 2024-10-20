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
    image: 'https://via.placeholder.com/150' 
  },
  {
    id: 2,
    title: 'Event 2',
    description: 'Description for Event 2',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Event 3',
    description: 'Description for Event 3',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    title: 'Event 4',
    description: 'Description for Event 4',
    image: 'https://via.placeholder.com/150'
  },
];

const Landing = () => {
  return (
    <>
      <div className="flex flex-col bg-[#e0efff] rounded-b-3xl">
        <div className="flex flex-row px-5 justify-between py-5">
          <div className="text-[#1C4980] font-semibold font-inter text-2xl">IEM PCCoE</div>
          <Button className="font-inter text-lg font-semibold bg-[#0073E6] text-white rounded-3xl py-4 px-4">
            Login
          </Button>
        </div>
        <div className="p-5 md:pt-2 md:items-end md:flex md:justify-end">
          <div>
            <Input type="text" placeholder="Search" className="font-inter rounded-2xl border-black" />
          </div>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center">
        <h1 className="font-inter text-2xl text-[#383838]">Events in PCCoE</h1>
      </main>

      <div className="grid grid-cols-2 gap-4 px-4">
        {events.map((event) => (
          <Card key={event.id} className="mb-4">
            <img src={event.image} alt={event.title} className="rounded-t-xl w-full h-40 object-cover" />
            <CardHeader>{event.title}</CardHeader>
            <CardContent>{event.description}</CardContent>
            <CardDescription>
                <div className='px-3 py-3'>   
              <Button className="font-inter text-lg font-semibold shadow text-black">
                <Link to={`/event/${event.id}`} state={event} className="text-black">
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
