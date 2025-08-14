import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile"; // opcional, mas ajuda em SPAs

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const path = await import("path");
  const fs = await import("fs");

  const plugins = [
    react(),
    // roda componentTagger apenas no desenvolvimento
    ...(mode === "development"
      ? [(await import("lovable-tagger")).componentTagger()]
      : []),

    // Plugin para criar fallback 404.html no build
    {
      name: "github-pages-fallback",
      closeBundle() {
        const distDir = path.resolve(process.cwd(), "dist");
        const indexHtml = path.join(distDir, "index.html");
        const notFoundHtml = path.join(distDir, "404.html");

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml);
          console.log("📄 404.html (fallback) criado para GitHub Pages");
        }
      },
    },
  ];

  return {
    base: "/site-lmf/",
    server: {
      host: "::",
      port: 808
