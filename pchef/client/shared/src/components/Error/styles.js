// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, FONTS } from '../../themes'

// Create style for button
const styles = StyleSheet.create({
  error: {
    color: COLORS.red,
    fontSize: FONTS.fontSize.medium,
    fontStyle: FONTS.fontStyle.italic,
  },
})

export default styles
