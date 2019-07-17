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
    padding: METRICS.padding.lg,
    marginTop: METRICS.margin.md,
    zIndex: METRICS.zIndex.min,
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.baseBlue,
    borderRadius: METRICS.borderRadius.md,
    ...METRICS.flexCenter,
    paddingRight: METRICS.padding.sm,
  },
  classifyIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: METRICS.margin.lg,
  },
  wrapperMainPhoto: {
    ...METRICS.flexCenter,
    flexDirection: 'column',
    backgroundColor: COLORS.baseBlue,
    marginTop: METRICS.margin.md,
    marginBottom: METRICS.margin.md,
    paddingBottom: METRICS.padding.sm,
  },

  // Dialog
  // Width full container for small/medium dialog
  largeDialog: {
    width: METRICS.content.md,
    alignSelf: 'center',
  },

  // Text
  text: {
    marginBottom: METRICS.margin.lg,
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
    marginTop: METRICS.margin.hg,
  },

  // Button
  button: {
    zIndex: METRICS.zIndex.min,
    marginTop: METRICS.margin.lg,
    marginBottom: METRICS.margin.lg,
  },
})

export default styles
