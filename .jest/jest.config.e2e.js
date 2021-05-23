const jestConfig = require('./jest.config');

module.exports = {
    ...jestConfig,

    roots: ['<rootDir>/docs'],

    testMatch: ['<rootDir>/**/*.e2e.{ts,tsx}'],
};
