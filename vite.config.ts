import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/site-lmf/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      // Plugin simples para criar um 404.html a partir do index.html
      name: "github-pages-404-fix",
      closeBundle() {
        const fs = require("fs");
        const path = require("path");
        const distDir = path.resolve(__dirname, "dist");
        const indexHtml = path.join(distDir, "index.html");
        const notFoundHtml = path.join(distDir, "404.html");

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml);
          console.log("📄 404.html criado para GitHub Pages");
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
