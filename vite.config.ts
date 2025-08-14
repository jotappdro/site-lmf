import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fallback from "vite-plugin-pages-fallback"; // novo plugin

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
    fallback() // cria automaticamente um 404.html no build
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
