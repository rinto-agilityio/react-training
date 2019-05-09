module.exports = {
  rootDir: '../..',
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/packages/mobile/src/configs/jest.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/packages/mobile/src/configs/jest.js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
}
