// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../themes'

const styles = StyleSheet.create({
  webContainer: {
    width: METRICS.extraLargeScreen,
    marginTop: METRICS.resetMargin,
    marginBottom: METRICS.resetMargin,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  mobileContainer: {},
})

export default styles
