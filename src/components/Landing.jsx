import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../utils";

const Landing = () => {
   const [events, setEvents] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");

   const [organizerFilter, setOrganizerFilter] = useState("");
   const [sortOption, setSortOption] = useState("date");
   let timeoutId;
   const organizers = [
      "GDGC",
      "Codechef Chapter",
      "ACM",
      "ACM-W",
      "Owasp",
      "ISTE",
      "ETSA",
      "CRESA",
   ];

   useEffect(() => {
      axios.get(DB_URL + "events?limit=20/").then((data) => {
         setEvents(data.data);
      });
   }, []);

   function handleSearch(e) {
      setSearchQuery(e.target.value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
         axios.get(DB_URL + `events?search=${searchQuery}/`).then((data) => {
            setEvents(data.data);
         });
      }, 500);
   }
   return (
      <>
         <div className="flex flex-col  border-b">
            <div className="flex flex-row px-5 justify-between py-5">
               <div className="text-white font-semibold font-inter text-2xl">
                  IEM PCCoE
               </div>
               <Button className="font-inter text-lg font-semibold bg-accent1 text-white rounded py-4 px-4">
                  Login
               </Button>
            </div>
            <div className="p-5 md:pt-2 md:items-end md:flex md:justify-end">
               <div>
                  <Input
                     type="text"
                     value={searchQuery}
                     placeholder="Search for events or clubs"
                     onInput={(e) => handleSearch(e)}
                     className="font-inter rounded-2xl border-black"
                  />
               </div>
            </div>
         </div>

         <main className="flex flex-col md:flex-row  justify-center items-center">
            <h1 className="font-inter p-4 text-2xl text-[#000000]">
               Events in PCCoE
            </h1>

            <section className="relative right-0 flex gap-3 mx-4 justify-center items-center pt-4">
               {/* Filter by Organizer */}
               <div>
                  <label className="block mb-2 text-lg font-semibold text-stone-600">
                     Filter by Organizer:
                  </label>
                  <select
                     className="p-2 border rounded w-full size-1"
                     value={organizerFilter}
                     onChange={(e) => setOrganizerFilter(e.target.value)}
                  >
                     {organizers.map((org) => (
                        <option key={org} value={org}>
                           {org}
                        </option>
                     ))}
                  </select>
               </div>

               {/* Sort Options */}
               <div className="">
                  <label className="block mb-2 text-lg font-semibold text-stone-600">
                     Sort by:
                  </label>
                  <select
                     className="p-2 border rounded w-full size-1"
                     value={sortOption}
                     onChange={(e) => setSortOption(e.target.value)}
                  >
                     <option value="date">Date</option>
                     <option value="name">Name</option>
                  </select>
               </div>
            </section>
         </main>
         <div className="grid grid-cols-2 gap-4 mx-24 px-4">
            {events.map((event) => (
               <Card key={event.id} className="mb-4">
                  <img
                     src={event.image}
                     alt={event.title}
                     className="rounded-t-xl w-full h-40 object-cover"
                  />
                  <CardHeader>{event.title}</CardHeader>
                  <CardContent>{event.description}</CardContent>
                  <CardDescription>
                     <div className="px-3 py-3">
                        <Button className="font-inter text-lg font-semibold shadow text-black">
                           <Link
                              to={`/event/${event.id}`}
                              state={event}
                              className="text-black"
                           >
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