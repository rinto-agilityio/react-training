const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(js|jsx|mjs)$/,
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        presets: ['react-app'],
        plugins: [
          [
            'module-resolver',
            {
              alias: {
                'react-native': 'react-native-web'
              }
            }
          ]
        ],
        cacheDirectory: true
      }
    }
  );

  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'url-loader',
    include: path.resolve(__dirname, '../', 'node_modules/react-native-vector-icons'),
  });

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
