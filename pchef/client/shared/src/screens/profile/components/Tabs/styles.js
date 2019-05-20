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
    backgroundColor: '#f2f2f2',
    flexDirection: METRICS.screenWidth > METRICS.mediumScreen ? 'row' : 'column',
    flexWrap: METRICS.screenWidth > METRICS.mediumScreen ? 'wrap' : 'nowrap',
    justifyContent: 'space-between',
  },
  tabContentItem: {
    width: METRICS.screenWidth > METRICS.mediumScreen ? '30%' : '100%',
  },
})

export default styles
