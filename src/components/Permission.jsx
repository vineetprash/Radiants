import React, { useState } from 'react';

const Permission = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');
  const [requestHistory, setRequestHistory] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const departmentMap = {
    ASH: 'Applied Sciences and Humanities',
    CS: 'Computer Engineering',
    AIML: 'Computer Science & Engineering (AI and ML)',
    IT: 'Information Technology',
    EE: 'Electrical Engineering',
    ME: 'Mechanical Engineering',
    CE: 'Civil Engineering',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      eventName,
      eventDate,
      department,
      description,
      status: 'pending',
    };
    setRequestHistory((prevHistory) => [...prevHistory, newRequest]);
    setEventName('');
    setEventDate('');
    setDepartment('');
    setDescription('');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">Request Permission for Event</h2>
        <p className="text-gray-600 mb-4">Fill out the form below to submit your event request.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Event Name</label>
              <input
                id="eventName"
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
              <input
                id="eventDate"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Department</option>
              {Object.entries(departmentMap).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Request
          </button>
        </form>
      </div>

      {showAlert && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Success</p>
          <p>Your request has been submitted successfully.</p>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Request History</h2>
        <p className="text-gray-600 mb-4">View your previous event permission requests.</p>
        {requestHistory.length === 0 ? (
          <p className="text-center text-gray-500">No requests submitted yet.</p>
        ) : (
          <div className="space-y-4">
            {requestHistory.map((request, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold">{request.eventName}</h3>
                <p className="text-sm text-gray-500">Status: {request.status}</p>
                <p><strong>Date:</strong> {request.eventDate}</p>
                <p><strong>Department:</strong> {departmentMap[request.department]}</p>
                <p><strong>Description:</strong> {request.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Permission;