// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS, COLORS } from '../../../../themes'

const styles = StyleSheet.create({
  // Container
  container: {
    ...METRICS.flexCenter,
  },
  wrapperIcon: {
    backgroundColor: COLORS.baseGray,
    padding: METRICS.largePadding,
    marginTop: METRICS.mediumMargin,
    zIndex: METRICS.iconZindex,
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.green,
    borderRadius: METRICS.mediumBorderRadius,
    ...METRICS.flexCenter,
    paddingRight: METRICS.mediumPadding,
  },
  classifyIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: METRICS.largeMargin,
  },
  wrapperMainPhoto: {
    ...METRICS.flexCenter,
    flexDirection: 'column',
    backgroundColor: COLORS.green,
    marginTop: METRICS.mediumMargin,
    marginBottom: METRICS.mediumMargin,
    paddingBottom: METRICS.mediumPadding,
  },
  // Dialog
  // Width full container for small/medium dialog
  largeDialog: {
    width: METRICS.mediumContent,
    alignSelf: 'center',
  },

  // Input
  smallInput: {
    fontSize: FONTS.fontSize.small,
  },
  mediumInput: {
    fontSize: FONTS.fontSize.base,
  },
  largeInput: {
    fontSize: FONTS.fontSize.medium,
  },
  
  // Modal
  modal: {
    marginTop: METRICS.superLargeMargin,
  },
})

export default styles
