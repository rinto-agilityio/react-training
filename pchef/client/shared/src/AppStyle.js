import { StyleSheet } from 'react-native'
import { METRICS, COLORS } from './themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lighterBlue,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: METRICS.mediumMargin,
  },
  instructions: {
    textAlign: 'center',
    color: COLORS.darkBlack,
    marginBottom: METRICS.smallMargin,
  },
})

export default styles
