const config = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  preset: "jest-preset-stylelint",
  setupFilesAfterEnv: ["<rootDir>/lib/testing/setup.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {},
  verbose: true,
};

export default config;
