export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: [ "**/*.spec.ts" ],
};
