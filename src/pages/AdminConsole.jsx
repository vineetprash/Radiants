import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeUser } from "../utils";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminConsole = () => {
   const navigate = useNavigate();
   const [events, setEvents] = useState([]);
   const [venues, setVenues] = useState([]);
   const [resources, setResources] = useState([]);
   const [selectedItem, setSelectedItem] = useState(null);
   const [actionType, setActionType] = useState(null);
   const [reason, setReason] = useState("");

   useEffect(() => {
      const token = localStorage.getItem("jwtToken");
      const { role } = decodeUser(token);

      if (role !== "admin") {
         navigate("/");
      }

      fetchRequestedEvents();
      fetchRequestedVenues();
      fetchEventResources();
   }, [navigate]);

   const fetchRequestedEvents = async () => {
      // Replace with actual API call
      setEvents([
         { id: 1, name: "Event 1", status: "Pending" },
         { id: 2, name: "Event 2", status: "Pending" },
         { id: 3, name: "Event 3", status: "Pending" },
      ]);
   };

   const fetchRequestedVenues = async () => {
      // Replace with actual API call
      setVenues([
         { id: 1, name: "Venue A", status: "Pending" },
         { id: 2, name: "Venue B", status: "Pending" },
         { id: 3, name: "Venue C", status: "Pending" },
      ]);
   };

   const fetchEventResources = async () => {
      // Replace with actual API call
      setResources([
         { name: "Flex posters", count: 10 },
         { name: "Chairs", count: 20 },
         { name: "Tables", count: 20 },
         { name: "VR Headsets", count: 5 },
      ]);
   };

   const handleAction = (item, type) => {
      setSelectedItem(item);
      setActionType(type);
   };

   const submitAction = () => {
      // Send approval/rejection with reason to backend here
      console.log(`${actionType} ${selectedItem.name} with reason: ${reason}`);
      setSelectedItem(null);
      setReason("");
   };

   // Prepare data for the pie chart
   const pieData = {
      labels: resources.map((resource) => resource.name),
      datasets: [
         {
            label: "# of Available Resources",
            data: resources.map((resource) => resource.count),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#44CE33"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#44CE33"],
         },
      ],
   };

   return (
      <div className="p-8 bg-gray-100 min-h-screen">
         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

         {/* Requested Events */}
         <div className="mb-8 overflow-x-scroll">
            <h2 className="text-xl font-semibold mb-4">Requested Events</h2>
            <div className="flex gap-4 w-full ">
               {events.map((event) => (
                  <div
                     key={event.id}
                     className="bg-white min-w-[250px] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow my-3"
                  >
                     <h3 className="text-lg font-bold">{event.name}</h3>
                     <p>Status: {event.status}</p>
                     <div className="mt-4 flex justify-between">
                        <button
                           className="bg-accent1 text-white px-4 py-2 rounded hover:bg-accent2"
                           onClick={() => handleAction(event, "Approve")}
                        >
                           Approve
                        </button>
                        <button
                           className="bg-danger1 text-white px-4 py-2 rounded hover:bg-danger2"
                           onClick={() => handleAction(event, "Reject")}
                        >
                           Reject
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Requested Venues */}
         <div className="mb-8 overflow-x-scroll">
            <h2 className="text-xl font-semibold mb-4">Requested Venues</h2>
            <div className="flex gap-4 w-full ">
               {venues.map((venue) => (
                  <div
                     key={venue.id}
                     className="bg-white min-w-[250px] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow my-3"
                  >
                     <h3 className="text-lg font-bold">{venue.name}</h3>
                     <p>Status: {venue.status}</p>
                     <div className="mt-4 flex justify-between">
                        <button
                           className="bg-accent1 text-white px-4 py-2 rounded hover:bg-accent2"
                           onClick={() => handleAction(venue, "Approve")}
                        >
                           Approve
                        </button>
                        <button
                           className="bg-danger1 text-white px-4 py-2 rounded hover:bg-danger2"
                           onClick={() => handleAction(venue, "Reject")}
                        >
                           Reject
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Available Resources with Pie Chart */}
         <div className="mb-8 overflow-x-scroll">
            <h2 className="text-xl font-semibold">Available Event Resources</h2>
            <div className="w-full md:w-1/2">
               <Pie data={pieData} />
            </div>
         </div>

         {/* Modal for Approve/Reject */}
         {selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
               <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                  <h3 className="text-xl font-bold mb-4">
                     {actionType} {selectedItem.name}
                  </h3>
                  <textarea
                     value={reason}
                     onChange={(e) => setReason(e.target.value)}
                     className="w-full border rounded-md p-2 mb-4"
                     placeholder="Enter reason for this action"
                  />
                  <div className="flex justify-end space-x-4">
                     <button
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => setSelectedItem(null)}
                     >
                        Cancel
                     </button>
                     <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={submitAction}
                     >
                        Submit
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default AdminConsole;
