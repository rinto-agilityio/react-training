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
    width: '100%',
    padding: METRICS.padding.lg,
    borderBottomColor: COLORS.baseGray,
    borderBottomWidth: METRICS.smallBorderWidth,
  },

  // Date
  date: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: METRICS.margin.lg,
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
    marginTop: METRICS.margin.lg,
    marginBottom: METRICS.margin.lg,
  },
})

export default styles
