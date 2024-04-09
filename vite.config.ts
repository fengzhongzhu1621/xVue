import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import eslint from "vite-plugin-eslint2";
import checker from "vite-plugin-checker";
import icons from "vite-plugin-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    wasm(),
    topLevelAwait(),
    eslint({ fix: true }),
    checker({
      typescript: true,
      vueTsc: true,
    }),
    icons(),
  ],
});
