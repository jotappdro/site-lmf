import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const path = await import("path");

  const plugins = [
    react(),
    // roda componentTagger apenas no desenvolvimento
    ...(mode === "development"
      ? [(await import("lovable-tagger")).componentTagger()]
      : []),
    {
      name: "github-pages-404-fix",
      async closeBundle() {
        const fs = await import("fs");
        const distDir = path.resolve(process.cwd(), "dist");
        const indexHtml = path.join(distDir, "index.html");
        const notFoundHtml = path.join(distDir, "404.html");

        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml);
          console.log("📄 404.html criado para GitHub Pages");
        }
      },
    },
  ];

  return {
    base: "/site-lmf/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
