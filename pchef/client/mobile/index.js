/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

// TODO: Need a flag config for storybook or run app
// import Storybook from './storybook'

// AppRegistry.registerComponent(appName, () => Storybook)
