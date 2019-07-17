import { StyleSheet } from 'react-native'
import { METRICS, COLORS, FONTS } from '../../../../themes'

const styles = StyleSheet.create({
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
    opacity: METRICS.layer.active,
  },
  inactiveLayer: {
    opacity: METRICS.layer.inactive,
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
    left: METRICS.margin.sm,
    top: 8,
    fontSize: FONTS.fontSize.base,
  },
  secondaryName: {
    left: METRICS.margin.md,
    top: METRICS.margin.sm + METRICS.margin.md,
    fontSize: FONTS.fontSize.large,
  },
})

export default styles
