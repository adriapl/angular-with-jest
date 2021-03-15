module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true, // Para que siempre que se ejecuten los test, se cree una carpeta de coverage
  coverageDirectory: 'coverage/angular-with-jest'
};
