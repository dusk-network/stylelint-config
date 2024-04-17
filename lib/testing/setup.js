expect.extend({
  toHaveDeprecationsLength(data, length) {
    const { deprecations } = data.results[0];
    return {
      message: () =>
        `Expected ${length} deprecations, but got ${deprecations.length}`,
      pass: deprecations.length === length,
    };
  },

  toHaveErrored(data) {
    return {
      message:
        () => `Expected "errored" === ${!data.errored}, but got ${data.errored}:
  - ${data.results[0].warnings.map((warning) => warning.text).join("\n- ")}`,
      pass: data.errored,
    };
  },

  toHaveResultsLength(data, length) {
    return {
      message: () =>
        `Expected results.length === ${length}, but got ${data.results.length}`,
      pass: data.results.length === length,
    };
  },

  toHaveWarnings(data, warningTexts) {
    const trimmedWarnings = new Set(
      data.results[0].warnings.map(({ text }) => text.trim())
    );
    return {
      message: () => `Expected to find the following warnings:
  - ${warningTexts.filter((text) => !trimmedWarnings.has(text)).join("\n- ")}
  
  But got instead:
  - ${data.results[0].warnings.map((warning) => warning.text).join("\n- ")}
  `,
      pass: warningTexts.every((text) => trimmedWarnings.has(text)),
    };
  },

  toHaveWarningsLength(data, length) {
    const { warnings } = data.results[0];
    return {
      message:
        () => `Expected results[0].warnings.length === ${length}, but got ${warnings.length}:
  - ${warnings.map((warning) => warning.text).join("\n- ")}`,
      pass: warnings.length === length,
    };
  },
});
