// Lib
import { StyleSheet, Dimensions } from 'react-native'

// Thmemes
import { METRICS } from '../../../../themes'

// Define screen width
const screenWidth = Math.round(Dimensions.get('window').width)

// Create style for Recipe
const styles = StyleSheet.create({
  wrapper: {
    height: METRICS.smallWrapper,
    width: screenWidth - METRICS.mediumWrapper,
    marginLeft: METRICS.mediumMargin,
    marginRight: METRICS.mediumMargin,
  },
  text: {
    overflow: 'hidden',
    height: 130,
    fontSize: METRICS.fontSize.base,
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
    width: METRICS.largeContent,
    height: METRICS.smallContent,
    position: 'relative',
  },
  largeWrapper: {
    width: METRICS.xLargeWrapper,
    height: METRICS.largeWrapper,
    paddingLeft: METRICS.xLargePadding,
  },
  largeImage: {
    width: METRICS.largeImage,
    height: METRICS.largeImage,
  },
  title: {
    fontSize: METRICS.fontSize.large,
    paddingBottom: METRICS.mediumPadding,
  },
  largeTitle: {
    fontSize: METRICS.fontSize.xLarge,
  },
  largeText: {
    fontSize: METRICS.fontSize.medium,
    lineHeight: METRICS.mediumLineHeight,
  },
});

export default styles
