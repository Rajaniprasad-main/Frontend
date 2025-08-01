// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">The University Hub</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/colleges" className="text-gray-700 hover:text-blue-600">Colleges</Link>
        <Link to="/exams" className="text-gray-700 hover:text-blue-600">Exams</Link>
        <Link to="/scholarships" className="text-gray-700 hover:text-blue-600">Scholarships</Link>
        <Link to="/qa" className="text-gray-700 hover:text-blue-600">Q&A</Link>
        <Link to="/student-register" className="text-blue-600 font-semibold">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
