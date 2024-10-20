import { useNavigate } from "react-router-dom";

import adminImage from "../assets/admin.jpg";
import ongoingImage from "../assets/ongoing.png";
import upcomingImage from "../assets/upcoming.png";

const HeroSection = () => {
   const navigate = useNavigate();
   return (
      <div className="bg-light min-h-screen">
         {/* Navbar */}
         {/* <Navbar /> */}

         {/* Hero Section */}
         <section className="flex justify-center items-center py-16 min-h-[80vh]">
            <div className="text-center px-4 max-w-2xl">
               <h1 className="text-5xl font-bold text-gray-800 mb-4">
                  Welcome to PCCoE Events Console
               </h1>
               <p className="text-xl text-gray-600 mb-6">
                  Explore all events occuring in the campus in one place
               </p>
               <p className="text-lg text-gray-500 mb-8">
                  Seamless Management, Simplified
               </p>
               <div>
                  <button
                     onClick={() => {
                        navigate("/auth?new=true");
                     }}
                     className="bg-accent1 text-white font-normal py-3 px-6 rounded-lg mr-4 hover:font-semibold transition"
                  >
                     Sign Up
                  </button>
                  <button
                     onClick={() => {
                        navigate("/auth");
                     }}
                     className="border border-accent1 text-accent1 font-light py-3 px-6 rounded-lg hover:font-medium transition duration-300"
                  >
                     Login
                  </button>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="bg-accent1 text-white py-24 min-h-[40vh]">
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
               <div className="grid md:grid-cols-4 gap-8 text-center">
                  {[
                     {
                        title: "Ongoing Events",
                        link: "/events?status=ongoing",

                        img: ongoingImage,
                     },
                     {
                        title: "Upcoming events",
                        link: "/events",
                        img: upcomingImage,
                     },
                     {
                        title: "Register new event",
                        link: "/newevent",

                        img: ongoingImage,
                     },
                     {
                        title: "Admin Console",
                        link: "/adminkey",
                        img: adminImage,
                     },
                  ].map((feature, index) => (
                     <div
                        key={index}
                        className="bg-white cursor-pointer text-gray-800 p-6 rounded-lg shadow-lg hover:bg-slate-400"
                        onClick={() => {
                           navigate(feature.link);
                        }}
                     >
                        <p className="mb-6 font-bold text-xl">
                           {feature.title}
                        </p>
                        <img
                           src={feature.img}
                           alt={feature.title}
                           className="mx-auto overflow-clip aspect-square object-cover h-52 w-full"
                        />
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Some Section */}
         <section className="bg-light py-12 h-[500px]"></section>

         {/* Footer */}
         <footer className="bg-accent text-white text-center py-6">
            <p className="mb-2">admin@pccoepune.org</p>
            <p>Pimpri Chinchwad College of Engineering</p>
         </footer>
      </div>
   );
};

export default HeroSection;
