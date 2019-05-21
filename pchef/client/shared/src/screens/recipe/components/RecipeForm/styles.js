// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS, COLORS } from '../../../../themes'

const styles = StyleSheet.create({
  // Icon
  wrapperMainPhoto: {
    ...METRICS.flexCenter,
    flexDirection: 'column',
    backgroundColor: COLORS.baseGray,
    marginTop: METRICS.mediumMargin,
    marginBottom: METRICS.mediumMargin,
    height: 150,
  },
  wrapperIcon: {
    backgroundColor: COLORS.baseGray,
    padding: METRICS.largePadding,
    marginTop: METRICS.mediumMargin,
  },
  wrapperIconDirections: {
    width: '100%',
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    borderRadius: METRICS.mediumBorderRadius,
    ...METRICS.flexCenter,
  },
  createIcon: {
    marginLeft: METRICS.mediumMargin,
  },
  smallIcon: {
    width: METRICS.smallDirectionsIcon,
    height: METRICS.smallDirectionsIcon,
  },
  mediumIcon: {
    width: METRICS.mediumDirectionsIcon,
    height: METRICS.mediumDirectionsIcon,
  },
  largeIcon: {
    width: METRICS.largeDirectionsIcon,
    height: METRICS.largeDirectionsIcon,
  },

  // Label
  label: {
    marginLeft: 0,
  },
  labelMainPhoto: {
    marginTop: METRICS.largeMargin,
  },

  // Input
  inputTitle: {
    fontWeight: 'bold',
  },
  inputDirections: {
    width: '100%',
    marginBottom: METRICS.largeMargin,
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

  // Button
  button: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.black,
    minWidth: METRICS.largeIcon,
    marginRight: METRICS.largeMargin * 2,
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

  // Directions
  wrapperDirections: {
    width: '75%',
    padding: METRICS.largePadding,
    borderColor: COLORS.baseGray,
    borderWidth: METRICS.smallBorderWidth,
    borderRadius: METRICS.mediumBorderRadius,
  },
})

export default styles
