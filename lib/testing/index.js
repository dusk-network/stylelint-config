import dedent from "dedent";
import defaultConfig from "../../index.js";
import stylelint from "stylelint";

export function lint(code, config = defaultConfig, options = {}) {
  return stylelint.lint(
    Object.assign(options, {
      code: `${dedent(code).trim()}\n`,
      config,
    })
  );
}
