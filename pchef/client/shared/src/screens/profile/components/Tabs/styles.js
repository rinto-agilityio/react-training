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
    padding: METRICS.largePadding,
    paddingBottom: 0,
    backgroundColor: COLORS.white,
  },
  wrapContent: {
    maxWidth:
      screenWidth > METRICS.mediumScreen
        ? METRICS.extraLargeScreen
        : screenWidth,
    width: '100%',
    padding: METRICS.largePadding,
    backgroundColor: COLORS.tab.bg,
    flexDirection: screenWidth > METRICS.mediumScreen ? 'row' : 'column',
    flexWrap: screenWidth > METRICS.mediumScreen ? 'wrap' : 'nowrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: METRICS.screenHeight - METRICS.smallHeader,
  },
})

export default styles
