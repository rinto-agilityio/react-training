// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  tabItem: {
    width: METRICS.wrapper.sm,
    borderBottomWidth: METRICS.borderWidth.sm,
    borderStyle: 'solid',
    borderColor: 'transparent',
    paddingLeft: METRICS.padding.sm,
    paddingBottom: METRICS.padding.sm,
  },
  active: {
    borderColor: COLORS.black,
  },
  tabText: {
    fontWeight: FONTS.fontWeight.medium,
  },
})

export default styles
