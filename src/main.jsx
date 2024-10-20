
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewEvent from './components/NewEvent'
import Landing from './components/Landing'
import EventDetails from './components/Event'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  
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
