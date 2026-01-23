import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Desativa source maps em produção
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
});
