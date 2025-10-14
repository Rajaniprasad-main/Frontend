import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Font Awesome icon

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end items-center">
        {/* User Icon & Name */}
        <div className="relative flex items-center gap-2" ref={dropdownRef}>
          <span className="font-medium">My Name </span>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-1 rounded-full hover:bg-blue-500 transition"
          >
            <FaUserCircle size={28} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-lg border animate-fadeIn z-50">
              <NavLink
                to="/MyProfile"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </NavLink>
              <NavLink
                to="/MyCourse"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                My Courses
              </NavLink>
              <NavLink
                to="/Scholar"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Scholarships & Loans
              </NavLink>
              <NavLink
                to="/StudyMt"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Study Material & Tools
              </NavLink>
                <NavLink
                to="/Coaching"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Coaching
              </NavLink>
              <NavLink
                to="/ExamAt"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Exam Alerts & Notifications
              </NavLink>
                 <NavLink
                to="/CareerEdu"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
               Career & Education Counseling
              </NavLink>
              <NavLink
                to="/Setting"
                className="block px-4 py-3 hover:bg-gray-100 transition border-b border-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
        `}
      </style>
    </header>
  );
}
