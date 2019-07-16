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
    marginTop: METRICS.margin.md,
    marginBottom: METRICS.margin.md,
    height: 150,
    width: '100%',
  },
  wrapperIcon: {
    backgroundColor: COLORS.baseGray,
    padding: METRICS.padding.lg,
    marginTop: METRICS.margin.md,
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
    borderRadius: METRICS.borderRadius.md,
    ...METRICS.flexCenter,
  },
  classifyIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: METRICS.margin.lg,
  },
  createIcon: {
    marginLeft: METRICS.margin.md,
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
    marginTop: METRICS.margin.lg,
  },

  // Input
  inputTitle: {
    fontWeight: 'bold',
  },
  inputDirections: {
    width: '100%',
    marginBottom: METRICS.margin.lg,
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
    minWidth: METRICS.icon.lg,
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
    padding: METRICS.padding.lg,
    borderColor: COLORS.baseGray,
    borderWidth: METRICS.smallBorderWidth,
    borderRadius: METRICS.borderRadius.md,
  },

  wrapperButton: {
    marginTop: METRICS.margin.lg,
    marginBottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: METRICS.margin.lg,
  },

  headerForm: {
    textAlign: 'center',
    marginTop: METRICS.margin.lg,
    fontSize: FONTS.fontSize.large,
  },
})

export default styles
