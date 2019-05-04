const fs = require('fs')
const path = require('path')
const {
  override,
  addBabelPlugins,
  babelInclude
} = require('customize-cra')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = override(
  babelInclude([
    resolveApp('src'),
    resolveApp('../shared/src'),
    // 3rd lib: react-native-elements
    resolveApp('../../node_modules/react-native-elements'),
    resolveApp('../../node_modules/react-native-ratings'),
    resolveApp('../../node_modules/react-native-vector-icons'),
    resolveApp('../../node_modules/react-native-calendars'),
  ]),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-react-native-web",
  )
)
