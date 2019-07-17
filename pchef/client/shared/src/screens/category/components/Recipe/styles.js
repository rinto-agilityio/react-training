// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS, COLORS } from '../../../../themes'

// Create style for Recipe
const styles = StyleSheet.create({
  recipe: {
    width: '33.3%',
    marginBottom: METRICS.margin.md,
    marginLeft: METRICS.margin.sm,
  },
  wrapper: {
    overflow: 'hidden',
    height: METRICS.wrapper.sm,
    width: '100%',
  },
  wrapperText: {
    width: '100%',
    overflow: 'hidden',
    height: 130,
  },
  smallText: {
    fontSize: FONTS.fontSize.base,
  },
  image: {
    width: METRICS.image.lg,
    height: METRICS.image.lg,
  },
  smallImage: {
    width: METRICS.image.md,
    height: METRICS.image.md,
  },
  icon: {
    position: 'absolute',
    bottom: METRICS.position.sm,
    right: METRICS.position.md,
  },
  largeGridContent: {
    borderWidth: METRICS.borderWidth.sm,
    borderColor: COLORS.baseGray,
    borderRadius: METRICS.borderRadius.xs,
    marginBottom: METRICS.margin.md,
    padding: METRICS.padding.sm,
  },
  largeListContent: {
    width: METRICS.screen.xl,
    borderBottomWidth: METRICS.borderWidth.sm,
    borderColor: COLORS.baseGray,
    height: METRICS.content.sm,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: METRICS.margin.lg,
  },
  largeGridWrapper: {
    width: '100%',
    marginTop: METRICS.padding.sm,
  },
  largeWrapper: {
    width: METRICS.screen.xl - METRICS.image.xl - METRICS.margin.xl,
    height: METRICS.wrapper.lg,
    paddingLeft: METRICS.padding.sm,
    marginLeft: METRICS.margin.md,
  },
  largeImage: {
    width: METRICS.image.xl,
    height: METRICS.image.xl,
  },
  title: {
    ...METRICS.truncate,
    fontSize: FONTS.fontSize.large,
    paddingBottom: METRICS.padding.sm,
  },
  largeTitle: {
    fontSize: FONTS.fontSize.extraLarge,
    paddingRight: METRICS.padding.sm,
    paddingBottom: METRICS.padding.sm,
  },
  largeText: {
    fontSize: FONTS.fontSize.medium,
    lineHeight: METRICS.lineHeight.md,
  },
})

export default styles
