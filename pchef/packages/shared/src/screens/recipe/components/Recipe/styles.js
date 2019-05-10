// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

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
    fontSize: METRICS.fontSize.medium,
  },
  mediumTitle: {
    fontSize: METRICS.fontSize.large,
  },
  largeTitle: {
    fontSize: METRICS.fontSize.extraLarge,
  },

  // Description
  smallDescription: {
    fontSize: METRICS.fontSize.small,
  },
  mediumDescription: {
    fontSize: METRICS.fontSize.medium,
  },
  largeDescription: {
    fontSize: METRICS.fontSize.large,
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
  },
  smallButton: {
    borderRadius: METRICS.smallBorderRadius,
    paddingLeft: METRICS.mediumPadding,
    paddingRight: METRICS.mediumPadding,
  },
  mediumButton: {
    borderRadius: METRICS.mediumBorderRadius,
    paddingTop: METRICS.smallPadding,
    paddingBottom: METRICS.smallPadding,
    paddingLeft: METRICS.basePadding,
    paddingRight: METRICS.basePadding,
  },
  largeButton: {
    borderRadius: METRICS.mediumBorderRadius,
    paddingTop: METRICS.mediumPadding,
    paddingBottom: METRICS.mediumPadding,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  titleBtn: {
    fontWeight: 'bold',
  },
  smallTitleBtn: {
    fontSize: METRICS.fontSize.medium,
  },
  mediumTitleBtn: {
    fontSize: METRICS.fontSize.large,
  },
  largeTitleBtn: {
    fontSize: METRICS.fontSize.extraLarge,
  },
})

export default styles
