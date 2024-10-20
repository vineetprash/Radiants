import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const NewEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    organizer: "",
    department: "",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    startTime: "09:00",
    endTime: "17:00",
    venue: "",
  });

  const [events, setEvents] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const API_BASE_URL = "https://inventory-mtia.onrender.com";

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      title: formData.eventName,
      description: formData.description,
      start_date: new Date(
        `${formData.startDate}T${formData.startTime}:00Z`
      ).toISOString(),
      end_date: new Date(
        `${formData.endDate}T${formData.endTime}:00Z`
      ).toISOString(),
      type: "General",
      logo: "",
      expected_attendance: formData.expectedAttendance,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/events/`, newEvent);
      console.log("Event created:", response.data);

      setEvents((prev) => [
        ...prev,
        { ...newEvent, status: "pending", id: Date.now() },
      ]);
      setSnackbarMessage("Event request submitted successfully.");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      // Reset form
      setFormData({
        eventName: "",
        description: "",
        organizer: "",
        department: "",
        startDate: "",
        endDate: "",
        startTime: "09:00",
        endTime: "17:00",
        venue: "",
        expectedAttendance: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
      setSnackbarMessage("Failed to submit event request.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Navbar />
      <div className="border-b border-gray-300 mb-6">
        <nav className="flex space-x-4">
          <button
            className={`text-lg font-medium py-2 px-4 ${
              tabValue === 0
                ? "border-b-2 border-accent2 text-accent1"
                : "text-gray-600"
            }`}
            onClick={() => setTabValue(0)}
          >
            Create Event
          </button>
          <button
            className={`text-lg font-medium py-2 px-4 ${
              tabValue === 1
                ? "border-b-2 border-accent2 text-accent1"
                : "text-gray-600"
            }`}
            onClick={() => setTabValue(1)}
          >
            View Events
          </button>
        </nav>
      </div>

      {tabValue === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
          <p className="text-gray-500 mb-8">
            Fill in the details to request a new event booking
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Existing fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Name
                </label>
                <input
                  type="text"
                  value={formData.eventName}
                  onChange={(e) =>
                    handleInputChange("eventName", e.target.value)
                  }
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent2 focus:ring-accent2 p-2"
                  placeholder="Enter event name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={3}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent2 focus:ring-accent2 p-2"
                  placeholder="Enter event description"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Attendance
                </label>
                <input
                  type="number"
                  value={formData.expectedAttendance}
                  onChange={(e) =>
                    handleInputChange("expectedAttendance", e.target.value)
                  }
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent2 focus:ring-accent2 p-2"
                  placeholder="Enter expected number of attendees"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      handleInputChange("startDate", e.target.value)
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent2 focus:ring-accent2 p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      handleInputChange("endDate", e.target.value)
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-accent2 focus:ring-accent2 p-2"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-fit py-3 px-4 bg-accent1 text-white font-semibold rounded-lg hover:bg-[#28576c] focus:outline-none focus:ring-2 focus:ring-accent2"
              >
                Submit Event Request
              </button>
            </div>
          </form>
        </div>
      )}

      {tabValue === 1 && (
        <div className="mt-8">
          {events.length === 0 ? (
            <p className="text-center text-gray-500">
              No events submitted yet.
            </p>
          ) : (
            events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {event.status}
                </span>
                <p className="text-sm text-gray-500 mt-2">
                  Date: {new Date(event.start_date).toLocaleDateString()} to{" "}
                  {new Date(event.end_date).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      )}

      {openSnackbar && (
        <div
          className={`fixed bottom-4 right-4 bg-${
            snackbarSeverity === "success" ? "green" : "red"
          }-600 text-white px-4 py-3 rounded shadow-lg`}
        >
          <p>{snackbarMessage}</p>
        </div>
      )}
    </div>
  );
};

export default NewEvent;
