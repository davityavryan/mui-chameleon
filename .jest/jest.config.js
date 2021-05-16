const path = require('path');

module.exports = {
    cache: true,
    verbose: true,

    rootDir: path.resolve(__dirname, '..'),

    // The root of source code
    roots: ['<rootDir>/src', '<rootDir>/docs'],

    setupFiles: ['<rootDir>/.jest/set-env-vars.js'],

    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/*.d.ts'],
    coverageReporters: ['text', 'json', 'html'],

    errorOnDeprecated: true,

    // Runs special logic, such as cleaning up components when using React Testing Library and adds special extended assertions to Jest
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    // Test spec file resolution pattern
    testMatch: ['<rootDir>/**/*.{unit,e2e}.{ts,tsx}'],

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js'],

    testEnvironment: 'jsdom',
};
