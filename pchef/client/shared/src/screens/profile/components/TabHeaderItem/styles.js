// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  tabItem: {
    width: METRICS.smallWrapper,
    borderBottomWidth: METRICS.smallBorderWidth,
    borderStyle: 'solid',
    borderColor: 'transparent',
    paddingLeft: METRICS.mediumPadding,
    paddingBottom: METRICS.smallPadding,
  },
  active: {
    borderColor: COLORS.black,
  },
  tabText: {
    fontWeight: FONTS.fontWeight.medium,
  },
})

export default styles
