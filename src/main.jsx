import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Permission from "./components/Permission";
import AuthPage from "./pages/AuthPage";
import AdminKeyPage from "./pages/AdminKey";
import AdminConsole from "./pages/AdminConsole";
import AuthRequired from "./protectors/AuthRequired";

const router = createBrowserRouter([
   {
      path: "/",
   },
   {
      path: "/permission",
      element: <Permission />,
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
