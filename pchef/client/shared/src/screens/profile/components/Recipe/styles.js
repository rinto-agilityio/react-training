// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },

  largeWrapper: {
    width: METRICS.smallPercentItem,
    paddingLeft: METRICS.mediumPadding,
    paddingRight: METRICS.mediumPadding,
    minWidth: METRICS.smallScreen,
  },

  // Title
  title: {
    ...METRICS.truncate,
    color: COLORS.black,
    fontWeight: FONTS.fontWeight.large,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
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

  // Description
  description: {
    color: COLORS.baseGray,
    fontWeight: FONTS.fontWeight.large,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  smallDescription: {
    fontSize: FONTS.fontSize.small,
  },
  mediumDescription: {
    fontSize: FONTS.fontSize.medium,
  },
  largeDescription: {
    fontSize: FONTS.fontSize.large,
  },

  // Image
  image: {
    width: '100%',
    marginTop: METRICS.mediumMargin,
  },
  smallImage: {
    height: METRICS.smallBgImage,
  },
  mediumImage: {
    height: METRICS.mediumBgImage,
  },
  largeImage: {
    height: METRICS.largeBgImage,
  },
})

export default styles
