import { StyleSheet } from 'react-native'
import { METRICS, COLORS } from '../../../../themes'

export default StyleSheet.create({
  container: {
    margin: -1,
    minHeight: 300,
  },
  item: {
    margin: 1,
    position: 'relative',
  },
  layer: {
    position: 'absolute',
    backgroundColor: COLORS.black,
    zIndex: 1,
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
