module.exports = {
  setupFiles: ['<rootDir>/src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*{js,jsx}',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/serviceWorker.js',
    '!<rootDir>/src/graphql/**',
    '!<rootDir>/src/setupTests.js',
    '!<rootDir>/src/constants/*',
    '!<rootDir>/src/**/*.stories.{js,jsx}'
  ],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  testEnvironment: 'jsdom',
  'moduleNameMapper': {
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',
  verbose: true
};
