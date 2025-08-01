// src/pages/UniversityRegister.jsx
import React, { useState } from 'react';
import FormInput from '../components/FormInput';

const UniversityRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    address: '',
    contact: '',
    about: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("University Registered:", formData);
    alert("University registration submitted!");
    // TODO: API call
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">University Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="University Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter university name"
          />
          <FormInput
            label="Official Website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.edu"
          />
          <FormInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Full postal address"
          />
          <FormInput
            label="Contact Email or Phone"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Email or phone"
          />
          <div>
            <label className="block mb-1 font-medium text-gray-700">About / Description</label>
            <textarea
              name="about"
              rows="4"
              value={formData.about}
              onChange={handleChange}
              placeholder="Brief description of the university..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition duration-200"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default UniversityRegister;
