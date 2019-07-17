// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  default: {
    height: METRICS.input.md,
    borderColor: COLORS.grayDarker,
    borderBottomWidth: 1,
    fontSize: FONTS.fontSize.medium,
    color: COLORS.black,
  },
})

export default styles
