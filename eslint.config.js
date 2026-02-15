import globals from "globals";

import duskJsConfig from "@dusk-network/eslint-config";

export default [
  ...duskJsConfig,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
      sourceType: "module",
    },
  },
  {
    files: ["__tests__/**/*.js", "lib/testing/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: "module",
    },
  },
  {
    files: ["eslint.config.js"],
    rules: {
      // eslint-plugin-import doesn't always resolve packages with "exports" cleanly.
      "import/no-unresolved": "off",
    },
  },
];
