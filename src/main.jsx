
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Permission from './components/Permission'

const router = createBrowserRouter([
  {
    path: '/',
  
  },
  {
    path:'/permission',
    element: <Permission/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
