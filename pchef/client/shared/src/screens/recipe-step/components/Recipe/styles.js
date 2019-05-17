// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS, FONTS } from '../../../../themes'

const tinyPadding = 3

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },

  // Title
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
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

  // Title step
  titleStep: {
    color: COLORS.baseGray,
    fontWeight: 'bold',
    backgroundColor: COLORS.blackLighter,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },

  // Description
  description: {
    color: COLORS.black,
    marginTop: METRICS.mediumMargin,
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

  // Step
  progressStep: {
    marginRight: tinyPadding,
    padding: 0,
    minWidth: 0,
  },
  activeStep: {
    backgroundColor: COLORS.baseBlue,
  },
  inactiveStep: {
    backgroundColor: COLORS.baseGray,
  },
  smallStep: {
    width: 25,
    height: METRICS.smallPadding,
  },
  mediumStep: {
    width: METRICS.extraLargePadding,
    height: METRICS.smallPadding,
  },
  largeStep: {
    width: 35,
    height: METRICS.smallPadding,
  },

  // views
  views: {
    textTransform: 'uppercase',
    color: COLORS.baseGray,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  smallViews: {
    fontSize: METRICS.smallPosition,
  },
  mediumViews: {
    fontSize: 12,
  },
  largeViews: {
    fontSize: FONTS.fontSize.small,
  },
})

export default styles
