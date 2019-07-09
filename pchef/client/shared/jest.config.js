module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './src/config/fileTransformer.js',
  },
  setupFiles: ['./src/config/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*test.js',
    '!src/**/*story.js',
    '!src/graphql/**',
    '!src/themes/**',
    '!src/config/**',
    '!src/index.js',
    '!src/containers/**',
    '!src/helpers/**',
    '!src/mocks/**',
    '!src/types/**',
    '!src/**/*styles.js',

  ],
}
