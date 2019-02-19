module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx}",
    "!<rootDir>/src/{apollo,theme,stories,test}/**.*", // Configuration
    "!<rootDir>/src/**/graphql.js",
    "!<rootDir>/src/**/*.{style,story}.{js,jsx}"
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    '<rootDir>/src/setupTests.js',
    '<rootDir>/src/test/throw-on-prop-type-error.js',
  ],

  // Extend frameworks or libs
  setupTestFrameworkScriptFile: 'jest-extended',

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: false,
}
