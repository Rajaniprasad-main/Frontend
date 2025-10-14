// src/pages/Scholar/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-white text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Find the Perfect Scholarship
        </h1>
        <p className="mt-3 text-white/90 text-lg">
          Search, filter, and apply with confidence.
        </p>
      </motion.div>
      {/* soft shapes */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -top-28 -right-28 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
