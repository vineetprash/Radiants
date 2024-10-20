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
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
         <div className="w-fit  p-4 justify-center items-center flex flex-col bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
            <form onSubmit={handleSubmit} className="w-60 flex flex-col gap-3">
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
                  className="w-full px-3 py-2 bg-accent1 text-white rounded-md hover:bg-accent2"
               >
                  Submit
               </button>
            </form>
            <div className="w-60 mt-3 rounded border-blue-300 border bg-blue-200 p-4">
               <p>Contact the admin to receive access</p>
               <p className="font-semibold">admin@pccoepune.org</p>
            </div>
         </div>
      </div>
   );
};

export default AdminKeyPage;
