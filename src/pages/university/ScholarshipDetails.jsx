// ScholarshipDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Example mock scholarship data (replace with API)
const SCHOLARSHIPS = {
  1: {
    name: "National Merit Scholarship",
    provider: "Central Govt",
    eligibility: "You match 4/5 requirements ✅",
    benefits: "₹50,000 / year, renewal based on performance",
    documents: ["Aadhar Card", "Caste Certificate", "Income Proof", "Marksheet"],
    steps: [
      "Register on the official portal",
      "Upload documents & fill details",
      "Submit and track application",
    ],
    deadline: "15 Sept 2025",
    renewal: "Yearly renewal based on marks > 60%",
  },
  2: {
    name: "State Post-Matric Scholarship",
    provider: "State Govt",
    eligibility: "You match 3/5 requirements ⚠️",
    benefits: "₹35,000 / year",
    documents: ["Domicile Certificate", "Income Proof", "Previous Marksheet"],
    steps: [
      "Sign up on state portal",
      "Upload mandatory documents",
      "Submit for verification",
    ],
    deadline: "25 Oct 2025",
    renewal: "Yearly renewal based on attendance & marks",
  },
};

export default function ScholarshipDetails() {
  const { id } = useParams();
  const scholarship = SCHOLARSHIPS[id];

  if (!scholarship) {
    return <div className="p-10 text-center text-gray-600">Scholarship not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 shadow-lg">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold">{scholarship.name}</h1>
          <p className="mt-2 text-lg">Provider: {scholarship.provider}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {/* Eligibility */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Eligibility</h2>
          <p className="text-indigo-600 font-medium">{scholarship.eligibility}</p>
        </motion.div>

        {/* Benefits & Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Benefits & Rewards</h2>
          <p className="text-gray-600">{scholarship.benefits}</p>
        </motion.div>

        {/* Documents Required */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Documents Required</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {scholarship.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Application Process</h2>
          <div className="space-y-3">
            {scholarship.steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-lg border bg-gray-50 flex items-center gap-3"
              >
                <span className="font-bold text-indigo-600">Step {idx + 1}:</span>
                <span>{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deadline & Renewal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Deadline & Renewal</h2>
          <p className="text-gray-600">Deadline: <b>{scholarship.deadline}</b></p>
          <p className="text-gray-600 mt-1">Renewal Info: {scholarship.renewal}</p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition font-medium">
            Save for Later
          </button>
          <button className="flex-1 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition font-medium">
            Set Reminder
          </button>
          <button className="flex-1 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition font-semibold">
            Apply Now
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-10 mt-10 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">📈 Trending Scholarships</h3>
            <ul className="text-gray-600 space-y-1">
              <li>AICTE Pragati Scholarship</li>
              <li>INSPIRE Fellowship</li>
              <li>National Overseas Scholarship</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">🆕 Newly Added</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Minority Merit Scholarship</li>
              <li>Digital India Scholarship</li>
              <li>Women in STEM Award</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">🌟 Success Stories</h3>
            <p className="text-gray-600">
              Read how students achieved their dreams with scholarships.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-10 text-center space-x-6">
          <Link to="/" className="text-indigo-600 hover:underline">Loans</Link>
          <Link to="/" className="text-indigo-600 hover:underline">Study Abroad</Link>
          <Link to="/" className="text-indigo-600 hover:underline">Counselling</Link>
        </div>
      </div>
    </div>
  );
}
