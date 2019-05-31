// Lib
import { StyleSheet, Dimensions } from 'react-native'

// Thmemes
import { METRICS, FONTS } from '../../../../themes'

// Define screen width
const screenWidth = Math.round(Dimensions.get('window').width)

// Create style for Recipe
const styles = StyleSheet.create({
  recipe: {
    // width: screenWidth,
    width: '33.33%',
    boxSizing: 'border-box',
    margin: 0,
    // borderWidth: METRICS.smallBorderWidth,
    borderColor: 'red',
    // marginLeft: METRICS.mediumMargin,
    // marginRight: METRICS.mediumMargin,
    marginBottom: METRICS.mediumMargin,
  },
  wrapper: {
    overflow: 'hidden',
    height: METRICS.smallWrapper,
    width: screenWidth - METRICS.mediumImage - METRICS.largeMargin,
    marginLeft: METRICS.mediumMargin,
    // marginRight: METRICS.mediumMargin,
    // marginBottom: METRICS.mediumMargin,
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
  icon: {
    position: 'absolute',
    bottom: METRICS.smallPosition,
    right: METRICS.mediumPosition,
  },
  largeGridContent: {
    borderColor: 'green',
  },
  largeListContent: {
    width: METRICS.extraLargeScreen,
    borderBottomWidth: METRICS.smallBorderWidth,
    borderColor: 'pink',
    height: METRICS.smallContent,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: METRICS.largeMargin,
  },
  largeWrapper: {
    width: METRICS.extraLargeScreen - METRICS.largeImage - METRICS.extraLargeMargin,
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
