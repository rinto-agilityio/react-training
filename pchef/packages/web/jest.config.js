module.exports = {
  preset: 'react-native-web',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/react-native-web/src/vendor/'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/?(*.)test.js?(x)'],
  setupFiles: ['./src/config/jest.js'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  moduleNameMapper: {
    '/^react-native$/': 'react-native-web'
  },
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/src/config/**',
    '!**/src/assets/**',
    '!**/src/**/*stories.js'
  ]
}
