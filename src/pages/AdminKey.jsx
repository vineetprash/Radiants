import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminKeyPage = () => {
   const [adminKey, setAdminKey] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const correctKey = "your-admin-key";
      if (adminKey === correctKey) {
         navigate("/console");
      } else {
         setError("Incorrect Admin Key!");
      }
   };

   return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
         <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
               <input
                  type="password"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent2"
                  placeholder="Enter Admin Key"
               />
               {error && <p className="text-red-500 text-sm">{error}</p>}
               <button
                  type="submit"
                  className="w-full px-4 py-2 bg-accent1 text-white rounded-md hover:bg-accent2"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default AdminKeyPage;
