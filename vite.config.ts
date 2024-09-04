import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project-2",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "js/main.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/style.css"; // Specify output name for CSS file
          }
          return "[name].[ext]"; // Default for other assets
        },
      },
    },
  },
});
