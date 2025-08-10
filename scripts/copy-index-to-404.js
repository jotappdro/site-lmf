// scripts/copy-index-to-404.js
import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("❌ dist/index.html não encontrado. Rode 'npm run build' antes.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("✅ Copiado: dist/index.html → dist/404.html");

