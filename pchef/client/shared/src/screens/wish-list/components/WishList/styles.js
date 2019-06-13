// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  // Container
  container: {
    ...METRICS.flexCenter,
  },
  // Item
  wrapperItem: {
    display: 'flex',
    padding: METRICS.largePadding,
    borderBottomColor: COLORS.baseGray,
    borderBottomWidth: METRICS.smallBorderWidth,
  },
  wrapper: {
    zIndex: METRICS.iconZindex,
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

  // Button
  button: {
    marginTop: METRICS.largeMargin,
    marginBottom: METRICS.largeMargin,
  },
})

export default styles
