// Lib
import { StyleSheet } from 'react-native'

// Themes
import { METRICS, FONTS, COLORS } from '../../../../themes'

// Create style for Recipe
const styles = StyleSheet.create({
  recipe: {
    width: '33.3%',
    marginBottom: METRICS.mediumMargin,
    marginLeft: METRICS.smallMargin,
  },
  wrapper: {
    overflow: 'hidden',
    height: METRICS.smallWrapper,
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
    width: METRICS.mediumImage,
    height: METRICS.mediumImage,
  },
  smallImage: {
    width: METRICS.smallImage,
    height: METRICS.smallImage,
  },
  icon: {
    position: 'absolute',
    bottom: METRICS.smallPosition,
    right: METRICS.mediumPosition,
  },
  largeGridContent: {
    borderWidth: METRICS.smallBorderWidth,
    borderColor: COLORS.baseGray,
    borderRadius: METRICS.smallBorderRadius,
    marginBottom: METRICS.mediumMargin,
    padding: METRICS.mediumPadding,
  },
  largeListContent: {
    width: METRICS.extraLargeScreen,
    borderBottomWidth: METRICS.smallBorderWidth,
    borderColor: COLORS.baseGray,
    height: METRICS.smallContent,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: METRICS.largeMargin,
  },
  largeGridWrapper: {
    width: '100%',
    marginTop: METRICS.mediumPadding,
  },
  largeWrapper: {
    width:
      METRICS.extraLargeScreen - METRICS.largeImage - METRICS.extraLargeMargin,
    height: METRICS.largeWrapper,
    paddingLeft: METRICS.mediumPadding,
    marginLeft: METRICS.mediumMargin,
  },
  largeImage: {
    width: METRICS.largeImage,
    height: METRICS.largeImage,
  },
  title: {
    ...METRICS.truncate,
    fontSize: FONTS.fontSize.large,
    paddingBottom: METRICS.mediumPadding,
  },
  largeTitle: {
    fontSize: FONTS.fontSize.extraLarge,
    paddingRight: METRICS.mediumPadding,
    paddingBottom: METRICS.mediumPadding,
  },
  largeText: {
    fontSize: FONTS.fontSize.medium,
    lineHeight: METRICS.mediumLineHeight,
  },
})

export default styles
