module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    "plugin/selector-bem-pattern": {
      preset: "bem",
    },
  },
};
