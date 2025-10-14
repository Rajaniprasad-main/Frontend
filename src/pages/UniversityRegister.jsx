import React, { useState, useMemo } from "react";
import FormInput from "../components/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faMapMarkerAlt,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// ✅ States & Cities Data
const statesWithCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
  Bihar: ["Patna", "Gaya", "Bhagalpur"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Gurugram", "Faridabad", "Panipat"],
  HimachalPradesh: ["Shimla", "Manali", "Dharamshala"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  MadhyaPradesh: ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Manipur: ["Imphal", "Churachandpur", "Thoubal"],
  Meghalaya: ["Shillong", "Tura", "Jowai"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Amritsar", "Ludhiana", "Jalandhar"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
  Sikkim: ["Gangtok", "Namchi", "Mangan"],
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar"],
  Tripura: ["Agartala", "Udaipur", "Kailasahar"],
  UttarPradesh: ["Lucknow", "Kanpur", "Varanasi", "Noida"],
  Uttarakhand: ["Dehradun", "Haridwar", "Nainital"],
  WestBengal: ["Kolkata", "Siliguri", "Howrah"],
};

const UniversityRegister = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    type: "",
    established: "",
    ownership: "",
    accreditation: "",
    affiliation: "",
    students: "",
    faculty: "",

    // Contact & Location
    headOfficeAddress: "",
    campusAddress: "",
    state: "",
    city: "",
    officialEmail: "",
    altEmail: "",
    phone: "",
    altPhone: "",

    // Online presence
    website: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",

    // Key Persons
    chancellor_name: "",
    chancellor_email: "",
    chancellor_phone: "",
    vice_chancellor_name: "",
    vice_chancellor_email: "",
    vice_chancellor_phone: "",
    registrar_name: "",
    registrar_email: "",
    registrar_phone: "",
    dean_name: "",
    dean_email: "",
    dean_phone: "",
    principal_name: "",
    principal_email: "",
    principal_phone: "",
    admission_officer_name: "",
    admission_officer_email: "",
    admission_officer_phone: "",
    placement_officer_name: "",
    placement_officer_email: "",
    placement_officer_phone: "",
    research_head_name: "",
    research_head_email: "",
    research_head_phone: "",
    intl_relations_name: "",
    intl_relations_email: "",
    intl_relations_phone: "",
  });

  const [errors, setErrors] = useState({});
  const requiredFields = ["name", "type"];

  const progress = useMemo(() => {
    const filledFields = requiredFields.filter(
      (field) => formData[field] && formData[field] !== ""
    ).length;
    return Math.round((filledFields / requiredFields.length) * 100);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { city: "" } : {}), // Reset city when state changes
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ Sections Config
  const formSections = [
    {
      title: "Basic Information",
      icon: faUniversity,
      fields: [
        { label: "Institute Name", name: "name", required: true, placeholder: "Enter institute name" },
        { label: "Institute Type", name: "type", type: "select", options: ["University", "College", "Institute", "Deemed University"], required: true, placeholder: "Select institute type" },
        { label: "Year Established", name: "established", type: "number", placeholder: "Enter year (e.g., 1990)" },
        { label: "Ownership", name: "ownership", type: "select", options: ["Government", "Private", "Public-Private Partnership"], placeholder: "Select ownership type" },
        { label: "Accreditation", name: "accreditation", type: "select", options: ["NAAC A+", "NAAC A", "NAAC B", "NBA", "AICTE Approved"], placeholder: "Select accreditation" },
        { label: "Affiliation", name: "affiliation", placeholder: "Enter affiliation (e.g., UGC, AICTE)" },
        { label: "No. of Students", name: "students", type: "number", placeholder: "Enter total students" },
        { label: "No. of Faculty", name: "faculty", type: "number", placeholder: "Enter total faculty" },
      ],
    },
    {
      title: "Contact & Location",
      icon: faMapMarkerAlt,
      fields: [
        { label: "Head Office Address", name: "headOfficeAddress", placeholder: "Enter head office address" },
        { label: "Campus Address", name: "campusAddress", placeholder: "Enter campus address" },
        { label: "State", name: "state", type: "state-select", placeholder: "Select state" },
        { label: "City", name: "city", type: "city-select", placeholder: "Select city" },
        { label: "Official Email", name: "officialEmail", type: "email", placeholder: "Enter official email" },
        { label: "Alternate Email", name: "altEmail", type: "email", placeholder: "Enter alternate email" },
        { label: "Phone Number", name: "phone", placeholder: "Enter phone number" },
        { label: "Alternate Phone", name: "altPhone", placeholder: "Enter alternate phone number" },
      ],
    },
    {
      title: "Online Presence",
      icon: faGlobe,
      fields: [
        { label: "Official Website", name: "website", type: "url", placeholder: "https://www.institute.edu" },
        { label: "Facebook", name: "facebook", type: "url", placeholder: "https://facebook.com/institute" },
        { label: "LinkedIn", name: "linkedin", type: "url", placeholder: "https://linkedin.com/institute" },
        { label: "Twitter", name: "twitter", type: "url", placeholder: "https://twitter.com/institute" },
        { label: "Instagram", name: "instagram", type: "url", placeholder: "https://instagram.com/institute" },
        { label: "YouTube", name: "youtube", type: "url", placeholder: "https://youtube.com/institute" },
      ],
    },
    {
      title: "Key Persons",
      icon: faUsers,
      fields: [
        { label: "Chancellor Name", name: "chancellor_name", placeholder: "Enter Chancellor name" },
        { label: "Chancellor Email", name: "chancellor_email", type: "email", placeholder: "Enter Chancellor email" },
        { label: "Chancellor Phone", name: "chancellor_phone", type: "tel", placeholder: "Enter Chancellor phone" },

        { label: "Vice Chancellor Name", name: "vice_chancellor_name", placeholder: "Enter Vice Chancellor name" },
        { label: "Vice Chancellor Email", name: "vice_chancellor_email", type: "email", placeholder: "Enter Vice Chancellor email" },
        { label: "Vice Chancellor Phone", name: "vice_chancellor_phone", type: "tel", placeholder: "Enter Vice Chancellor phone" },

        { label: "Registrar Name", name: "registrar_name", placeholder: "Enter Registrar name" },
        { label: "Registrar Email", name: "registrar_email", type: "email", placeholder: "Enter Registrar email" },
        { label: "Registrar Phone", name: "registrar_phone", type: "tel", placeholder: "Enter Registrar phone" },

        { label: "Dean(s) Name", name: "dean_name", placeholder: "Enter Dean name(s)" },
        { label: "Dean(s) Email", name: "dean_email", type: "email", placeholder: "Enter Dean email" },
        { label: "Dean(s) Phone", name: "dean_phone", type: "tel", placeholder: "Enter Dean phone" },

        { label: "Principal Name", name: "principal_name", placeholder: "Enter Principal name" },
        { label: "Principal Email", name: "principal_email", type: "email", placeholder: "Enter Principal email" },
        { label: "Principal Phone", name: "principal_phone", type: "tel", placeholder: "Enter Principal phone" },

        { label: "Admission Officer Name", name: "admission_officer_name", placeholder: "Enter Admission Officer name" },
        { label: "Admission Officer Email", name: "admission_officer_email", type: "email", placeholder: "Enter Admission Officer email" },
        { label: "Admission Officer Phone", name: "admission_officer_phone", type: "tel", placeholder: "Enter Admission Officer phone" },

        { label: "Placement Officer Name", name: "placement_officer_name", placeholder: "Enter Placement Officer name" },
        { label: "Placement Officer Email", name: "placement_officer_email", type: "email", placeholder: "Enter Placement Officer email" },
        { label: "Placement Officer Phone", name: "placement_officer_phone", type: "tel", placeholder: "Enter Placement Officer phone" },

        { label: "Research Head Name", name: "research_head_name", placeholder: "Enter Research Head name" },
        { label: "Research Head Email", name: "research_head_email", type: "email", placeholder: "Enter Research Head email" },
        { label: "Research Head Phone", name: "research_head_phone", type: "tel", placeholder: "Enter Research Head phone" },

        { label: "Intl. Relations Head Name", name: "intl_relations_name", placeholder: "Enter Intl. Relations Head name" },
        { label: "Intl. Relations Head Email", name: "intl_relations_email", type: "email", placeholder: "Enter Intl. Relations Head email" },
        { label: "Intl. Relations Head Phone", name: "intl_relations_phone", type: "tel", placeholder: "Enter Intl. Relations Head phone" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-[#3656E5] text-center mb-8">
          University Registration
        </h2>

        {formSections.map((section, index) => (
          <motion.div
            key={index}
            className="space-y-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-[#3656E5] border-b border-gray-200 pb-2 flex items-center">
              <FontAwesomeIcon icon={section.icon} className="mr-2 text-[#3656E5]" />
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.fields.map((field) => (
                <div key={field.name} className="space-y-1">
                  {field.type === "select" ? (
                    <>
                      <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] 
                          transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                      >
                        <option value="">-- {field.placeholder} --</option>
                        {field.options?.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : field.type === "state-select" ? (
                    <>
                      <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                      >
                        <option value="">-- Select State --</option>
                        {Object.keys(statesWithCities).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </>
                  ) : field.type === "city-select" ? (
                    <>
                      <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!formData.state}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md disabled:bg-gray-100"
                      >
                        <option value="">-- Select City --</option>
                        {formData.state &&
                          statesWithCities[formData.state]?.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    </>
                  ) : (
                    <FormInput
                      label={field.label}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      required={field.required}
                      error={errors[field.name]}
                      className="border-gray-300 focus:ring-[#3656E5] focus:border-[#3656E5] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-sm text-red-600 mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UniversityRegister;
