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
    paddingLeft: METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
    minWidth: METRICS.smallScreen,
  },

  // Title
  title: {
    ...METRICS.truncate,
    color: COLORS.black,
    fontWeight: FONTS.fontWeight.large,
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
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
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
    height: METRICS.smallHeight,
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
    marginTop: METRICS.margin.md,
  },
  smallImage: {
    height: METRICS.bgImage.sm,
  },
  mediumImage: {
    height: METRICS.bgImage.md,
  },
  largeImage: {
    height: METRICS.bgImage.lg,
  },
})

export default styles
