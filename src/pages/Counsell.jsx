// src/pages/Counselling.jsx
import React, { useState } from "react";

/**
 * Counselling form
 * - Constrained width (max-w-lg) so inputs are not too large
 * - 2-column responsive grid on larger screens
 * - Inline validation with helpful messages
 * - Submit simulates an API call (console.log) and shows a success banner
 */

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  university: "",
  course: "",
  mode: "",
  type: "",
  message: "",
};

export default function Counselling() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const universities = [
    "Delhi University",
    "Mumbai University",
    "Bangalore University",
    "Anna University",
    "Jawaharlal Nehru University",
    "Other",
  ];

  // Basic validation, returns object with field errors
  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Full name is required.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email.";
    const digits = data.phone.replace(/\D/g, "");
    if (!/^\d{7,15}$/.test(digits)) e.phone = "Phone must be 7–15 digits.";
    if (!data.university) e.university = "Select a preferred university.";
    if (!data.course.trim()) e.course = "Preferred course is required.";
    if (!data.mode) e.mode = "Select mode of study.";
    if (!data.type) e.type = "Select counselling type.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    // clear field error as user types
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length) {
      setErrors(validation);
      // focus first invalid field (optional)
      const first = Object.keys(validation)[0];
      const el = document.querySelector(`[name="${first}"]`);
      if (el) el.focus();
      return;
    }

    setSubmitting(true);

    // Simulate network request (replace with real API call)
    try {
      await new Promise((res) => setTimeout(res, 800));
      console.log("Counselling submission:", form);

      // show success
      setSuccess(true);
      setForm(INITIAL);
      setErrors({});
      // hide success after 3s
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `block w-full px-3 py-2 text-sm rounded-md border ${
      errors[field] ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:ring-blue-100"
    } focus:outline-none transition`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-700 mb-2">
          University Counselling
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Fill the form below to request university counselling. We will contact you with options.
        </p>

        {success && (
          <div className="mb-4 p-3 rounded-md bg-green-50 border border-green-200 text-green-800 text-sm">
            ✅ Your counselling request was submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full name - full width */}
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={inputClass("name")}
              placeholder="e.g. Priya Sharma"
              maxLength={80}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass("email")}
              placeholder="you@example.com"
              maxLength={80}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={inputClass("phone")}
              placeholder="e.g. 9876543210"
              maxLength={15}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>

          {/* University (full width) */}
          <div className="sm:col-span-2">
            <label htmlFor="university" className="block text-sm font-medium text-gray-700">
              Preferred University
            </label>
            <select
              id="university"
              name="university"
              value={form.university}
              onChange={handleChange}
              className={inputClass("university")}
            >
              <option value="">-- Select University --</option>
              {universities.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
            {errors.university && <p className="mt-1 text-xs text-red-500">{errors.university}</p>}
          </div>

          {/* Course (full width) */}
          <div className="sm:col-span-2">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Preferred Course
            </label>
            <input
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
              className={inputClass("course")}
              placeholder="e.g. B.Sc Computer Science"
              maxLength={100}
            />
            {errors.course && <p className="mt-1 text-xs text-red-500">{errors.course}</p>}
          </div>

          {/* Mode & Type side-by-side */}
          <div>
            <label htmlFor="mode" className="block text-sm font-medium text-gray-700">
              Mode of Study
            </label>
            <select
              id="mode"
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className={inputClass("mode")}
            >
              <option value="">-- Select Mode --</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {errors.mode && <p className="mt-1 text-xs text-red-500">{errors.mode}</p>}
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Counselling Type
            </label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className={inputClass("type")}
            >
              <option value="">-- Select Type --</option>
              <option value="Admission Guidance">Admission Guidance</option>
              <option value="Career Counselling">Career Counselling</option>
              <option value="Scholarship Assistance">Scholarship Assistance</option>
            </select>
            {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type}</p>}
          </div>

          {/* Message - full width */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="block w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              placeholder="Share any specific requirements, timelines, or questions..."
              maxLength={500}
            />
          </div>

          {/* Submit button full width */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-xs text-gray-500 text-center">
          By submitting you agree to be contacted for university counselling.
        </p>
      </div>
    </div>
  );
}
