module.exports = {
  setupFiles: ['<rootDir>/src/config/setupTest.js'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    './src/config/fileTransformer.js',
  },
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@fuse(.*)$': '<rootDir>/src/@fuse/components$1',
  },
  collectCoverageFrom: [
    'src/**/*{js,jsx}',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/serviceWorker.js',
    '!<rootDir>/src/setupTests.js',
    '!<rootDir>/src/app/constants/*',
    // '!<rootDir>/src/app/fuse-configs/*',
    // '!<rootDir>/src/app/fuse-layouts/*',
    '!<rootDir>/src/**/*.stories.{js,jsx}',
    '!<rootDir>/src/@fake-db/*',
    '!<rootDir>/src/@fuse/*',
    '!<rootDir>/src/@lodash/*',
  ],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],
  // Automatically clear mock calls and instances between every test
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
