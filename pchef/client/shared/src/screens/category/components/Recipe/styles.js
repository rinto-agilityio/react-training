// Lib
import { StyleSheet, Dimensions } from 'react-native'

// Thmemes
import { METRICS, FONTS } from '../../../../themes'

// Define screen width
const screenWidth = Math.round(Dimensions.get('window').width)

// Create style for Recipe
const styles = StyleSheet.create({
  recipe: {
    width: screenWidth,
    borderBottomWidth: METRICS.smallBorderWidth,
    marginLeft: METRICS.mediumMargin,
    marginRight: METRICS.mediumMargin,
    marginBottom: METRICS.largeMargin,
  },
  wrapper: {
    height: METRICS.smallWrapper,
    width: screenWidth - METRICS.mediumWrapper,
    marginLeft: METRICS.mediumMargin,
    marginRight: METRICS.mediumMargin,
    marginBottom: METRICS.mediumMargin,
  },
  text: {
    overflow: 'hidden',
    height: 130,
    fontSize: FONTS.fontSize.base,
  },
  image: {
    width: METRICS.mediumImage,
    height: METRICS.mediumImage,
  },
  icon: {
    position: 'absolute',
    bottom: METRICS.smallPosition,
    right: METRICS.mediumPosition,
  },
  largeContent: {
    width: METRICS.extraLargeScreen,
    height: METRICS.smallContent,
    position: 'relative',
  },
  largeWrapper: {
    width: METRICS.extraLargeScreen - METRICS.extraLargeWrapper,
    height: METRICS.largeWrapper,
    paddingLeft: METRICS.mediumPadding,
  },
  largeImage: {
    width: METRICS.largeImage,
    height: METRICS.largeImage,
  },
  title: {
    fontSize: FONTS.fontSize.large,
    paddingBottom: METRICS.mediumPadding,
  },
  largeTitle: {
    fontSize: FONTS.fontSize.extraLarge,
  },
  largeText: {
    fontSize: FONTS.fontSize.medium,
    lineHeight: METRICS.mediumLineHeight,
  },
})

export default styles
