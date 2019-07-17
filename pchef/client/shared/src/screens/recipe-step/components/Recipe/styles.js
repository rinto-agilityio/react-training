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

  // Title step
  titleStep: {
    color: COLORS.recipe.stepTitle,
    fontWeight: 'bold',
    backgroundColor: COLORS.recipe.stepTitleBg,
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
  },

  // Description
  description: {
    color: COLORS.black,
    marginTop: METRICS.margin.md,
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
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
    justifyContent: 'space-between',
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

  // Step
  progressStep: {
    marginRight: tinyPadding,
    padding: 0,
    minWidth: 0,
  },
  activeStep: {
    backgroundColor: COLORS.recipe.stepActive,
  },
  inactiveStep: {
    backgroundColor: COLORS.recipe.stepInActive,
  },
  smallStep: {
    width: 25,
    height: METRICS.padding.sm,
  },
  mediumStep: {
    width: METRICS.padding.xl,
    height: METRICS.padding.sm,
  },
  largeStep: {
    width: 35,
    height: METRICS.padding.sm,
  },

  // views
  views: {
    textTransform: 'uppercase',
    color: COLORS.baseGray,
    paddingLeft: METRICS.padding.lg,
    paddingRight: METRICS.padding.lg,
  },
  smallViews: {
    fontSize: METRICS.position.sm,
  },
  mediumViews: {
    fontSize: 12,
  },
  largeViews: {
    fontSize: FONTS.fontSize.small,
  },
})

export default styles
