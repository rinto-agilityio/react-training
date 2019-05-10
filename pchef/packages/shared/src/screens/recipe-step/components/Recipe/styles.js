// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },

  largeWrapper: {
    width: METRICS.largeWrapper,
  },

  // Title
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  smallTitle: {
    fontSize: METRICS.fontSize.medium,
  },
  mediumTitle: {
    fontSize: METRICS.fontSize.large,
  },
  largeTitle: {
    fontSize: METRICS.fontSize.extraLarge,
  },

  // Description
  description: {
    color: COLORS.baseGray,
    fontWeight: 'bold',
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  smallDescription: {
    fontSize: METRICS.fontSize.small,
  },
  mediumDescription: {
    fontSize: METRICS.fontSize.medium,
  },
  largeDescription: {
    fontSize: METRICS.fontSize.large,
  },

  // Image
  image: {
    width: '100%',
    marginTop: METRICS.mediumMargin,
    justifyContent: 'space-between',
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
