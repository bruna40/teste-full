/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './tests',
    modulePathIgnorePatterns: [
      '<rootDir>/unit',
    ],
    testTimeout: 60000,
  };