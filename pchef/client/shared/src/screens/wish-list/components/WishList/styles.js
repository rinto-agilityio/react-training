// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  // Item
  wrapperItem: {
    display: 'flex',
    padding: METRICS.largePadding,
    borderBottomColor: COLORS.baseGray,
    borderBottomWidth: METRICS.smallBorderWidth,
  },

  // Date
  date: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: METRICS.largeMargin,
  },
  smallDate: {
    fontSize: FONTS.fontSize.medium,
  },
  mediumDate: {
    fontSize: FONTS.fontSize.large,
  },
  largeDate: {
    fontSize: FONTS.fontSize.extraLarge,
  },

  // Content
  smallContent: {
    fontSize: FONTS.fontSize.small,
  },
  mediumContent: {
    fontSize: FONTS.fontSize.medium,
  },
  largeContent: {
    fontSize: FONTS.fontSize.large,
  },
  specialContent: {
    fontWeight: 'bold',
  },
})

export default styles
