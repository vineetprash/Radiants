import { useEffect, useState } from "react";
import Navbar from "./Navbar";

// Dummy data
const dummyVenues = [
  {
    name: "Main Auditorium",
    venue_type: "Auditorium",
    capacity: 300,
    location: "Building 5, 6th Floor",
  },
  {
    name: "Conference Room",
    venue_type: "Room",
    capacity: 50,
    location: "Building B, Ground Floor",
  },
  {
    name: "Outdoor Field",
    venue_type: "Open Space",
    capacity: 500,
    location: "Near the Sports Complex",
  },
  {
    name: "Lab 101",
    venue_type: "Laboratory",
    capacity: 30,
    location: "Building C, 2nd Floor",
  },
];

const VenueCards = () => {
  const [venues, setVenues] = useState(dummyVenues); // Initialize with dummy data
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("https://inventory-mtia.onrender.com/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log("response OK", data);

        if (Array.isArray(data)) {
          setVenues(data);
        } else {
          throw new Error("Received data is not an array");
        }
      } catch {
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  if (loading) {
    return <div>Loading venues...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="venue-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {venues.map((venue, index) => (
          <div key={index} className="card bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{venue.name}</h2>
            <p className="text-gray-700">Type: {venue.venue_type}</p>
            <p className="text-gray-700">Capacity: {venue.capacity}</p>
            <p className="text-gray-700">Location: {venue.location}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default VenueCards;
