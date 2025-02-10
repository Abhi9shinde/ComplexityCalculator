import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: process.env.VITE_API_URL
    ? {} // No proxy on Vercel
    : {
        proxy: {
          "/api": {
            target: "https://daleseo-bigocalc.web.val.run",
            changeOrigin: true,
            secure: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
});
