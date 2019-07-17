// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

// Create style for header category
const styles = StyleSheet.create({
  wrapperHeader: {
    display: 'flex',
  },
  smallHeader: {
    height: METRICS.header.sm,
  },
  mediumHeader: {
    height: METRICS.header.md,
  },
  largeHeader: {
    height: METRICS.header.lg,
  },
  title: {
    color: COLORS.white,
    fontWeight: FONTS.fontWeight.large,
    marginBottom: METRICS.margin.sm,
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
  button: {
    borderRadius: METRICS.borderRadius.lg,
    borderWidth: 2,
    borderColor: COLORS.white,
    backgroundColor: COLORS.button.default,
    paddingTop: METRICS.padding.sm,
    paddingBottom: METRICS.padding.sm,
    paddingRight: METRICS.padding.lg,
    paddingLeft: METRICS.padding.lg,
  },
  titleBtn: {
    fontWeight: FONTS.fontWeight.large,
    color: COLORS.white,
    fontSize: FONTS.fontSize.small,
  },
  wrapperHeaderIcon: {
    backgroundColor: COLORS.mainHeader.iconBg,
    display: 'flex',
    flexDirection: 'row',
    padding: METRICS.padding.sm,
    ...METRICS.flexCenter,
  },
})

export default styles
