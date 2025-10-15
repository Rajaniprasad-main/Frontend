// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    cors: true, // ✅ Allow CORS during local dev
    proxy: {
      // ✅ Change "/api" to match your backend route prefix
      "/api": {
        target: "http://localhost:5000", // your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons"],
          ui: ["framer-motion", "lucide-react"],
        },
      },
    },
  },
});