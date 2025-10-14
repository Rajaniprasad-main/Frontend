import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    aadhaar: "",
    classYear: "",
    course: "",
    institute: "",
    percentage: "",
    exam: "",
    examScore: "",
    familyIncome: "",
    category: "",
    parentOccupation: "",
    scholarshipProgram: "",
    scholarshipType: "",
    declaration: false,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("🎉 Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-white to-purple-50 p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-8 text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-900">
          Apply for Scholarship
        </h1>
        <p className="text-gray-900 text-lg mt-2">
          Fill your details and check eligibility instantly.
        </p>
        <nav className="text-sm text-gray-900 mt-3">
          <Link to="/" className="hover:text-gray-900">Home</Link> &gt;{" "}
          <Link to="/scholarships" className="hover:text-gray-900">Scholarships</Link> &gt;{" "}
          <span className="text-gray-900 font-medium">Apply</span>
        </nav>
      </motion.div>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg border border-gray-900 p-8 rounded-2xl shadow-xl space-y-8"
      >
        {/* Student Information */}
        <motion.section whileHover={{ scale: 1.01 }} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Student Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
              required
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
              required
            />
            <input
              type="text"
              name="aadhaar"
              placeholder="Aadhaar/ID (optional)"
              value={formData.aadhaar}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </motion.section>

        {/* Academic Information */}
        <motion.section whileHover={{ scale: 1.01 }} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Academic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="classYear"
              placeholder="Current Class/Year"
              value={formData.classYear}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="text"
              name="course"
              placeholder="Course Applying For"
              value={formData.course}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="text"
              name="institute"
              placeholder="Institute/College Name"
              value={formData.institute}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="text"
              name="percentage"
              placeholder="Percentage/CGPA"
              value={formData.percentage}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="text"
              name="exam"
              placeholder="Entrance Exam (if any)"
              value={formData.exam}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="text"
              name="examScore"
              placeholder="Exam Score"
              value={formData.examScore}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </motion.section>

        {/* Family & Financial Info */}
        <motion.section whileHover={{ scale: 1.01 }} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Family & Financial Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="familyIncome"
              value={formData.familyIncome}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            >
              <option value="">Select Family Income</option>
              <option>{"<1L"}</option>
              <option>1–3L</option>
              <option>3–5L</option>
              <option>5L+</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            >
              <option value="">Select Category</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
              <option>EWS</option>
              <option>General</option>
              <option>Minority</option>
            </select>
            <input
              type="text"
              name="parentOccupation"
              placeholder="Parent Occupation"
              value={formData.parentOccupation}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg"
              className="border p-3 rounded-xl bg-white focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </motion.section>

        {/* Scholarship Details */}
        <motion.section whileHover={{ scale: 1.01 }} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Scholarship Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="scholarshipProgram"
              value={formData.scholarshipProgram}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            >
              <option value="">Select Scholarship Program</option>
              <option>National Scholarship</option>
              <option>State Scholarship</option>
              <option>Private Scholarship</option>
              <option>Institute-based</option>
            </select>
            <select
              name="scholarshipType"
              value={formData.scholarshipType}
              onChange={handleChange}
              className="border p-3 rounded-xl focus:ring-2 focus:ring-gray-900"
            >
              <option value="">Scholarship Type</option>
              <option>Central Govt</option>
              <option>State Govt</option>
              <option>Private</option>
              <option>Institute-based</option>
            </select>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 mt-2 font-medium"
          >
            ✅ Eligibility Check: You are eligible
          </motion.p>
        </motion.section>

        {/* Document Upload */}
        <motion.section whileHover={{ scale: 1.01 }} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Document Upload</h2>
          <div className="space-y-3">
            {["Academic Certificates", "ID Proof", "Income Proof", "Category Certificate"].map(
              (label, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-600">
                    Upload {label}
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg"
                    className="border p-3 rounded-xl w-full focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              )
            )}
          </div>
        </motion.section>

        {/* Declaration */}
        <motion.section whileHover={{ scale: 1.01 }} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Declaration & Consent</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
              />
              I hereby declare that the above details are true to my knowledge.
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              I agree to share my details with the scholarship provider.
            </label>
          </div>
        </motion.section>

        {/* Submission */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex gap-4 justify-center"
        >
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Apply Now
          </button>
          <button
            type="button"
            className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-500"
          >
            Save & Continue Later
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
}
