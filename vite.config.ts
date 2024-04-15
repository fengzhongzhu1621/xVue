import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import eslint from "vite-plugin-eslint2";
import icons from "unplugin-icons/vite";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    wasm(),
    topLevelAwait(),
    // eslint({ fix: true }),
    icons({ compiler: "vue3" }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      wasm: resolve(__dirname, "wasm"),
    },
  },
  base: "./",
});
