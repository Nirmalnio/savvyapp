module.exports = {
    // Other Jest config options...
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!(axios)/)'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testEnvironment: 'jsdom',
    globals: {
      API_URL: 'http://localhost:3000',
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    moduleDirectories: ['node_modules', 'src'],
  };
  