// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: METRICS.padding.sm,
  },

  // Title
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: METRICS.margin.lg,
  },
  smallTitle: {
    fontSize: FONTS.fontSize.medium,
  },
  mediumTitle: {
    fontSize: FONTS.fontSize.large,
  },
  largeTitle: {
    fontSize: FONTS.fontSize.extraLarge,
  },

  // Description
  smallDescription: {
    fontSize: FONTS.fontSize.small,
  },
  mediumDescription: {
    fontSize: FONTS.fontSize.medium,
  },
  largeDescription: {
    fontSize: FONTS.fontSize.large,
  },

  // Ingredients
  descriptionIngredients: {
    color: COLORS.black,
    marginBottom: METRICS.margin.md,
  },
  ingredients: {
    borderBottomColor: COLORS.baseGray,
    borderBottomWidth: 1,
  },

  // Directions
  directions: {
    marginTop: METRICS.margin.lg,
  },
  wrapperDescriptions: {
    lineHeight: METRICS.lineHeight.sm,
    width: '85%',
  },
  mediumWrapperDescriptions: {
    width: '75%',
  },
  descriptionDirections: {
    color: COLORS.white,
    backgroundColor: COLORS.black,
    fontWeight: 'bold',
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.sm,
  },

  // Button
  button: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.black,
    minWidth: METRICS.largeIcon,
  },
  smallButton: {
    borderRadius: METRICS.borderRadius.xs,
    padding: 0,
  },
  mediumButton: {
    borderRadius: METRICS.borderRadius.md,
    padding: METRICS.padding.sm,
  },
  largeButton: {
    borderRadius: METRICS.borderRadius.md,
    padding: METRICS.padding.sm,
  },
  titleBtn: {
    fontWeight: 'bold',
  },
  smallTitleBtn: {
    fontSize: FONTS.fontSize.medium,
  },
  mediumTitleBtn: {
    fontSize: FONTS.fontSize.large,
  },
  largeTitleBtn: {
    fontSize: FONTS.fontSize.extraLarge,
  },

  // Style for text in tag component
  customTextStyle: {
    marginBottom: '5px',
  },
})

export default styles
