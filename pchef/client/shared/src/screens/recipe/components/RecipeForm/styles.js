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
    width: '100%',
  },
  wrapperIcon: {
    backgroundColor: COLORS.baseGray,
    padding: METRICS.largePadding,
    marginTop: METRICS.mediumMargin,
  },
  wrapperClassifyIcon: {
    paddingBottom: 0,
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
  classifyIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: METRICS.largeMargin,
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
  smallTitleBtn: {
    fontSize: FONTS.fontSize.small,
  },
  mediumTitleBtn: {
    fontSize: FONTS.fontSize.medium,
  },
  largeTitleBtn: {
    fontSize: FONTS.fontSize.large,
  },

  // Directions
  wrapperDirections: {
    width: '75%',
    padding: METRICS.largePadding,
    borderColor: COLORS.baseGray,
    borderWidth: METRICS.smallBorderWidth,
    borderRadius: METRICS.mediumBorderRadius,
  },

  wrapperButton: {
    marginTop: METRICS.largeMargin,
    marginBottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  headerForm: {
    textAlign: 'center',
    marginTop: METRICS.largeMargin,
    fontSize: FONTS.fontSize.large,
  }
})

export default styles
