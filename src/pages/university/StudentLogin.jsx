import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Linkedin } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { login } from "../../service/auth.js";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Login  */}
   <NavLink
  to="/HeaderBar"
  className="block w-full text-center bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 mt-4"
>
  Login
</NavLink>


        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <NavLink to="/student-register" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </NavLink>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 text-black-600">
            <Linkedin size={20} /> LinkedIn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 text-black-600">
            <Facebook size={20} /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
