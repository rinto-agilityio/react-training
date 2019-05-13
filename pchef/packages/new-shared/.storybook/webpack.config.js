const path = require("path");
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
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};