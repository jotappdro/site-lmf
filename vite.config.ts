import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger"; 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "/site-lmf/",
    server: {
      host: "::",
      port: 8080, 
    },
 
    plugins: [
      react(),

   
      mode === "development" ? componentTagger() : null,

      
      {
        name: "github-pages-fallback",
        
        apply: 'build',
        
        closeBundle() {
          const distDir = path.resolve(process.cwd(), "dist");
          const indexHtml = path.join(distDir, "index.html");
          const notFoundHtml = path.join(distDir, "404.html");

          if (fs.existsSync(indexHtml)) {
            fs.copyFileSync(indexHtml, notFoundHtml);
            console.log("📄 404.html (fallback) criado com sucesso para o GitHub Pages!");
          }
        },
      },
    ],
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
