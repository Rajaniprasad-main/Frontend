// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUniversity,
  faBookOpen,
  faGraduationCap,
  faQuestionCircle,
  faUser,
  faChalkboardTeacher, // Added for Courses
} from '@fortawesome/free-solid-svg-icons';

const activeClass =
  'text-[#3656E5] border-b-2 border-[#3656E5] font-semibold';
const inactiveClass =
  'text-gray-800 hover:text-[#3656E5]';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-sm py-4  flex justify-between items-center sticky top-0 z-50 w-full ">
      <h1 className="text-2xl font-extrabold text-gray-700 tracking-tight ml-6">
        🎓 University Hub
      </h1>

      <div className="flex gap-6 text-sm items-center relative mr-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>

        <NavLink
          to="/colleges"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faUniversity} /> Colleges
        </NavLink>

           <NavLink
          to="/Privacy"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faUniversity} /> Privacy
        </NavLink>

        <NavLink
          to="/university-register"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faUniversity} /> University Register
        </NavLink>

        <NavLink
          to="/ExamAt"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faBookOpen} /> Exams
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faChalkboardTeacher} /> Courses
        </NavLink>
          <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faChalkboardTeacher} /> About
        </NavLink>

        <NavLink
          to="/Scholarform"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faGraduationCap} /> ScholarshipForm
        </NavLink>
          <NavLink
          to="/NewsFeed"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faGraduationCap} /> News&Feeds
        </NavLink>

        <NavLink
          to="/Contactus"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> Contact Us
        </NavLink>

        {/* User Icon Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
              <NavLink
                to="/Student-login"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
                onClick={() => setShowMenu(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/Student-register"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
                onClick={() => setShowMenu(false)}
              >
                Signup
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
