import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewEvent from "./components/NewEvent";
import Landing from "./components/Landing";
import EventDetails from "./components/Event";
import AuthPage from "./pages/AuthPage";
import AdminKeyPage from "./pages/AdminKey";
import AdminConsole from "./pages/AdminConsole";
import AuthRequired from "./protectors/AuthRequired";
import HeroSection from "./components/Hero";
import VenueCards from "./components/Venue";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroSection />,
  },
  {
    path: "/events",
    element: <Landing />,
  },
  {
    path: "/venues",
    element: <VenueCards />,
  },
  {
    path: "/event/:id",
    element: <EventDetails />,
  },
  {
    path: "/newevent",
    element: <NewEvent />,
  },
  {
    path: "/permission",
    element: <NewEvent />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/adminkey",
    element: <AdminKeyPage />,
  },
  {
    path: "/console",
    element: (
      <AuthRequired>
        <AdminConsole />,
      </AuthRequired>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
