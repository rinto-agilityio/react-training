// Libs
import { StyleSheet } from 'react-native'

// Themes
import { COLORS, METRICS } from '../../../../themes'

const tinyPadding = 3

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

  // Title step
  titleStep: {
    color: COLORS.baseGray,
    fontWeight: 'bold',
    backgroundColor: COLORS.blackLighter,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  smallTitleStep: {
    fontSize: METRICS.fontSize.small,
  },
  mediumTitleStep: {
    fontSize: METRICS.fontSize.medium,
  },
  largeTitleStep: {
    fontSize: METRICS.fontSize.large,
  },

  // Description
  description: {
    color: COLORS.black,
    marginTop: METRICS.mediumMargin,
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

  // Step
  progressStep: {
    marginRight: 3,
  },
  activeStep: {
    backgroundColor: COLORS.baseBlue,
  },
  inactiveStep: {
    backgroundColor: COLORS.baseGray,
  },
  smallStep: {
    paddingTop: tinyPadding,
    paddingBottom: tinyPadding,
    paddingLeft: METRICS.mediumPadding,
    paddingRight: METRICS.mediumPadding,
  },
  mediumStep: {
    paddingTop: tinyPadding,
    paddingBottom: tinyPadding,
    paddingLeft: METRICS.mediumPosition,
    paddingRight: METRICS.mediumPosition,
  },
  largeStep: {
    paddingTop: METRICS.smallPadding,
    paddingBottom: METRICS.smallPadding,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },

  // views
  views: {
    textTransform: 'uppercase',
    color: COLORS.baseGray,
    paddingLeft: METRICS.largePadding,
    paddingRight: METRICS.largePadding,
  },
  smallDescription: {
    fontSize: METRICS.smallPosition,
  },
  mediumDescription: {
    fontSize: 12,
  },
  largeDescription: {
    fontSize: METRICS.fontSize.small,
  },
})

export default styles
