import { StyleSheet, Dimensions } from 'react-native'
import { METRICS, COLORS } from '../../../../themes'

// get device dimension
const width = Math.round(Dimensions.get('window').width)

// get item dimension base on device width
const itemDimension = (width - 4) / 3

export default StyleSheet.create({
  container: {
    margin: -1,
  },
  secondaryContainer: {
    width: METRICS.categoryContainer,
  },
  item: {
    margin: 1,
  },
  primaryImage: {
    width: itemDimension,
    height: itemDimension,
  },
  secondaryImage: {
    width: METRICS.categoryItem,
    height: METRICS.categoryItem,
  },
  layer: {
    position: 'absolute',
    backgroundColor: COLORS.black,
    zIndex: 1,
  },
  primaryLayer: {
    width: itemDimension,
    height: itemDimension,
  },
  secondaryLayer: {
    width: METRICS.categoryItem,
    height: METRICS.categoryItem,
  },
  activeLayer: {
    opacity: 0.2,
  },
  inactiveLayer: {
    opacity: 0.7,
  },
  name: {
    position: 'absolute',
    fontWeight: 'bold',
    zIndex: 2,
  },
  activeName: {
    color: COLORS.white,
  },
  inactiveName: {
    color: COLORS.halfWhite,
  },
  primaryName: {
    left: METRICS.smallMargin,
    top: 8,
    fontSize: METRICS.fontSize.base,
  },
  secondaryName: {
    left: METRICS.mediumMargin,
    top: METRICS.smallMargin + METRICS.mediumMargin,
    fontSize: METRICS.fontSize.large,
  },
})
