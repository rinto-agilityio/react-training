// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../themes'

// Create style for button
const styles = StyleSheet.create({
  button: {
    ...METRICS.flexCenter,
    padding: METRICS.smallPadding,
  },
  title: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: FONTS.fontWeight.large,
  },
  default: {
    backgroundColor: COLORS.button.default,
  },
  success: {
    backgroundColor: COLORS.button.success,
  },
  danger: {
    backgroundColor: COLORS.button.danger,
  },
  warning: {
    backgroundColor: COLORS.button.warning,
  },
  info: {
    backgroundColor: COLORS.button.info,
  },
})

export default styles
