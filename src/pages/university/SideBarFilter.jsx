import React from "react";
import { motion} from "framer-motion";
import { FaFilter, FaBook, FaUniversity, FaTags } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex w-full gap-6">
      {/* ---------------- LEFT FILTER ---------------- */}
      <motion.aside
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/4 bg-white p-5 rounded-2xl shadow-lg"
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-700">
          <FaFilter /> Filters
        </h3>

        {/* Category */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Category</label>
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400">
            <option>SC</option>
            <option>ST</option>
            <option>OBC</option>
            <option>General</option>
          </select>
        </div>

        {/* Family Income */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Family Income</label>
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400">
            <option>{"< 1 Lakh"}</option>
            <option>{"1L - 3L"}</option>
            <option>{"3L - 6L"}</option>
            <option>{"> 6L"}</option>
          </select>
        </div>

        {/* Education Level */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Education Level</label>
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400">
            <option>UG</option>
            <option>PG</option>
            <option>PhD</option>
          </select>
        </div>

        {/* Scholarship Type */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Scholarship Type</label>
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400">
            <option>Merit-Based</option>
            <option>Need-Based</option>
            <option>Sports</option>
          </select>
        </div>

        {/* State / Region */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">State / Region</label>
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400">
            <option>All India</option>
            <option>Bihar</option>
            <option>UP</option>
            <option>Maharashtra</option>
          </select>
        </div>

        {/* General Quota */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">General Quota</label>
          <input type="checkbox" className="mr-2" /> Applicable
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-semibold mb-1">Deadline</label>
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400">
            <option>Open</option>
            <option>Upcoming</option>
            <option>Closed</option>
          </select>
        </div>
      </motion.aside>

      {/* ---------------- RIGHT SCHOLARSHIP CARDS ---------------- */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 grid gap-6"
      >
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <h4 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2">
            <FaBook /> National Merit Scholarship
          </h4>
          <p className="text-gray-700 mb-2">
            <strong>Provider:</strong> Central Government
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Tags:</strong> SC, 3L Income, UG
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Benefits:</strong> ₹50,000 / year
          </p>
          <p className="text-red-500 font-medium">
            <strong>Deadline:</strong> 15 Sept (Soon)
          </p>
          <div className="flex gap-3 mt-4">
   
  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full">
    View Details
  </button>


            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Apply Now
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
              Download
            </button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <h4 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2">
            <FaUniversity /> State Talent Scholarship
          </h4>
          <p className="text-gray-700 mb-2">
            <strong>Provider:</strong> State Govt (Bihar)
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Tags:</strong> OBC, 6L Income, PG
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Benefits:</strong> ₹30,000 / year
          </p>
          <p className="text-green-600 font-medium">
            <strong>Deadline:</strong> 30 Sept (Open)
          </p>
          <div className="flex gap-3 mt-4">
          <Link to="/ScholarshipDetails" className="w-full">
  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full">
    View Details
  </button>
</Link>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Apply Now
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
              Download
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
