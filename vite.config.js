import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.VITE_API_URL
      ? null // Disable proxy on Vercel (because we can directly access the API)
      : {
          "/api": {
            target: "https://daleseo-bigocalc.web.val.run", // Your actual API
            changeOrigin: true,
            secure: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
  },
});
