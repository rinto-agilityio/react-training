// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS, COLORS } from '../../../../../themes'

const styles = StyleSheet.create({
  // Wrapper
  wrapper: {
    zIndex: METRICS.zIndex.min,
    width: METRICS.wrapper.xl,
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
