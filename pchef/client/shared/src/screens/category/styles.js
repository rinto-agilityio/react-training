// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

// Create style for header category
const styles = StyleSheet.create({
  container: {
    marginTop: METRICS.largeMargin,
    marginRight: 'auto',
    marginBottom: METRICS.largeMargin,
    marginLeft: 'auto',
    position: 'relative',
    width: METRICS.extraLargeScreen,
  },
})

export default styles
