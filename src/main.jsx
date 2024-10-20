<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewEvent from './components/NewEvent';
import Landing from './components/Landing';
import EventDetails from './components/Events';
import Layout from './components/Layout'; 
import Events from './components/Events';
import Venue from './components/Venue';
=======

import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewEvent from './components/NewEvent'
import Landing from './components/Landing'
import EventDetails from './components/Event'
>>>>>>> parent of fb103fa (Navbar and other fixes)

const router = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
    element: <Layout />, // Use Layout component for this route
    children: [
      {
        index: true, // This sets it to the default child route for the path "/"
        element: <Landing />,
      },
      {
        path: 'event/:id',
        element: <EventDetails />,
      },
      {
        path: 'newevent',
        element: <NewEvent />,
      },
      {
        path:'events',
        element: <Events/>,
      },
      {
        path:'venues',
        element: <Venue/>,
      }
    ],
=======
    element: <Landing />
  
>>>>>>> parent of fb103fa (Navbar and other fixes)
  },
  {
    path: "/event/:id",
    element: <EventDetails />
  },
  {
    path:'/newevent',
    element: <NewEvent/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
