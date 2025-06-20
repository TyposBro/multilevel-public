import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- THIS IS THE FIX ---
  // Set the base path to your repository name
  // This is crucial for GitHub Pages deployment
  base: "/multilevel-public/",
});
