// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

const styles = StyleSheet.create({
  webContainer: {
    width: METRICS.screen.xl,
    marginTop: METRICS.margin.none,
    marginBottom: METRICS.margin.none,
    marginRight: 'auto',
    marginLeft: 'auto',
    zIndex: METRICS.zIndex.min,
  },
  mobileContainer: {},
})

export default styles
