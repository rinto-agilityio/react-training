/**
 * @format
 */
// This config for web
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})
