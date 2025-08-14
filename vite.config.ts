import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/site-lmf/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // roda componentTagger apenas no desenvolvimento
    mode === "development" ? (await import("lovable-tagger")).componentTagger() : null,
    {
      name: "github-pages-404-fix",
      async closeBundle() {
        const fs = await import("fs");
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
