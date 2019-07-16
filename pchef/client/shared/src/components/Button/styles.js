// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../themes'

// Create style for button
const styles = StyleSheet.create({
  button: {
    ...METRICS.flexCenter,
    padding: METRICS.padding.sm,
  },
  title: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: FONTS.fontWeight.large,
  },
  default: {
    backgroundColor: COLORS.baseBlue,
  },
  success: {
    backgroundColor: COLORS.green,
  },
  danger: {
    backgroundColor: COLORS.red,
  },
  warning: {
    backgroundColor: COLORS.yellow,
  },
  info: {
    backgroundColor: COLORS.darkWhite,
  },
})

export default styles
