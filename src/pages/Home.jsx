// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to The University Hub</h1>
      <p className="text-gray-600 text-lg mb-8">Find colleges, scholarships, and prepare for your future—all in one place.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/colleges" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Explore Colleges</Link>
        <Link to="/exams" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition">View Exams</Link>
        <Link to="/student-register" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Register as Student</Link>
      </div>
    </div>
  );
};

export default Home;
