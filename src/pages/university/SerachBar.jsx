// src/pages/Scholar/SearchBar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="text-2xl font-extrabold text-indigo-700"
        >
          🎓 ScholarFind
        </motion.div>

        {/* Search */}
        <div className="flex-1 w-full">
          <div className="flex items-stretch gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch(q)}
              placeholder="Search scholarship, provider or tags..."
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onSearch(q)}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Search
            </motion.button>
          </div>
        </div>

        {/* Filter Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-black/90 transition"
          onClick={() => alert("Open advanced filters drawer (optional)")}
        >
          Filters
        </motion.button>

        {/* Auth */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-3 py-2 rounded-lg border border-gray-200 font-medium hover:bg-gray-50"
          >
            Login
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-3 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
          >
            Register
          </motion.button>
        </div>
      </div>
    </div>
  );
}
