// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

// Create style for Icon
const styles = StyleSheet.create({
  wrapIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: METRICS.margin.md,
    textAlign: 'center',
  },
})

export default styles
