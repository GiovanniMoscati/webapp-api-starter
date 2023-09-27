module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['./src/**/*.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  setupFiles: ['envk'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  globalSetup: '<rootDir>/tests/globalSetup.ts',
  globalTeardown: '<rootDir>/tests/globalTeardown.ts',
  testTimeout: 10000,
};
