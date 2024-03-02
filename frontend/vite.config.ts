import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //envDir: "./.env",
  // define: {
  //   "process.env": {
  //     VITE_SERVER_HOST: JSON.stringify(import.meta.env.VITE_SERVER_HOST),
  //     VITE_SERVER_PORT: JSON.stringify(import.meta.env.VITE_SERVER_PORT),
  //   },
  // },
});
