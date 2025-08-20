import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // listen on all network interfaces
    port: 5173, // your dev server port
    strictPort: false,
    allowedHosts: [".ngrok-free.app"], // allow any ngrok subdomain
  },
});
