import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const location = useLocation();
  const [eventId, setEventId] = useState(null);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = "https://inventory-mtia.onrender.com";

  const dummyEventData = {
    title: "Sample Event Title",
    description:
      "This is a sample event description to demonstrate loading state.",
    organizer: {
      full_name: "ACM",
    },
    type: "Workshop",
    start_date: new Date().toISOString(),
    end_date: new Date(new Date().getTime() + 3600 * 1000).toISOString(),
    venue: "Sample Venue",
  };

  useEffect(() => {
    if (location.state && location.state.id) {
      setEventId(location.state.id);
    } else {
      setLoading(false);
    }
  }, [location.state]);

  useEffect(() => {
    if (eventId) {
      const fetchEventData = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/events/${eventId}`);
          setEvent(response.data);
        } catch (error) {
          console.error("Error fetching event data:", error);
          setError("Failed to fetch event data.");
        } finally {
          setLoading(false);
        }
      };

      fetchEventData();
    }
  }, [eventId, API_BASE_URL]);

  useEffect(() => {
    if (loading && !event) {
      setEvent(dummyEventData);
    }
  }, [loading, event]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="mt-4">{event.description}</p>
      <p className="mt-2">
        <strong>Organizer:</strong> {event.organizer?.full_name || "N/A"}
      </p>
      <p className="mt-2">
        <strong>Type:</strong> {event.type || "N/A"}
      </p>
      <p className="mt-2">
        <strong>Start Date:</strong>{" "}
        {new Date(event.start_date).toLocaleString()}
      </p>
      <p className="mt-2">
        <strong>End Date:</strong> {new Date(event.end_date).toLocaleString()}
      </p>
      <p className="mt-2">
        <strong>Venue:</strong> {event.venue || "N/A"}
      </p>
    </div>
  );
};

export default EventDetails;
