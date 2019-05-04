// $FlowFixMe
import { AppRegistry } from 'react-native'

import App from './app'

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root')
})
