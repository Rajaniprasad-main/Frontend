// src/pages/Coaching.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, ChevronRight } from "lucide-react";

export default function Coaching() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Find the Best Coaching Institutes</h1>
        <p className="text-lg mb-6">
          Compare top coaching centers, courses, reviews, and more — all in one place.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:scale-105 transform transition">
          Get Started
        </button>
      </section>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mt-8">
        {["overview", "courses", "reviews", "faqs"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              tab === t
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex justify-center mt-10 px-6">
        <div className="w-full md:w-2/3 flex bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Coaching Institutes..."
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="px-6 bg-indigo-600 text-white hover:bg-indigo-700 transition">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        {tab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Coaching Institute {id}</h3>
                  <span className="flex items-center text-yellow-500">
                    <Star size={16} className="mr-1" /> 4.{id}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Offering courses for NEET, JEE, UPSC and more.
                </p>
                <button className="mt-4 flex items-center text-indigo-600 font-medium hover:underline">
                  View Details <ChevronRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {tab === "courses" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Popular Courses</h2>
            <ul className="space-y-3">
              <li className="flex justify-between p-3 bg-gray-50 rounded hover:bg-gray-100">
                NEET Crash Course <span className="text-indigo-600">₹20,000</span>
              </li>
              <li className="flex justify-between p-3 bg-gray-50 rounded hover:bg-gray-100">
                JEE Advanced Coaching <span className="text-indigo-600">₹35,000</span>
              </li>
              <li className="flex justify-between p-3 bg-gray-50 rounded hover:bg-gray-100">
                UPSC Foundation Batch <span className="text-indigo-600">₹50,000</span>
              </li>
            </ul>
          </div>
        )}

        {tab === "reviews" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
            <div className="space-y-4">
              <p className="p-3 bg-gray-50 rounded">"Great teachers and study material!" ⭐⭐⭐⭐☆</p>
              <p className="p-3 bg-gray-50 rounded">"Doubt sessions are very helpful." ⭐⭐⭐⭐⭐</p>
              <p className="p-3 bg-gray-50 rounded">"Affordable and flexible." ⭐⭐⭐⭐☆</p>
            </div>
          </div>
        )}

        {tab === "faqs" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <div className="space-y-3">
              <details className="p-3 bg-gray-50 rounded hover:bg-gray-100">
                <summary className="cursor-pointer font-medium">Which is the best coaching?</summary>
                <p className="text-sm text-gray-600 mt-2">
                  It depends on your preparation level. Compare institutes to decide.
                </p>
              </details>
              <details className="p-3 bg-gray-50 rounded hover:bg-gray-100">
                <summary className="cursor-pointer font-medium">Are online classes available?</summary>
                <p className="text-sm text-gray-600 mt-2">
                  Yes, most institutes now offer hybrid and online classes.
                </p>
              </details>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
