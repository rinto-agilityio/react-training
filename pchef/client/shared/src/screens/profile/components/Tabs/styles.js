// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

const { screenWidth } = METRICS

// Create style for Header
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrapTabs: {
    maxWidth:
      screenWidth > METRICS.mediumScreen
        ? METRICS.extraLargeScreen
        : screenWidth,
    width: '100%',
    flexDirection: 'row',
    padding: METRICS.padding.lg,
    paddingBottom: 0,
    backgroundColor: COLORS.white,
  },
  wrapContent: {
    maxWidth:
      screenWidth > METRICS.mediumScreen
        ? METRICS.extraLargeScreen
        : screenWidth,
    width: '100%',
    padding: METRICS.padding.lg,
    backgroundColor: COLORS.lightSliver,
    flexDirection: screenWidth > METRICS.mediumScreen ? 'row' : 'column',
    flexWrap: screenWidth > METRICS.mediumScreen ? 'wrap' : 'nowrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: METRICS.screenHeight - METRICS.header.sm,
  },
})

export default styles
