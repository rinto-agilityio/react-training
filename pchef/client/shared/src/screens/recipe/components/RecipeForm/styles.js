// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  // Wrapper Icon
  wrapperIcon: {
    ...METRICS.flexCenter,
  },

  // Input
  inputTitle: {
    fontWeight: 'bold',
  },
  smallInput: {
    fontSize: FONTS.fontSize.small,
  },
  mediumInput: {
    fontSize: FONTS.fontSize.base,
  },
  largeInput: {
    fontSize: FONTS.fontSize.medium,
  },
})

export default styles
