// Libs
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS, COLORS } from '../../../../../themes'

const styles = StyleSheet.create({
  // Wrapper
  wrapper: {
    zIndex: METRICS.iconZindex,
    width: METRICS.extraLargeWrapper,
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
