// src/pages/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  faUserGraduate,
  faUniversity,
  faGlobe,
  faSearch,
  faCalendarAlt,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const courses = [
  {
    title: "Counselling",
    icon: faUserGraduate,
    color: "bg-blue-500",
    link: "/counselling",
  },
  {
    title: "Scholarship & Education Loan",
    icon: faUniversity,
    color: "bg-green-500",
    link: "/loan",
  },
  {
    title: "Study Abroad",
    icon: faGlobe,
    color: "bg-purple-500",
    link: "/study-abroad",
  },
  {
    title: "Course Finder",
    icon: faSearch,
    color: "bg-orange-500",
    link: "/Finder",
  },
  {
    title: "Upcoming Exam",
    icon: faCalendarAlt,
    color: "bg-pink-500",
    link: "/upcoming-exam",
  },
  {
    title: "News",
    icon: faNewspaper,
    color: "bg-yellow-500",
    link: "/news",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-10">
        My Course: <span className="text-gray-800">B.Sc</span>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <Link
            to={course.link}
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div
              className={`${course.color} w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl mb-4`}
            >
              <FontAwesomeIcon icon={course.icon} />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {course.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
