// Lib
import { StyleSheet, Dimensions } from 'react-native'

// Thmemes
import { METRICS } from '../../../../themes'

// Define screen width
const screenWidth = Math.round(Dimensions.get('window').width)

// Create style for Recipe
const styles = StyleSheet.create({
  wrapper: {
    height: 150,
    width: screenWidth - 170,
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
    bottom: 10,
    right: 15,
  },
  largeContent: {
    width: 700,
    height: 400,
    position: 'relative',
  },
  largeWrapper: {
    width: 380,
    height: 300,
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
    lineHeight: 25,
  },
});

export default styles
