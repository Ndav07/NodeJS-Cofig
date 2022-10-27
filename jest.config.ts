export default {
  root: ['<rootDir>/src'],
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [ "**/*.spec.ts" ],
};
