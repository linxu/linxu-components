// Em ./jest.config.js
module.exports = {
    cacheDirectory: ".jest-cache",
    coverageDirectory: ".jest-coverage",
    coveragePathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
    coverageReporters: ["html", "text"],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    verbose: false,
    testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
};
