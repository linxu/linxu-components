module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^Components/(.*)$": "<rootDir>/src/Components/$1",
    "^theme/(.+)$": "<rootDir>/src/theme/$1",
  },
};
