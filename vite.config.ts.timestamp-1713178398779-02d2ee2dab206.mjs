// vite.config.ts
import { defineConfig } from "file:///Users/dabaixiong/code/vue/xVue/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/dabaixiong/code/vue/xVue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import wasm from "file:///Users/dabaixiong/code/vue/xVue/node_modules/vite-plugin-wasm/exports/import.mjs";
import topLevelAwait from "file:///Users/dabaixiong/code/vue/xVue/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import icons from "file:///Users/dabaixiong/code/vue/xVue/node_modules/unplugin-icons/dist/vite.js";
import svgLoader from "file:///Users/dabaixiong/code/vue/xVue/node_modules/vite-svg-loader/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/dabaixiong/code/vue/xVue";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    wasm(),
    topLevelAwait(),
    // eslint({ fix: true }),
    icons({ compiler: "vue3" }),
    svgLoader()
  ],
  resolve: {
    alias: {
      "@": path.join(__vite_injected_original_dirname, "./src/")
    }
  },
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFiYWl4aW9uZy9jb2RlL3Z1ZS94VnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGFiYWl4aW9uZy9jb2RlL3Z1ZS94VnVlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kYWJhaXhpb25nL2NvZGUvdnVlL3hWdWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgd2FzbSBmcm9tIFwidml0ZS1wbHVnaW4td2FzbVwiO1xuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSBcInZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdFwiO1xuaW1wb3J0IGVzbGludCBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50MlwiO1xuaW1wb3J0IGljb25zIGZyb20gXCJ1bnBsdWdpbi1pY29ucy92aXRlXCI7XG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gXCJ2aXRlLXN2Zy1sb2FkZXJcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgd2FzbSgpLFxuICAgIHRvcExldmVsQXdhaXQoKSxcbiAgICAvLyBlc2xpbnQoeyBmaXg6IHRydWUgfSksXG4gICAgaWNvbnMoeyBjb21waWxlcjogXCJ2dWUzXCIgfSksXG4gICAgc3ZnTG9hZGVyKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9zcmMvXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJhc2U6IFwiLi9cIixcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUSxTQUFTLG9CQUFvQjtBQUM1UyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sbUJBQW1CO0FBRTFCLE9BQU8sV0FBVztBQUNsQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxVQUFVO0FBUGpCLElBQU0sbUNBQW1DO0FBVXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLEtBQUs7QUFBQSxJQUNMLGNBQWM7QUFBQTtBQUFBLElBRWQsTUFBTSxFQUFFLFVBQVUsT0FBTyxDQUFDO0FBQUEsSUFDMUIsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxLQUFLLGtDQUFXLFFBQVE7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
