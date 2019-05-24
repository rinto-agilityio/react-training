// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  wrapTabs: {
    flexDirection: 'row',
    padding: METRICS.largePadding,
    paddingBottom: 0,
    backgroundColor: COLORS.white,
  },
  wrapContent: {
    padding: METRICS.largePadding,
    backgroundColor: COLORS.lightSliver,
    flexDirection:
      METRICS.screenWidth > METRICS.mediumScreen ? 'row' : 'column',
    flexWrap: METRICS.screenWidth > METRICS.mediumScreen ? 'wrap' : 'nowrap',
    justifyContent: 'flex-start',
  },
  tabContentItem: {
    width: METRICS.screenWidth > METRICS.mediumScreen ? '33.3%' : '100%',
    paddingLeft: METRICS.mediumPadding,
    paddingRight: METRICS.mediumPadding,
  },
})

export default styles
