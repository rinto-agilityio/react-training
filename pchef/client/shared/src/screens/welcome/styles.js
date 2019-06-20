import { StyleSheet } from 'react-native'
import { METRICS, COLORS, FONTS } from '../../themes'

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    paddingTop: 80,
  },
  secondaryContainer: {
    paddingTop: 100,
  },
  button: {
    position: 'absolute',
  },
  primaryButton: {
    top: METRICS.largeMargin,
    right: METRICS.mediumMargin + METRICS.smallMargin,
  },
  secondaryButton: {
    top: METRICS.extraLargeMargin,
    right: METRICS.largeMargin,
  },
  next: {
    fontWeight: FONTS.fontWeight.large,
    color: 'gray',
  },
  primaryNext: {
    fontSize: FONTS.fontSize.medium,
  },
  secondaryNext: {
    fontSize: FONTS.fontSize.large,
  },
  disabledNext: {
    opacity: METRICS.inactiveItem,
  },
  description: {
    fontWeight: FONTS.fontWeight.medium,
    textAlign: 'center',
  },
  primaryDescription: {
    fontSize: FONTS.fontSize.large,
  },
  secondaryDescription: {
    fontSize: FONTS.fontSize.extraLarge,
  },
  content: {
    textAlign: 'center',
  },
  primaryContent: {
    fontSize: FONTS.fontSize.base,
    marginTop: METRICS.smallMargin,
  },
  secondaryContent: {
    marginTop: METRICS.mediumMargin,
    fontSize: FONTS.fontSize.base,
  },
  introduction: {
    color: COLORS.flowerBlue,
    textAlign: 'center',
    fontWeight: FONTS.fontWeight.large,
    marginTop: METRICS.mediumMargin + METRICS.smallMargin,
  },
  primaryIntroduction: {
    fontSize: FONTS.fontSize.medium,
  },
  secondaryIntroduction: {
    marginTop: METRICS.largeMargin,
    fontSize: FONTS.fontSize.large,
  },
  divider: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  primaryDivider: {
    width: 80,
    height: 4,
    marginTop: METRICS.largeMargin,
    marginBottom: METRICS.largeMargin,
  },
  secondaryDivider: {
    width: 120,
    height: 6,
    marginTop: METRICS.extraLargeMargin,
    marginBottom: METRICS.extraLargeMargin,
  },
  categoryWrapper: {
    maxWidth: METRICS.largeContent,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  saveCategoryBtn: {
    width: METRICS.mediumWrapper,
    margin: 'auto',
  },
})

export default styles
