// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

// Create style for Icon
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: METRICS.margin.md,
  },
})

export default styles
