module.exports = {
  env: {
    es6: true,
    "jest/globals": true,
    node: true,
  },
  extends: ["@dusk-network/eslint-config/js"],
  overrides: [
    {
      extends: ["plugin:jest/recommended"],
      files: ["__tests__/**", "testing/**"],
      plugins: ["jest"],
    },
  ],
  plugins: [],
  root: true,
  rules: {},
  settings: {},
};
