// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

const styles = StyleSheet.create({
  webContainer: {
    width: METRICS.extraLargeScreen,
    marginTop: METRICS.margin.none,
    marginBottom: METRICS.margin.none,
    marginRight: 'auto',
    marginLeft: 'auto',
    zIndex: METRICS.iconZindex,
  },
  mobileContainer: {},
})

export default styles
