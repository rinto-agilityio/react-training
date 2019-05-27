// Lib
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

// Create style for Header
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
  },
  primaryContainer: {
    alignItems: 'flex-start',
    paddingBottom: METRICS.largePadding,
    paddingTop: METRICS.largePadding,
    paddingLeft: METRICS.smallPadding + METRICS.mediumPadding,
  },
  secondaryContainer: {
    paddingLeft: METRICS.largePadding * 2 + METRICS.mediumPadding,
    paddingRight: METRICS.largePadding * 2 + METRICS.mediumPadding,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryWrapIcon: {
    marginTop: METRICS.mediumMargin,
    marginLeft: METRICS.largeMargin,
    marginBottom: METRICS.mediumMargin,
  },

  text: {
    fontSize: FONTS.fontSize.extraLarge,
    color: COLORS.white,
    fontWeight: FONTS.fontWeight.large,
  },
  image: {
    width: METRICS.extraSmallImage / 2,
    height: METRICS.extraSmallImage / 2,
  },
  secondaryImage: {
    width: METRICS.smallImage / 2,
    height: METRICS.smallImage / 2,
  },
  secondaryContent: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingRight: METRICS.extraLargePadding,
  },
  imageWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: METRICS.smallMargin,
    width: METRICS.extraExtraSmallImage,
    height: METRICS.extraExtraSmallImage,
    borderRadius: METRICS.mediumBorderRadius + METRICS.largeBorderRadius,
  },
  primaryImageWrapper: {
    marginLeft: METRICS.mediumMargin,
  },
  secondaryImageWrapper: {
    marginTop: METRICS.largeMargin,
    marginBottom: METRICS.largeMargin,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default styles
