import { StyleSheet } from 'react-native'
import { METRICS } from './themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: METRICS.mediumMargin,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: METRICS.smallMargin,
  },
})

export default styles
