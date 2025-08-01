// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUniversity,
  faBookOpen,
  faGraduationCap,
  faQuestionCircle,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const activeClass =
  'text-[#3656E5] border-b-2 border-[#3656E5] font-semibold';

const inactiveClass =
  'text-gray-700 hover:text-[#3656E5]';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-extrabold text-blue-700 tracking-tight">
        🎓 University Hub
      </h1>
      <div className="flex gap-6 text-sm items-center">
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
          to="/university-register"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faUniversity} /> University Register
        </NavLink>
        <NavLink
          to="/exams"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faBookOpen} /> Exams
        </NavLink>
        <NavLink
          to="/scholarships"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faGraduationCap} /> Scholarships
        </NavLink>
        <NavLink
          to="/qa"
          className={({ isActive }) =>
            `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> Q&A
        </NavLink>
        <NavLink
          to="/student-register"
          className={({ isActive }) =>
            `flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium ${
              isActive
                ? 'bg-[#3656E5] text-white border-b-2 border-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`
          }
        >
          <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
