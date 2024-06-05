import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {
    ignores: [
      "*.sh", "node_modules", "lib", "*.md", "*.scss", "*.woff", "*.ttf", ".vscode",
      ".idea", "dist", "mock", "public", "bin", "build", "config", "index.html", "src/assets",
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.vue", "**/*.js", "**/*.jsx"]
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
