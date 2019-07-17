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
    height: METRICS.smallHeader,
  },
  mediumHeader: {
    height: METRICS.mediumHeader,
  },
  largeHeader: {
    height: METRICS.largeHeader,
  },
  title: {
    color: COLORS.white,
    fontWeight: FONTS.fontWeight.large,
    marginBottom: METRICS.smallMargin,
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
    borderRadius: METRICS.largeBorderRadius,
    borderWidth: 2,
    borderColor: COLORS.white,
    backgroundColor: COLORS.button.default,
    paddingTop: METRICS.smallPadding,
    paddingBottom: METRICS.smallPadding,
    paddingRight: METRICS.largePadding,
    paddingLeft: METRICS.largePadding,
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
    padding: METRICS.mediumPadding,
    ...METRICS.flexCenter,
  },
})

export default styles
