// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Optional: increase chunk size warning limit
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Split vendor (library) code into separate chunks
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons"],
          ui: ["framer-motion", "lucide-react"],
        },
      },
    },
  },
});
