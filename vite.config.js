import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  preview: {
    port: process.env.PORT || 4173,
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "about.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
      },
    },
  },
});
