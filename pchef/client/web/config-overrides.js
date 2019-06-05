const fs = require('fs')
const path = require('path')
const { override, addBabelPlugins, babelInclude } = require('customize-cra')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = override(
  babelInclude([
    resolveApp('src'),
    path.resolve('./node_modules/react/.*/'),

    // Local package for shared-component
    resolveApp('./node_modules/pchef-shared'), // Will be removed after migrated
    resolveApp('./node_modules/pchef-newshared'),

    // 3rd lib: react-native-elements
    resolveApp('./node_modules/react-native-paper'),
    resolveApp('./node_modules/react-native-safe-area-view'),
    resolveApp('./node_modules/react-native-elements'), // Will be removed after migrated
    resolveApp('./node_modules/react-native-ratings'),
    resolveApp('./node_modules/react-native-vector-icons'),

    // 3rd lib: react-native-calendars
    resolveApp('./node_modules/react-native-calendars'),
  ]),
  addBabelPlugins(
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-react-native-web',
  ),
)
