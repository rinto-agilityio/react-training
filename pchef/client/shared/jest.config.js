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
}
