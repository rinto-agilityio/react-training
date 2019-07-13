// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: METRICS.mediumPadding,
  },

  // Title
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: METRICS.largeMargin,
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
    marginBottom: METRICS.mediumMargin,
  },
  ingredients: {
    borderBottomColor: COLORS.baseGray,
    borderBottomWidth: 1,
  },

  // Directions
  directions: {
    marginTop: METRICS.largeMargin,
  },
  wrapperDescriptions: {
    lineHeight: METRICS.smallLineHeight,
    width: '85%',
  },
  mediumWrapperDescriptions: {
    width: '75%',
  },
  descriptionDirections: {
    color: COLORS.white,
    backgroundColor: COLORS.black,
    fontWeight: 'bold',
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.smallPadding,
  },

  // Button
  button: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.black,
    minWidth: METRICS.largeIcon,
  },
  smallButton: {
    borderRadius: METRICS.smallBorderRadius,
    padding: 0,
  },
  mediumButton: {
    borderRadius: METRICS.mediumBorderRadius,
    padding: METRICS.smallPadding,
  },
  largeButton: {
    borderRadius: METRICS.mediumBorderRadius,
    padding: METRICS.mediumPadding,
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
