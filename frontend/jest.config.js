module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/mocks/svgrMock.js',
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.js"
  ],
  testEnvironment: "jsdom"
};
