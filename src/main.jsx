
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Permission from './components/Permission'
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
    path:'/permission',
    element: <Permission/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
