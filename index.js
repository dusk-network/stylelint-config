import { browsers, propertyOrder } from "./lib/config/index.js";

export default {
  extends: ["stylelint-config-standard"],
  plugins: [
    "stylelint-selector-bem-pattern",
    "stylelint-no-unsupported-browser-features",
    "stylelint-order",
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-disallowed-list": ["extend"],
    "at-rule-no-unknown": null,
    "block-no-empty": true,
    "color-function-notation": null,
    "color-named": "always-where-possible",
    "color-no-invalid-hex": true,
    "comment-no-empty": null,
    "comment-word-disallowed-list": ["/\\b(?:fixme|todo)\\b/i"],
    "custom-property-pattern": null,
    "declaration-block-no-duplicate-properties": [
      true,
      { ignore: ["consecutive-duplicates"] },
    ],
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-property-value-disallowed-list": {
      "/.+/": ["initial"],
      "/^background/": ["http:", "https:"],
      "/^border/": ["none"],
      "/^transition/": ["/all/"],
    },
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-no-unknown": null,
    "keyframes-name-pattern": null,
    "max-nesting-depth": 4,
    "media-feature-name-no-unknown": null,
    "media-feature-name-no-vendor-prefix": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "no-invalid-position-at-import-rule": [true, { ignoreAtRules: ["use"] }],
    "number-max-precision": null,
    "order/properties-order": propertyOrder,
    "plugin/no-unsupported-browser-features": [
      true,
      { browsers, severity: "warning" },
    ],
    "plugin/selector-bem-pattern": {
      preset: "bem",
    },
    "selector-class-pattern": [
      "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
      {
        message: "Expected BEM naming convention for class.",
      },
    ],
    "selector-max-compound-selectors": 6,
    "selector-no-qualifying-type": true,
  },
};
