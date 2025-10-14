import React, { useState } from "react";

const CourseFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  // Example course data (you can replace this with API data later)
  const courses = [
    { id: 1, name: "BBA", category: "B.A", duration: "3 Years", university: "Delhi University" },
    { id: 2, name: "MBA - Finance", category: "Management", duration: "2 Years", university: "IIM Ahmedabad" },
    { id: 3, name: "B.A. English Literature", category: "Architecture", duration: "3 Years", university: "JNU" },
    { id: 4, name: "M.Sc Biotechnology", category: "Masters", duration: "2 Years", university: "Pune University" },
    { id: 5, name: "B.Tech Mechanical Engineering", category: "Engineering", duration: "4 Years", university: "IIT Bombay" },
  ];

  // Filtered course list
  const filteredCourses = courses.filter((course) => {
    return (
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? course.category === category : true) &&
      (duration ? course.duration === duration : true)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
         Course Finder
      </h1>

      {/* Search Form */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search by Name */}
          <input
            type="text"
            placeholder="Search by course name..."
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filter by Category */}
          <select
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Science">Management</option>
            <option value="Engineering">Engineering</option>
            <option value="Arts">Masters</option>
            <option value="Management">Management</option>
          </select>

          {/* Filter by Duration */}
          <select
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Any Duration</option>
            <option value="2 Years">2 Years</option>
            <option value="3 Years">3 Years</option>
            <option value="4 Years">4 Years</option>
          </select>
        </div>
      </div>

      {/* Courses List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              <h2 className="text-xl font-bold text-blue-700">{course.name}</h2>
              <p className="text-gray-600">{course.category}</p>
              <p className="text-gray-600">{course.duration}</p>
              <p className="mt-2 text-sm text-gray-500">University: {course.university}</p>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No courses found. Try adjusting your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseFinder;
