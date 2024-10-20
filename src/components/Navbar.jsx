import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="http://www.pccoepune.com/images/pccoe-logo-new.webp" alt="Logo" className="h-12 mr-2" /> 
          <h1 className="text-xl font-bold">IEM</h1>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-400">User Dashboard</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400">Events</Link>
          </li>
          <li>
            <Link to="/venues" className="hover:text-gray-400">Venues</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          </li>
          <li>
            <Link to="/logout" className="hover:text-gray-400">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
