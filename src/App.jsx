import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import Exams from './pages/Exams';
import Scholarships from './pages/Scholarships';
import QAPage from './pages/QAPage';
import StudentRegister from './pages/StudentRegister';
import UniversityRegister from './pages/UniversityRegister';
import CourseRecommender from './pages/CourseRecommender';
import CollegePage from './pages/CollegePage';
import RegistrationPage from './pages/university/RegistrationPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/qa" element={<QAPage />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/university-register" element={<UniversityRegister />} />
        <Route path="/course-recommender" element={<CourseRecommender />} />
        <Route path="/college/:id" element={<CollegePage />} />
        <Route path="/university/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
