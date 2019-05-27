// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  primaryContainer: {
    paddingTop: METRICS.extraLargePadding,
  },
  secondaryContainer: {
    paddingTop: METRICS.extraLargePadding + METRICS.largePadding,
    maxWidth: METRICS.extraLargeScreen,
    width: '100%',
    margin: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  indicator: {
    marginTop: METRICS.largeMargin * 10,
  },
})

export default styles
