module.exports = {
  preset: 'react-native',
  testMatch: ['**/src/**/*.test.js'],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  setupFiles: ['./src/test/setup.js'],
  globals: {
    window: {}
  },
  collectCoverage: true,
  coverageFormats: ['json', 'html']
}
