// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },

  largeWrapper: {
    width: METRICS.item.sm,
    paddingLeft: METRICS.padding.sm,
    paddingRight: METRICS.padding.sm,
    minWidth: METRICS.screen.sm,
  },

  // Title
  title: {
    ...METRICS.truncate,
    overflow: 'hidden',
    color: COLORS.black,
    fontWeight: FONTS.fontWeight.large,
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
  },
  smallTitle: {
    ...METRICS.truncate,
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
    ...METRICS.truncate,
    color: COLORS.baseGray,
    fontWeight: FONTS.fontWeight.large,
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
    height: METRICS.height.sm,
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
