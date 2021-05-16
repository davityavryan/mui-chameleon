const jestConfig = require('./jest.config');

module.exports = {
    ...jestConfig,

    roots: ['<rootDir>/src'],

    testMatch: ['<rootDir>/**/*.unit.{ts,tsx}'],
};
