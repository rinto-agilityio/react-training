import { StyleSheet } from 'react-native'
import { METRICS, COLORS } from './themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.app.containerBg,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: METRICS.mediumMargin,
  },
})

export default styles
