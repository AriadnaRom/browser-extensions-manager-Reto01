import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/browser-extensions-manager-Reto01/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});