import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9993,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@av/components": path.resolve("./externals/av-components/lib"),
    },
  },
});
