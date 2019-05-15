module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/configs/jest.js'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
}
