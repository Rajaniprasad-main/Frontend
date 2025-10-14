import React, { useState } from "react";

const ScholarshipAndLoan = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    scholarshipType: "",
    loanAmount: "",
    loanPurpose: "",
    incomeProof: "",
    bankName: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your scholarship/loan application has been submitted!");
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🎓 Scholarship & Education Loan Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Course Enrolled
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="E.g., B.Sc, B.Tech, MBA"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Scholarship Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Scholarship Type
            </label>
            <select
              name="scholarshipType"
              value={formData.scholarshipType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Scholarship</option>
              <option value="Merit-based">Merit-based</option>
              <option value="Need-based">Need-based</option>
              <option value="Sports">Sports</option>
              <option value="Research">Research</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Enter amount required"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Loan Purpose */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Purpose of Loan
          </label>
          <textarea
            name="loanPurpose"
            value={formData.loanPurpose}
            onChange={handleChange}
            placeholder="Describe why you need this loan"
            rows="3"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Income Proof */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Upload Income Proof
          </label>
          <input
            type="file"
            name="incomeProof"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Bank Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preferred Bank
          </label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter bank name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Additional Remarks
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Any extra details..."
            rows="3"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScholarshipAndLoan;
