// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Colleges from './pages/Colleges';
import Exams from './pages/Neet.jsx';
import Scholarships from './pages/Scholarships';
import ContactUs from './components/Contactus';
import Privacy from './components/Privacy';

import CourseRecommender from './pages/CourseRecommender';
import CollegePage from './pages/CollegePage';
import StudentRegister from './pages/StudentRegister';
import UniversityRegister from './pages/UniversityRegister';
import StudentLogin from './pages/university/StudentLogin';
import Courses from './pages/Course';
import Counselling from './pages/Counsell';
import ScholarshipAndLoan from './pages/Loan';
import CourseFinder from './pages/Finder';
import HeaderBar from './pages/university/HeaderBar.jsx';
import MyProfile from './pages/university/MyProfile.jsx';
import MyCourse from './pages/university/MyCourse.jsx';
import Scholar from './pages/university/Scholar.jsx';
import StudyMt from './pages/university/StudyMt.jsx';
import ExamAt  from './pages/university/ExamAt.jsx';
import Setting from './pages/university/Setting.jsx';
import { login } from './service/auth.js';
import Mtech from './components/Mtech';
import NewsFeed from './components/NewsFeed';
import Btech from './components/Btech.jsx';
import SidebarFilter from './pages/university/SideBarFilter.jsx';
import SearchBar from './pages/university/SerachBar.jsx';
import HeroSection from './pages/university/HeroSection.jsx';
import Coaching from './pages/university/Coaching.jsx';
import ScholarshipDetails from './pages/university/ScholarshipDetails.jsx';
import Applynow from './pages/university/Applynow.jsx';
import CareerEdu from './pages/university/CareerEdu.jsx';
import About from './components/Abtnv.jsx';
import ScholarForm from './pages/ScholarForm.jsx';




function AppContent() {
  const location = useLocation();

  // Hide Navbar on MyProfile page
  const hideNavbar = location.pathname === '/pages/university/MyProfile';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (hidden only on MyProfile) */}
      {!hideNavbar && <Navbar />}

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/privacy" element={<Privacy />} />

          <Route path="/recommend" element={<CourseRecommender />} />
          <Route path="/college/:id" element={<CollegePage />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/loan" element={<ScholarshipAndLoan />} />
          <Route path="/Finder" element={<CourseFinder />} />
          <Route path="/university-register" element={<UniversityRegister />} />
          <Route path="/headerbar" element={<HeaderBar />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/mycourse" element={<MyCourse />} />
          <Route path="/scholar" element={<Scholar />} />
          <Route path="/studymt" element={<StudyMt />}/>
          <Route path="/ExamAt" element={<ExamAt />}/>
          <Route path="/setting" element={<Setting />} />
                    <Route path="/mtech" element={<Mtech />} />
                     <Route path="/btech" element={<Btech />} />
                      <Route path="/Neet" element={<Exams />} />
           <Route path="/SidebarFilter" element={<SidebarFilter />} />
           <Route path="/SearchBar" element={<SearchBar />} />
           <Route path="/HeroSection" element={<HeroSection />} />      
           <Route path="/Coaching" element={<Coaching />} />          
           <Route path="/ScholarshipDetails" element={<ScholarshipDetails />} />  
           <Route path="/Applynow" element={<Applynow />} />    
          <Route path="/CareerEdu" element={<CareerEdu />} />
          <Route path="/ScholarForm" element={<ScholarForm/>} />

<Route path="/About" element={<About />} />
          <Route path="/NewsFeed" element={<NewsFeed />} />




          
        
          {/* Optional: 404 Page */}
          <Route
            path="*"
            element={
              <div className="p-6 text-center text-red-600">Page Not Found</div>
            }
          />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
